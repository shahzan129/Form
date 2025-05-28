import React from 'react'

const Start = () => {
  return (
    <div className='bg-blue-200 h-screen w-screen flex justify-center items-center '>
      <div className='bg-red-500 lg:h-[30vw] h-[60vw] lg:w-[30vw] w-[60vw] mx-100   '>
      <div className='text-white text-2xl py-10 text-center'>Login</div>
      <div className=''><input className=' bg-white md:w-80 w-40 h-10 mx-6 rounded-xl outline-none' type='text' placeholder='Name'></input></div>
      <div className='my-8'><input className=' bg-white w-80 h-10 mx-6 rounded-xl outline-none' type='text' placeholder='Email'></input></div>
      <div className='mx-8'><button className='w-80 bg-blue-500 '>Submit</button></div>
       </div>
    </div>
  )
}

export default Start
