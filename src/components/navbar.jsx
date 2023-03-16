import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavbarText } from '../utiles/constanse';
import { FcAbout } from "react-icons/fc"
import { SiCheckio } from "react-icons/si"
import { GrSystem } from "react-icons/gr";
import { WiDaySunny } from "react-icons/wi";
import { motion } from 'framer-motion';
import { MdNightlightRound } from "react-icons/md"
import { inputToDoVarition, toggleDarkModeMenu } from '../utiles/motion';
import { BiMenuAltRight } from "react-icons/bi"
const Navbar = ({ setTheme, theme }) => {
    const [darkModeToggle, setDarkModeToggle] = useState(false);
    const darkModeOptions = [
        {
            text: "light",
            icon: <ion-icon className="hover:text-yellow-400" name="sunny"></ion-icon>
        },
        {
            text: "dark",
            icon: <ion-icon name="moon"></ion-icon>
        },
        {
            text: "system",
            icon: <ion-icon name="cog-outline"></ion-icon>
        },
    ]


    return (
        <div className='max-w-[1240px] mx-auto h-[98px]  flex  bg-white  items-center ' >
            <div className='w-full' >
                <Link to="/" className='text-3xl   ml-4 flex items-center font-extrabold bg-gradient-to-r from-emerald-500 to-emerald-900 bg-clip-text text-transparent tracking-widest ' >

                    <span> <SiCheckio className='text-black mr-2 ' size={30} /> </span>
                    CheckMan


                </Link>
            </div>

            {/* dark toggle menu  */}

            <motion.div variants={toggleDarkModeMenu}
                initial="hidden" animate={darkModeToggle ? "visible" : "hidden"}
                className='lg:hidden  z-30  text-center    ' >
                <ul className='flex flex-col mt-52 w-[90px] bg-white shadow-lg shadow-black gap-3    rounded-lg  ' >
                    {NavbarText.map(navtxt => {
                        return <li key={navtxt.id} className='py-2' ><Link to={navtxt.path} onClick={() => setDarkModeToggle(!darkModeToggle)} className='font-Poppins-Regular' >{navtxt.title}</Link></li>
                    })}
                    <div className='   
                         items-center bg-white   z-50 flex flex-row rounded-xl flex-1 gap-2  justify-center pt-3 pb-3  ' >
                        {darkModeOptions.map(darkoption => {
                            return <button key={darkoption.text} onClick={() => setTheme(darkoption.text)}
                                className={`my-1  cursor-pointer capitalize flex gap-3 ${theme === darkoption.text && "text-sky-600"} `} >{darkoption.icon} </button>
                        })}

                    </div>
                </ul>
            </motion.div>
            <div>
                <BiMenuAltRight size={30} onClick={() => setDarkModeToggle(!darkModeToggle)} className='hover:text-green-600 lg:hidden block ' />
            </div>



            {/* big screan navbar */}

            <div className='lg:mx-3 mx-0  ' >

                <ul className='lg:flex items-center hidden capitalize gap-x-4 font-Poppins-Regular ' >

                    {NavbarText.map(({ title, id, path }) => {
                        return <Link to={path} className='hover:text-blue-400 text-sm transition duration-100 cursor-pointer ease-in-out ' key={id} >{title}</Link>
                    })}
                    <div className='text-gray-300 dark:text-red-500  ' >|</div>
                    {/* navbar for dark mode */}
                    <div className='' >

                        <ul className=' 
                         items-center   z-50 flex flex-row rounded-xl flex-1 gap-2 ' >
                            {darkModeOptions.map(darkoption => {
                                return <button key={darkoption.text} onClick={() => setTheme(darkoption.text)}
                                    className={`my-1  cursor-pointer capitalize flex gap-3 ${theme === darkoption.text && "text-sky-600"} `} >{darkoption.icon} </button>
                            })}

                        </ul>
                    </div>
                </ul>




            </div>
        </div>
    )
}

export default Navbar;