import React from 'react'


export default function TopItems() {

  return (
    <div className=' m-0 w-[35%] absolute top-2 bg-gray-800'>
       <nav class="flex justify-center space-x-4 mt-0 bg-slate-400   border border-gray bg-white/75 shadow-lg  text-center">
        <a href="/login" class="font-bold text-[18px] m-2 mr-2  px-3 py-2 text-slate-700 rounded-lg hover:bg-black hover:text-white" >Student</a>
        <a href="/recruiter" class="font-bold text-[18px] m-2 mr-2 px-3 py-2 text-slate-700 rounded-lg hover:bg-black hover:text-white">Recruiter</a>
        <a href="/coordinator" class="font-bold text-[18px] m-2 mr-2 px-3 py-2 text-slate-700 rounded-lg hover:bg-black hover:text-white">Coordinator</a>
      </nav>
    </div>
  )
}
