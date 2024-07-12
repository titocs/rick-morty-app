import CustomCard from './components/ui/custom-card';
import {  useQuery } from '@apollo/client';
import Loader from './components/ui/loader';
import { GET_ALL_CHARACTERS } from './graphql/queries';

interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface GetCharactersData {
  characters: {
    results: Character[];
  };
}

const App = () => {
  const { loading, error, data } = useQuery<GetCharactersData>(GET_ALL_CHARACTERS);

  if(loading) {
    return <Loader />
  }

  return (
    <>
      <h1 className='text-center font-semibold mb-8 text-lg'>List All Characters</h1>
      <div className='flex flex-wrap justify-center gap-10'>
        {data?.characters.results.map((character, index) => (
          <CustomCard 
            key={index} 
            id={character.id}
            name={character.name}
            image={character.image} />
        ))}
      </div>
    </>
  )
}

export default App;