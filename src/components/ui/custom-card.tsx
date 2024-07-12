import { Link } from '@tanstack/react-router'
import { LazyLoadImage } from "react-lazy-load-image-component";
import DynamicLCPImage from '../DynamicLCPImage';

interface CardProps {
  id: string
  name: string
  gender?: string
  image: string
}

const CustomCard = ({ id, name, gender, image }: CardProps) => {
  return (
    <Link to={`/character/${id}`} className='w-[290px] transition-transform duration-150 hover:scale-110 hover:shadow-lg'>
      <div className="shadow-md overflow-hidden rounded-lg">
        <div className='bg-green-400 h-7 overflow-hidden'>
          <h1 className='text-center py-1'>{name}</h1>
        </div>
        <div className='h-[277px]'>
          <picture>
            <source srcSet={image} type="image/webp" />
            <LazyLoadImage src={image} className='bg-cover bg-no-repeat w-full h-full object-cover' alt="" />
          </picture>
        </div>
      </div>
    </Link>
  )
}

export default CustomCard