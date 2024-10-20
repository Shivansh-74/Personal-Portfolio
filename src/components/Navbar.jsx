import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    const[toggle,setToggle] = useState(false)
  return (
    
    <div className='w-[100%] flex justify-between h-[60px] items-center bg-gradient-to-b from-amber-100 to-amber-100'>
 
    <div className="logo  font-bold text-2xl ">SHIV
    <span className='text-yellow-600'>
    ANSH
    </span>

    </div>
    <div className="md:flex hidden md:gap-8 text-1xl md:flex-row flex-col md:mx-1 mx-6 md:my-1 my-3" >
    <h1  className="hover:text-orange-700 hover:scale-[1.07] duration-200 text-[1.3em]">Home</h1>
    <h1  className="hover:text-orange-700 hover:scale-[1.07] duration-200 text-[1.3em]">About</h1>
    <h1  className="hover:text-orange-700 hover:scale-[1.07] duration-200 text-[1.3em]">Items</h1>
    <h1 className="hover:text-orange-700 hover:scale-[1.07] duration-200 text-[1.3em]">Contact</h1>
    </div>
    <div className='mx-3 '>
    <button className= 'md:1 md:flex hidden  text-white bg-orange-500 px-3 py-2 rounded-[12px] my-8 hover:text-orange-500 hover:bg-white hover:border border-orange-500 duration-300 '>Contact</button>    
    {
        !toggle? <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-black text-2xl md:hidden'/>:     <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-black text-2xl '/>

      }
            </div>
          
    </div>
    
  )
}
