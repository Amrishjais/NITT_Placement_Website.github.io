import React from 'react'
import {Linkedin } from 'lucide-react';
const contacts = [
    {
      name: "Abhishek Punia",
      mail: "apunia21@nitt.edu",
      ph: "+91 80597 70008",
      lin: "Linkedin.in",
      role: "Coordinator"
    },
    {
      name: "B P Hitesh",
      mail: "bphitesh21@nitt.edu",
      ph: "+91 93601 19151",
      lin: "Linkedin.in",
      role: "Coordinator"
    },
    {
      name: "Jatin Rastogi",
      mail: "jatinr21@nitt.edu",
      ph: "+91 85709 40447",
      lin: "Linkedin.in",
      role: "Coordinator"
    },
    {
      name: "Shashank S",
      mail: "shashank21@nitt.edu",
      ph: "+91 76766 06660",
      lin: "Linkedin.in",
      role: "Director"
    },
    {
      name: "Ashwanth P Nair",
      mail: "ashwanthpn23@nitt.edu",
      ph: "+91 99646 20056",
      lin: "Linkedin.in",
      role: "HOD"
    },
    {
      name: "Siddhant Ramesh Lakkam",
      mail: "siddhantrl23@nitt.edu",
      ph: "+91 89083 87489",
      lin: "Linkedin.in",
      role: "Dean"
    }
  ];

const ContactSection = () => {
  return (
    <div id='cont' className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>Contact Us</h2>
        <div className=' bg-neutral-200 rounded-lg'>
        <div className="mt-8 flex flex-wrap justify-center">
            {contacts.map((item,index)=>(
                <div key={index} className='flex items-center w-1/2 lg:w-1/3 flex-col mb-8 mt-6'>
                    <h5 className='mt-1 mb-2 text-xl'>{item.name}</h5>
                    <h6 className='mt-1 mb-2 text-l'>{item.role}</h6>
                    <a href={"tel:"+item.ph} className='text-md text-neutral-500'>{item.ph}</a>
                    <a href={'mailto:'+item.mail} className='text-md text-neutral-500'>{item.mail}</a>
                    <a className='mt-3' href={item.lin}><Linkedin/></a>
                </div>
            ))}
        </div>
        </div>
    </div>
  );
}

export default ContactSection
