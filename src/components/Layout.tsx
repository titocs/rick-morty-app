import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import RickAndMortySingle from '../assets/images/rick-morty-single.webp'
import { Link } from "@tanstack/react-router";
import { FaGithub } from "react-icons/fa";
import { Separator } from "./ui/separator";
import { BsListNested } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";
import RickMortyTitle from '../assets/images/rick-morty-title.webp';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Layout = ({ children }) => {
  return (
    <>
      <header className="bg-black px-5 py-4 md:px-20 lg:px-28 font-poppins">
        <Drawer direction='left' className="md:!hidden">
          <DrawerTrigger className="md:hidden">
            <BsListNested color="white" size={30}/>
          </DrawerTrigger>
          <DrawerContent className='h-full rounded-none max-w-[300px]'>
            <Link to="/" className="flex items-center">
              <LazyLoadImage src={RickAndMortySingle} className="w-28 h-28" alt="single-logo-mobile" />
              <h1 className="">Rick and Morty</h1>
            </Link>
            <Separator />
            <Link to="/character-by-location" className="flex px-4 py-3 justify-between items-center gap-1">
              <span>Character by Location</span>
              <RiExternalLinkLine size={20}/>
            </Link>
            <DrawerFooter>
              <Button>
                <Link to='https://github.com/titocs' target="_blank" className="flex items-center gap-2">
                  <FaGithub size={20} />
                  <span>Tito Candra Septio</span>
                </Link>
              </Button>
              <DrawerClose>
                <Button variant="outline" className="w-full">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <div className="flex items-center gap-4 justify-between">
          <Link to="/">
          <LazyLoadImage src={RickMortyTitle} className="w-24 hidden md:block" alt="title-desktop"/>
          </Link>
          <nav>
            <Link to="/character-by-location" className="text-white ml-auto hidden md:block hover:underline">Character by Location</Link>
          </nav>
        </div>
      </header>
      
      <main className="py-8 px-7 font-poppins md:px-14 lg:px-20">
        {children}
      </main>
    </>
  )
}

export default Layout