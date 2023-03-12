import React from 'react';
import { NavbarText } from '../utiles/constanse';
import { AiFillCheckSquare } from "react-icons/ai";
const Navbar = () => {

    return (
        <div className='max-w-[1240px] mx-auto h-[98px]  flex   items-center ' >
            <div className='w-full' >
                <h1 className='text-3xl   ml-4 flex items-center font-Onetwothirtyfour ' >

                    toDoList

                    <span className='text-green-500 bg-black ml-1 ' ><AiFillCheckSquare /></span>

                </h1>
            </div>
            {/* big screan navbar */}
            <div className='mx-3' >
                <ul className='flex capitalize gap-x-4 font-Poppins-Regular ' >
                    {NavbarText.map(({ title, id, path }) => {
                        return <li className='hover:text-blue-400 text-sm transition duration-100 cursor-pointer ease-in-out ' key={id} >{title}</li>
                    })}

                </ul>
            </div>
        </div>
    )
}

export default Navbar;