import React from 'react'
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div>
    <div className="md:grid flex flex-col grid-cols-5 h-[80vh] gap-3 bg-gradient-to-b from-amber-100 to-amber-50">
    <div className="content col-span-3  h-[100%] flex flex-col md:gap-5 gap-1 justify-center  " >
    <div className='w-[75%] p-4 md:ml-20 mx-auto md:mt-2 mt-10'>
    <div>
    <h1 className='md:text-5xl text-4xl font-bold md:text-left text-center cursor-pointer'>I Am  Shivansh <br /> A <ReactTyped strings={["Frontend","Backend","Fullstack"]} typeSpeed={150} loop={true} backSpeed={120} className='text-orange-500'/>developer</h1>
    </div>
    <div className='mt-6 text-gray-800'> 
    <p className='md:text-left text-center cursor-pointer'>"If we want users to like our software, we should design it to behave like a likeable person."</p>
    <div className='w-[100%] text-center'>
    <button className= 'md:1  text-white bg-orange-500 px-4 py-2 rounded-[12px] my-5 hover:text-orange-500 hover:bg-white hover:border border-orange-500 duration-300'>Contact ME</button>

    </div>
    </div>
    </div>
     
    </div>
    <div className="image col-span-2  md:h-[100%] h-[70%]">
    <img src="https://img.freepik.com/premium-photo/3d-cartoon-man-working-laptop-office-isolated_906149-9638.jpg" alt="" className='mix-blend-multiply md:w-[100%] md:h-[90%] h-[80%] w-[70%] md:m-4 p-4 mx-auto mt-[-50px] '  />
    </div>

    
    </div>
    </div>
  )
}
