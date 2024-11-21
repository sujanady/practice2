import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';


const Mymanager = () => {

  const ref = useRef()
  const passwordRef = useRef()


  const [form, setForm] = useState({ site: "", username: "", password: "" })

  const [passwordArray, setPasswordArray] = useState([])
  const [src, setSrc] = useState('public\copy.png')

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")

    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }

  }, [])


  const showPassword = () => {
    passwordRef.current.type = "password"
    if (ref.current.src.includes("public/hide.png")) {
      ref.current.src = "public/show.jpg"
      passwordRef.current.type = "text"
      setEye('visibility')
    }

    else {
      ref.current.src = "public/hide.png"
      passwordRef.current.type = "password"
      setEye('visibility_off')

    }

  }

  const savePassword = () => {

    if (form.site.length > 3 && form.password.length > 3 && form.username.length > 3) {
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))

    }
    else {
      alert('Minimum length of site name, username and password is 4')
    }

  }

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete your password?")

    if (c) {

      setPasswordArray(passwordArray.filter(item => item.id !== id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))

    }


  }

  const editPassword = (id) => {
    console.log("Editing password with id", id);
    setForm(passwordArray.filter(item => item.id === id)[0])
    setPasswordArray(passwordArray.filter(item => item.id !== id))
  }



  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const copyText = (text) => {
    toast('Copy to clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    navigator.clipboard.writeText(text)
    setCopy('edit')
  }

  const [eye, setEye] = useState('visibility')
  





  return (

    <>


      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className=" px-2 md:px-0 bg-black md:mycontainer">

        <div className="top mx-6">

          <div className="logo font-bold text-4xl text-center">
            <span className="material-icons text-white ">star</span>

            <span className='text-green-800 tex' >&lt;</span>
            <span className='text-white'>Password Manager</span>
            <span className='text-green-800' >/ &gt;</span>
          </div>

          <p className='text-green-600 text-xl mx-6 my-2 text-center'>Manage your all Passwords</p>

        </div>


        <div className='flex flex-col p-4 mycontainer'>

          <div className="site flex gap-3">
            <input className='rounded-xl border-2 border-green-300 w-full py-1 px-4' value={form.site} onChange={handleChange} name='site' type="text" placeholder='Enter Website url' />
            <img className='w-8' src='public\copy.png' />
          </div>

          <div className="flex w-full gap-10 py-5">

            <input className='rounded-xl border-2 border-green-300 py-1 px-4 w-full' value={form.username} onChange={handleChange} name='username' type="text" placeholder='Enter Username' />

            <div className="relative">

              <input ref={passwordRef} className='rounded-xl border-2 border-green-300 py-1 px-4 w-full' value={form.password} onChange={handleChange} name='password' type={passwordRef} placeholder='Enter Password' />
              <span onClick={showPassword} className='absolute right-0 p-2 cursor-pointer' >
                <img ref={ref} width={0} src="public/hide.png" alt="" />
                <span className="material-icons cursor-pointer text-blue-500 "> {eye} </span>

              </span>
            </div>

          </div>


        </div>

        <div className="button mx-auto px-4">

          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition="Bounce"
          />

          <button onClick={savePassword} className='w-full flex gap-5 justify-center items-center  bg-green-400 rounded-xl py-1 hover:bg-green-300 border-2-2 border-gray-200 '>
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover">
            </lord-icon>
            Add Password</button>

        </div>


        <div className="passwords w-full">

          <h2 className='font-bold text-2xl text-center'>Your Passwords</h2>

          {passwordArray.length === 0 && <div>No passwords to show</div>}

          {passwordArray.length != 0 && <div className="table-auto w-11/12 mx-auto text-white bg-black overflow-hidden rounded-md mb-8">
            <div className=" w-full md:text-xs heading justify-between px-4 py-6 flex bg-green-400 font-bold ">
              <div className="text-2xl  ">Site name</div>
              <div className="text-2xl ">Username</div>
              <div className="text-2xl ">Password</div>
              <div className="text-2xl ">Actions</div>


            </div>
            <div>

              {passwordArray.map((item, index) => {
                return <div key={index} className='text-center flex justify-between border-4 border-amber-400 m-3 rounded-lg bg-blue-800 hover:bg-blue-400 '>

                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition="Bounce"
                  />
                  {/* Same as */}
                  <ToastContainer />

                  <div className="site flex justify-between gap-5 ">
                    <span className='w-32 py-1'><a href={item.site} target='_blank' >{item.site}</a></span>
                    <span className="material-icons py-1 cursor-pointer text-orange-500" onClick={() => { copyText(item.password) }} > content_copy </span>

                  </div>

                  <div className="site flex justify-between gap-5 ">
                    <span className='w-32 py-1'>{item.username}</span>
                    <span className="material-icons py-1 cursor-pointer text-orange-500" onClick={() => { copyText(item.password) }} >content_copy </span>

                  </div>

                  <div className="site flex justify-between ">


                    <span className='w-32 py-1'>{item.password}</span>
                    <span className="material-icons py-1 cursor-pointer text-orange-500" onClick={() => { copyText(item.password) }} >content_copy </span>


                  </div>

                  <div className="site flex justify-between gap-5 py-1 ">
                    <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                      transition="Bounce"
                    />
                    {/* Same as */}
                    <ToastContainer />

                    {/* <span className='w-32 py-1'>Delete</span> */}
                    <span className="material-icons cursor-pointer text-blue-500  " onClick={() => { editPassword(item.id) }} > edit </span>
                    <span className="material-icons cursor-pointer text-red-500 " onClick={() => { deletePassword(item.id) }} > delete </span>

                  </div>


                </div>

              })}


            </div>
          </div>

          }
        </div>


      </div>



    </>

  )
}

export default Mymanager
