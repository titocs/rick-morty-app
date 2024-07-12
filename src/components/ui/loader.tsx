import RickMortyGif from '../../assets/gif/rick-morty-gif.gif'
import { Progress } from './progress'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <LazyLoadImage src={RickMortyGif} className='w-32' alt="loader" />
      <div className='py-3'>
        <Progress value={70}/>
        <span>Loading . . .</span>
      </div>
    </div>
  )
}

export default Loader