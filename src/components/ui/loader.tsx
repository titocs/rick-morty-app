import RickMortyGif from '../../assets/gif/rick-morty-gif.gif'
import { Progress } from './progress'
import RickMortyVideo from '../../assets/gif/rick-morty-gif.webm'

const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      {/* <LazyLoadImage src={RickMortyGif} className='w-32' alt="loader" /> */}
      <video className='w-32' autoPlay loop muted>
        <source src={RickMortyVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className='py-3'>
        <Progress value={70}/>
        <span>Loading . . .</span>
      </div>
    </div>
  )
}

export default Loader