import { Link } from 'react-router-dom';
import { NavbarText } from '../utiles/constanse';
import { FcAbout } from "react-icons/fc"
import { AiFillCheckSquare } from "react-icons/ai";
const Navbar = () => {

    return (
        <div className='max-w-[1240px] mx-auto h-[98px]  flex   items-center ' >
            <div className='w-full' >
                <Link to="/" className='text-3xl   ml-4 flex items-center font-Onetwothirtyfour ' >

                    toDoList

                    <span className='text-green-500 bg-black ml-1 ' ><AiFillCheckSquare /></span>

                </Link>
            </div>
            <Link to={`about`} className='block lg:hidden mr-3 ' >
                <FcAbout size={30} />
            </Link>
            {/* big screan navbar */}
            <div className='mx-3 hidden lg:block ' >
                <ul className='flex capitalize gap-x-4 font-Poppins-Regular ' >
                    {NavbarText.map(({ title, id, path }) => {
                        return <Link to={path} className='hover:text-blue-400 text-sm transition duration-100 cursor-pointer ease-in-out ' key={id} >{title}</Link>
                    })}

                </ul>
            </div>
        </div>
    )
}

export default Navbar;