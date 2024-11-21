import React from 'react'

const Footer = () => {
  return (

    <>

      <div className=" flex flex-col justify-center items-center m-auto container bg-black h-10">

        <div className='text-white'>
          Created by Sujan Adhikary
        </div>

        <div className=" h-8 logo font-bold text- xl text-center">
          <span className='text-green-800 tex' >&lt;</span>
          <span className='text-white'>Password Manager</span>
          <span className='text-green-800' >/ &gt;</span>
        </div>

      </div>


    </>
  )
}

export default Footer
