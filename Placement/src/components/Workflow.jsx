import React from 'react'
import past from "../assets/past.png"

export const checklistItems = [
    {
      title: "Recruitment Process",
      description:
        "PDF Link",
    },
    {
      title: "Placement Report 2022-23",
      description:
        "PDF Link",
    },
    {
      title: "Placement Report 2021-22",
      description:
        "PDF Link",
    },
    {
      title: "Placement Report 2020-21",
      description:
        "PDF Link",
    },
  ];


const Workflow = () => {
  return (
    <div id='stat' className="mt-20">
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>Past Recruiters</h2>
        <div className="mt-8 flex flex-wrap justify-center">
            <div className=" -z-120 p-2 w-full lg:w-1/2 sliding-image-container">
                <img src={past} className='sliding-image' alt="past"/>
                <img src={past} className='sliding-image absolute top-full' alt="past2"/>
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item,index)=>(
                    <div key={index} className='flex items-center flex-col mb-12'>
                        <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                        <a className='text-md text-neutral-500'>{item.description}</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Workflow
