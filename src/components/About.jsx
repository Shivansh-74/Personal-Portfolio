import React from 'react'

export default function About() {
    return (
        <div className='w-[100%] bg-gradient-to-t from-amber-100 to-amber-50'>
        
        <div className='md:grid grid-cols-5 w-[100%] flex flex-col'>
        <div className="2 col-span-2 md:h-[400px] h-[300px] md:py-1 py-5 md:my-1 mt-10 md:flex hidden">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-5019746-4183733.png" alt="" className='mix-blend-multiply md:w-[100%] md:h-[90%] h-[100%] w-[90%] md:m-4 p-4 mx-auto mt-[-20px] rounded '/>
        </div>
    <div className="w-[100%] col-span-3 h-[400px]  flex flex-col gap-5
    items-center md:my-10 my-14">
    <div className=' w-[80%]  py-5 '>
    <h1 className='text-center text-4xl font-bold orange-500 '>About Me</h1>
    <p className='text-[1.2em] text-gray-900 md:py-5 py-1 text-center '>My name is <span className="font-bold text-orange-500">Shivansh Vishwakarma,</span>currently pursuing a BCA at St. Aloysius College. I have developed proficiency in both frontend and backend skills, including HTML, CSS, JavaScript, React, Python, Django, and SQL. My goal is to become a skilled full stack developer, mastering both areas of development. </p>

    </div>
  <div className='w-[70%]'>
  <h1 className='italic text-gray-700 text-center'>“Web development is the backbone of the digital age, where ideas come to life and shape the future.”</h1>
  <p className='text-right text-gray-950 font-bold'>– Unknown
  </p>
  </div>

    </div> 
    </div>
    </div>
  )
}
