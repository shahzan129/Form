import React, { useState } from 'react'

const Start = () => {
  const[data, setData]= useState({
    name:"",email:"",

  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(e.target.value)

    setData(() => ({
      ...data,
      [name]: value,
    }))
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("data", data);
    }
  return (
    <div className='bg-blue-200 h-screen w-screen flex justify-center items-center'>
      <div className='bg-red-500 lg:h-[30vw] h-[60vw] lg:w-[30vw] w-[60vw] mx-100'>
      <div className='text-white text-2xl py-10 text-center'>Login</div>
      <div className=''><input name="name" onChange={handleChange} value={data.name} className=' bg-white md:w-80 w-50 md:h-10 h-6 mx-6 rounded-xl outline-none' type='text' placeholder='Name'></input></div>
      <div className='md:my-8 my-5'><input name="email" onChange={handleChange} value={data.email} className=' bg-white md:w-80 w-50 md:h-10 h-6 mx-6 rounded-xl outline-none' type='text' placeholder='Email'></input></div>
      <div className='mx-6'><button onClick={handleSubmit} className='md:w-80 w-50 bg-blue-500 rounded-xl md:h-10 h-6'>Submit</button></div>
       </div>
    </div>
  )
}

export default Start
