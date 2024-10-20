import React from 'react'

export default function Card(props) {
  return (
    <>
    <div className='md:w-[180px] w-[100px] md:h-[180px] h-[120px] border-none rounded-[20px] cursor-pointer hover:scale-[1.02] duration-200 bg-orange-100 '>
    <div className='w-[100%] p-4'>{props.icon}
    </div>
    <div className='w-[100%] text-center p-1 md:text-[1.3em] text-[0.8em] text-orange-600 font-bold'><h1>{props.title}</h1><br /></div>
    </div>
    </>
    )
}
