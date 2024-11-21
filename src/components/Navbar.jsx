import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200 flex justify-between px-4 h-12'>
      <div className=" h-10 flex logo text-xl justify-center items-center font-bold">
        <span className='text-green-800' >&lt;</span>
        <span className='text-white'>Password Manager</span>
        <span className='text-green-800' >/ &gt;</span>
      </div>

      
      <ul className=''>
        <li className=' h-10 flex gap-10 text-xl justify-center items-center'>
          <a className='hover:font-blod' href='#'>Home</a>
          <a className='hower: text-blue-700' href='#'>About</a>

          <a className='' href='#'>Contact</a>
          <a className='' href='#'>Tools</a>


        </li>
      </ul>

      <button className="imgae flex gap-5 text-xl font-bold text-white bg-green-400 justify-center items-center m-2 rounded-md p-1 ring-white ring-4">
        <span>GitHub</span>
        <img  className='w-6 py-1 rounded-md' src='public\github.png' alt='github logo'/>
      </button>
    </nav>
  )
}

export default Navbar
