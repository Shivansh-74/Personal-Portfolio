import React from 'react'
import Card from '../reusable/Card'
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaGithub } from "react-icons/fa6";
import { FaJs,FaReact,FaBootstrap,FaPython ,FaAws,FaJava,FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango,SiMysql } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";


export default function Skills() {
  return (
    <div className='w-[100%] bg-gradient-to-b from-amber-100 to-amber-50 md:py-6 py-8'>
    <h1 className='text-4xl font-bold text-center pb-5'>Skills</h1>
    <div className='py-3'>
    <div className='w-[100%] text-center md:text-2xl text-2xl font-bold py-4 underline text-orange-800'>
    <h1>FRONT END SKILLS</h1>
    </div>
    <div className='flex flex-wrap gap-5 justify-center py-4'>
    <Card icon={<AiFillHtml5 className='md:text-7xl text-5xl text-red-600 mx-auto'/>} title="HTML5"/>
    <Card icon={<FaCss3Alt className='md:text-7xl text-5xl text-blue-800 mx-auto'/>} title="CSS3"/>
    <Card icon={<FaJs className='md:text-7xl text-5xl text-yellow-500 mx-auto'/>} title="JAVA SCRIPT"/>
    <Card icon={<FaReact  className='md:text-7xl text-5xl text-blue-500 mx-auto'/>} title="REACT"/>
    <Card icon={<RiTailwindCssFill className='md:text-7xl text-5xl text-blue-300 mx-auto'/>} title="TAILWIND"/>
    <Card icon={<FaBootstrap  className='md:text-7xl text-5xl text-blue-500 mx-auto'/>} title="BOOTSTRAP"/>
    </div>
    </div>
    {/**Backend */}
    <div className='py-6'>
    <div className='w-[100%] text-center text-2xl font-bold py-4 underline text-orange-800'>
    <h1>BACKEND SKILLS</h1>
    </div>
    <div className='flex flex-wrap gap-5 justify-center py-4'>
    <Card icon={<FaPython className='md:text-7xl text-5xl text-yellow-500  mx-auto'/>} title="PYTHON"/>
    <Card icon={<SiDjango className='md:text-7xl text-5xl text-green-900 mx-auto'/>} title="DJANGO"/>
    <Card icon={<SiMysql className='md:text-7xl text-5xl text-red-800 mx-auto'/>} title="MySQL"/>
    <Card icon={<FaAws  className='md:text-7xl text-5xl text-blue-800 mx-auto'/>} title="AWS" ex="(basic)"/>
    </div>
    </div>
    {/**Additional */}
    <div className='py-6'>
    <div className='w-[100%] text-center text-2xl font-bold  underline text-orange-800 py-4'>
    <h1>ADDITIONAL SKILLS</h1>
    </div>
    <div className=' w-[100%] flex flex-wrap gap-5 justify-center py-4 '>
    <Card icon={<TbBrandCpp  className='md:text-7xl text-5xl text-blue-800 mx-auto'/>} title="C++" />
    <Card icon={<FaJava className='md:text-7xl text-5xl text-red-500  mx-auto'/>} title="JAVA"/>
    <Card icon={<FaPhp className='md:text-7xl text-5xl text-blue-900 mx-auto'/>} title="Php"/>
    <Card icon={<FaGithub className='md:text-7xl text-5xl text-gray-800 mx-auto'/>} title="Github"/>
    </div>
    </div>
    </div>
  )
}
