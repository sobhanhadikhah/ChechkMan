import { Link } from 'react-router-dom';
import { NavbarText } from '../utiles/constanse';
import { FcAbout } from "react-icons/fc"
import { AiFillCheckSquare } from "react-icons/ai";
const Navbar = () => {

    return (
        <div className='max-w-[1240px] mx-auto h-[98px]  flex   items-center ' >
            <div className='w-full' >
                <Link to="/" className='text-3xl   ml-4 flex items-center font-Onetwothirtyfour ' >

                    <span className='text-green-500 bg-black mr-1 rounded-full' ><AiFillCheckSquare className='' /></span>
                    CheckMan


                </Link>
            </div>

            <Link to={`about`} className='block lg:hidden mr-3 ' >
                <FcAbout size={30} />
            </Link>


            {/* big screan navbar */}

            <div className='mx-3 hidden lg:block ' >

                <ul className='flex items-center capitalize gap-x-4 font-Poppins-Regular ' >

                    {NavbarText.map(({ title, id, path }) => {
                        return <Link to={path} className='hover:text-blue-400 text-sm transition duration-100 cursor-pointer ease-in-out ' key={id} >{title}</Link>
                    })}
                    <div className='text-gray-300' >|</div>
                    <label htmlFor="AcceptConditions" className="relative h-8 w-14 cursor-pointer">
                        <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

                        <span
                            className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"
                        ></span>

                        <span
                            className="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-6"
                        ></span>
                    </label>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;