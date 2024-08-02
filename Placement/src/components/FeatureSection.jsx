import React from 'react'

export const features = [
  {
    description:
      "The National Institute of Technology Tiruchirappalli was started during 1964 with a view to catering to the needs of man-power in technology for the Country.",
  },
  {
    description:
      "The institute's impeccable teaching infrastructure, and state-of-art laboratories offer the students to become one of the brightest minds of the country.",
  },
  {
    description:
      "NIRF Overall Rankings - 21 (as of 2024) &&  NIRF Engineering Rankings - 9 (as of 2024)",
  },
  {
    description:
      "The alumni of NITT have undoubtedly made their mark on the Global professional fronts. Most of them occupy leading positions in corporate, academia & the government.",
  },
  {
    description:
      "NITT is home to the brightest individuals in India who have been accepted through a rigorous screening procedure like JEE Mains, Gate etc.",
  },
  {
    description:
      "Providing a rigorous and world-class academic experience with the help of distinguished faculty, amazing peer groups and carefully designed coursework.",
  },
];

const FeatureSection = () => {
  return (
    <div id='why' className='relative mt-20 border-b border-neutral-800 min-h-[600px]'>
      <div className='text-center'>
        <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-lg font-medium px-2 py-1 '>
          Why NITT?
        </span>

      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20 '>
        {features.map((feature,index)=>(
          <div key={index} className='w-full sm:1/2 lg:w-1/3'>
            <div className='flex bg-neutral-300 rounded m-3 '>
            <p className='text-md text-center p-2 mb-10 mt-10 min-h-28 mx-2  text-neutral-900'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection
