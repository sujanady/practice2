import React from 'react'
import { useState } from 'react'

const Test = () => {
    const [button, setButton] = useState(true)

    const [num, setNum] = useState(0)
    const onButton = () => {
        console.log("The value of the number is", button)
        setNum(num + 1)
        if (button === true) {
            setButton(false)
        }

        else {
            setButton(true)
        }

    }





    return (
        <div className='w-full h-20 flex justify-center items-center' >
            <button onClick={() => { onButton() }} className='h-10 w-40 text-white text-lg font-bold font-sans bg-red-800 ring-4 ring-black rounded-md' >You clicked {num} times</button>

            {button === true &&
                <div>
                    <span className='text-xl'>The value of button is True</span>
                </div>}

                {button === false &&
                <div>
                    <span className='text-xl'>The value of button is False</span>
                </div>}

        </div>


    )
}

export default Test
