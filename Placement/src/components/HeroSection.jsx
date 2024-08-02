import React from 'react'
import { Package, UserRound,NotebookPen,GlassesIcon} from 'lucide-react';
import nitt from "../assets/nitt.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            One Stop Portal For
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> NITT Placements</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-700 max-w-4xl'>
        The Department of Training and Placement nurtures Industry Institute interaction with the sole aim of zeroing down the hiatus between the industry and the academia.
        </p>
        <div className="flex justify-center my-10">
            <a href='/login' className='flex bg-gradient-to-r from-orange-400 to-orange-700 px-4 py-3 mx-3 rounded-md'><p className='mr-2'>{<UserRound/> }</p>Student</a>
            <a href='/recruiter' className='flex px-4 py-3 mx-3 rounded-md border border-orange-700 hover:bg-orange-600'><p className='mr-2'>{<NotebookPen/> }</p>Recruiter</a>
            <a href='/coordinator' className='flex px-4 py-3 mx-3 rounded-md border border-orange-700 hover:bg-orange-600'><p className='mr-2'>{<Package/> }</p>Coordinator</a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className='rounded-lg w-full border border-orange-500 shadow-orange-300 mx-2 my-4'>
                <source src={nitt} type='video/mp4'/>
                Use Some Other Browser
            </video>
        </div>
    </div>
  );
};

export default HeroSection
