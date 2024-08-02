import { useState } from "react";
import Content from "../filler/Content";
import TopItems from "../filler/Navbar";
import toast from "react-hot-toast";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//import { toast } from 'react-toastify';


export const LoginBtn=()=>{
  // let func2=()=>{
  //   toast.success('Your have signed in.')
  // }
   const navigate=useNavigate();
   const [ldata,setldata]=useState({
      roll:"",
      password:"",
   });
   
   const handleLogin=async (e)=>{
    e.preventDefault();
    const {roll,password}=ldata;
      try {
        const {data}=await axios.post('/login',{
          roll,password
        });
        if (data.error){
          toast.error(data.error);
        }else{
          // localStorage.setItem('rollNumber', JSON.stringify(data));
          localStorage.setItem('rollNumber',roll);
          setldata({});
          toast.success('Login successful');
          navigate('/dash');
        }
      } catch (error) {
        console.log(error);
      }
   }

  return (
    <div className="w-full h-screen flex items-center">

        <div className="relative w-1/2 h-full flex flex-col ">
          <div className="absolute top-[20%] left-[10%] flex flex-col ">
          <div class=" justify-between rounded-xl border border-gray bg-white/75 shadow-lg shadow-black/5 saturate- backdrop-blur-sm bg-[#96a9a5] m-2 h-[50%] text-center ">
            <h className='text-4x1 text-blue font-bold my-4'>About NIT Trichy</h>
            <Content/>

          </div>
          </div>
          <img src="https://www.nitt.edu/home/students/facilitiesnservices/tp/TP.jpg" className="w-full h-full object-full"/>
        </div>


        <div className="w-1/2  h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center ">
         <TopItems/>
          <h1 className="text-x1 mt-4  text-[#060606] font-semibold  ">NIT Trichy T&P Portal</h1>
          <form onSubmit={handleLogin}>
           <div className="w-full flex flex-col mx-w-[500px]">
             <div className="w-full flex flex-col mb-10">
                <h1 className="text-[20px] font-bold mb-2" >Login</h1>
                <p className="text-base mb-2">Welcome Back! Please Enter Your Details</p>
              </div>



             <div className="w-full flex flex-col m-0 p-0 top-10">
               <input value={ldata.roll} onChange={(e)=>setldata({...ldata,roll:e.target.value})} type="text" placeholder="Roll number" className=" transition ease-in-out hover:-translate-y-1 w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"/>
                <input value={ldata.password} onChange={(e)=>setldata({...ldata,password:e.target.value})} type="password" placeholder="Password" className="transition ease-in-out hover:-translate-y-1  w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"/>
             </div>


             <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-2"/>
                  <p className="text-sm">Remember your Password</p>
              </div>
                <p className="text-sm font-medium whitespace-normal cursor-pointer underline underline-offset-2">Forgot Password</p>
             </div>


              <div className="w-full flex flex-col my-4">
                  <button type="submit" className="w-full text-white my-2 font-semibold bg-[#060606] rounded-d p-4 text-center flex items-center justify-center" >Log in</button>
                  <button className="w-ful text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center"><a href="/signup">Register</a></button>
              </div>
             </div>
           </form>
        </div>
    </div>
  );
}
