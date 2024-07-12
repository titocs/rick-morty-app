import { gql, useMutation, useQuery } from "@apollo/client";
import Loader from "../components/ui/loader";
import { useRouter } from "@tanstack/react-router";
import { GoArrowLeft } from "react-icons/go";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { firestore } from "../config/firebase";
import { useRecoilState, useSetRecoilState } from "recoil";
import { characterState, locationsState } from "../store/store";
import { toast } from "sonner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GET_CHARACTER_BY_ID } from "../graphql/queries";

interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: {
    id: string;
    name: string;
  } | null;
}

interface GetCharacterByIdData {
  character: Character;
}

interface CharacterProps {
  id: string;
}

const DetailCharacter: React.FC<CharacterProps> = ({ id }: CharacterProps) => {
  const [locationName, setLocationName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [char, setChar] = useRecoilState(characterState);
  const router = useRouter();
  
  const { loading, error, data } = useQuery<GetCharacterByIdData>(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  // Gak jadi pake Firebase
  // const handleAssign = async (locationName, characterId) => {
  //   if (locationName.trim() === '') return;

  //   const locationRef = doc(firestore, 'locations', locationName);
  //   const locationDoc = await getDoc(locationRef);

  //   if (!locationDoc.exists()) {
  //     await setDoc(locationRef, { characters: [characterId] });
  //   } else {
  //     const characters = locationDoc.data().characters;
  //     if (!characters.includes(characterId)) {
  //       await updateDoc(locationRef, { characters: [...characters, characterId] });
  //     }
  //   }

  //   setIsDialogOpen(false);
  // };
  
  const handleAssign = () => {
    const assignedCharacter = {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
      image: character.image,
      location: {
        id: id,
        name: locationName.trim(),
      },
    };
  
    let assignedCharacters = JSON.parse(localStorage.getItem('assignedCharacters') || '[]');
  
    const existingCharacterIndex = assignedCharacters.findIndex((char: any) => char.id === assignedCharacter.id);
  
    if (existingCharacterIndex !== -1) {
      assignedCharacters[existingCharacterIndex].location = assignedCharacter.location;
    } else {
      assignedCharacters = [...assignedCharacters, assignedCharacter];
    }
  
    localStorage.setItem('assignedCharacters', JSON.stringify(assignedCharacters));
  
    let assignedLocations = JSON.parse(localStorage.getItem('assignedLocations') || '[]');
  
    const existingLocationIndex = assignedLocations.findIndex((loc: any) => loc.name === assignedCharacter.location.name);
  
    if (existingLocationIndex === -1) {
      assignedLocations = [...assignedLocations, assignedCharacter.location];
      localStorage.setItem('assignedLocations', JSON.stringify(assignedLocations));
    }
    
    setIsDialogOpen(false);
  };
  
  if(loading) {
    return <Loader />
  }

  if (!data || !data.character) {
    return <p>No character found for ID: {id}</p>;
  }
  const { character } = data;

  const onBack = () => router.history.back();

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Assign Location to Character</DialogTitle>
            <DialogDescription>
            Enter a unique name for the location and click assign.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="location" className="text-right text-sm">
                Location Name
              </label>
              <input
                id="location"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                className="col-span-3 border rounded-md outline none border-black focus:outline-none p-2 px-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleAssign}>Assign</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="md:px-5">
        <button className="flex items-center gap-1 border rounded-md px-3 py-1 border-black" onClick={onBack}>
          <GoArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="my-5 mx-auto rounded-lg border border-slate-300 w-[317px] md:flex md:w-[600px]">
          <div>
            <div className="border-b">
              <ul className="flex items-center gap-2 p-2 px-4">
                <li className="w-4 h-4 rounded-full bg-red-500"></li>
                <li className="w-4 h-4 rounded-full bg-yellow-300"></li>
                <li className="w-4 h-4 rounded-full bg-green-500"></li>
              </ul>
            </div>
            <div className="h-[315px]">
              <LazyLoadImage className="h-full w-full object-cover" src={character.image} alt="" />
            </div>
          </div>
          <div className="px-4 mb-3 md:flex-grow md:flex md:flex-col">
            <h1 className="text-center text-lg font-semibold md:pt-6">{ character.name }</h1>
            <ul className="my-3">
              <li className="flex items-center">
                <span>Gender: </span>
                { character.gender === 'male' ? <IoMdMale size={23} /> : <IoMdFemale size={23} />}
              </li>
              <li>
                <span>Status: </span>
                { character.status === 'dead' ? 
                  <p className="inline-block text-red-600">Dead</p> : <p className="inline-block text-green-600">Alive</p>}
              </li>
            </ul>
            <button className="text-center text-white transition-transform duration-150 rounded-md bg-green-500 w-full px-3 py-2 hover:scale-105 md:mt-auto" onClick={() => setIsDialogOpen(true)}>Assign to Location</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailCharacter