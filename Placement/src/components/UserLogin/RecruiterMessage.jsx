
import toast from 'react-hot-toast';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import React from 'react'

export default function RecruiterMessage() {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    content: "",
    lookingFor: "message",
    dateOfBirth: "YTA",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/newmsg', regData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setRegData({});
        toast.success('Message Sent  successful');
        // navigate('/login');
      }
    } catch (error) {
      console.log(error);
      toast.error('Sign Up failed');
    }
  };
   
  return (
    <div>
       <h1 className='text-center font-bold text-2xl'>Enter some Message for Students</h1>
       <div className='text-center'>
           <label>
                <textarea className="border-color-black p-4 m-4 rounded shadow" name="postContent" rows={10} cols={50} onChange={(e) => setRegData({ ...regData, content: e.target.value })} />
            </label>
            <button onClick={handleSubmit}  className="mt-2 bg-blue-500 text-white py-1 px-4 rounded w-[100px] h-[40px]  text-2xl">
                 Post
            </button>
       </div>
       
    </div>
  )
};


// export const RecruiterMessage = () => {
  // const navigate = useNavigate();
  // const [regData, setRegData] = useState({
  //   content: "",
  //   lookingFor: "",
  //   dateOfBirth: "",
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const { data } = await axios.post('/newmsg', regData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (data.error) {
  //       toast.error(data.error);
  //     } else {
  //       setRegData({});
  //       toast.success('Sign Up successful');
  //       navigate('/login');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('Sign Up failed');
  //   }
  // };
//   return (
      //   <div>
      //  <h1 className='text-center font-bold text-2xl'>Enter some Message for Students</h1>
      //  <div className='text-center'>
      //      <label>
      //           <textarea className="border-color-black p-4 m-4 rounded shadow" name="postContent" rows={10} cols={50} onChange={(e) => setRegData({ ...regData, email: e.target.value })}/>
      //       </label>
      //       <button onClick={submitHandler} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded w-[100px] h-[40px]  text-2xl">
      //            Post
      //       </button>
      //  </div>
      //  </div>
//   )
// };

// // { ...msg, content: e.target.value }