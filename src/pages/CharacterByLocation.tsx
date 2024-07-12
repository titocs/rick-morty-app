import { useState, useEffect } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import RickEmpty from '../assets/images/data-empty.webp';
import { Link, useRouter } from '@tanstack/react-router';
import { LuExternalLink } from "react-icons/lu";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CharacterByLocation = () => {
  const router = useRouter();
  const onBack = () => router.history.back();

  const [assignedLocations, setAssignedLocations] = useState([]);
  const [assignedCharacters, setAssignedCharacters] = useState([]);

  useEffect(() => {
    const locations = JSON.parse(localStorage.getItem('assignedLocations') || '[]');
    setAssignedLocations(locations);

    const characters = JSON.parse(localStorage.getItem('assignedCharacters') || '[]');
    setAssignedCharacters(characters);
  }, []);

  return (
    <>
      <div className="md:px-7">
        <button className="flex items-center gap-1 border rounded-md px-3 py-1 border-black" onClick={onBack}>
          <GoArrowLeft size={20} />
          <span>Back</span>
        </button>
        <div className="">
          {assignedLocations.length === 0 ? (
            <div className='my-10'>
              <LazyLoadImage src={RickEmpty} className="w-32 mx-auto" alt="" />
              <h1 className="text-center">- Data is empty -</h1>
            </div>
          ) : (
            <>
              <h1 className='text-center font-semibold my-4'>List Location</h1>
              <ul className='flex flex-wrap flex-col justify-center gap-4 md:flex-row'>
                {assignedLocations.map((location) => (
                  <li className='transition-all rounded-lg duration-150 border hover:scale-110 hover:border-black'>
                    <Link to={`/list-character-location/${location.name}`} className='flex justify-between items-center gap-2 rounded-md px-7 py-1'>
                      <p>{location.name}</p>
                      <LuExternalLink size={25} />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CharacterByLocation;
