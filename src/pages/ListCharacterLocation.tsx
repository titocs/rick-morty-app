import { useState, useEffect } from 'react';
import CustomCard from '../components/ui/custom-card';
import RickEmpty from '../assets/images/data-empty.webp';
import { LazyLoadImage } from "react-lazy-load-image-component";

const ListCharacterLocation = ({ locationName }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const assignedCharacters = JSON.parse(localStorage.getItem('assignedCharacters') || '[]');

    const filteredCharacters = assignedCharacters.filter(character => character.location.name === locationName);

    setCharacters(filteredCharacters);
  }, [locationName]);

  return (
    <>
      <h1 className="text-center font-semibold mb-5">List Character with location {locationName}</h1>
      <div className='flex flex-wrap justify-center gap-10'>
        {characters.length > 0 ? (
          characters.map((character, index) => (
            <CustomCard 
              key={index} 
              id={character.id}
              name={character.name}
              image={character.image} />
          ))
        ) : (
          <>
            <div className='my-10'>
              <LazyLoadImage src={RickEmpty} className="w-32 mx-auto" alt="" />
              <h1 className="text-center">No characters found for this location.</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ListCharacterLocation;
