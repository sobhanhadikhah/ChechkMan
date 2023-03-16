import { BiSend } from "react-icons/bi"
const InputToDo = ({ handleChange, handleToAdd, text, setText }) => {

    return (
        <div>
            <div className=" absolute lg:relative bottom-0 w-full lg:w-auto  px-3 lg:mx-3 shadow-md shadow-purple-500 rounded-sm " >
                <h1 className='rounded-t-md bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent tracking-widest font-extrabold
                 p-4 text-3xl font-Poppins-Regular lg:block hidden   ' >Add To List</h1>
                <div className="border border-gray-400 mb-5 hidden lg:block shadow-inner  " />
                <form onSubmit={handleToAdd} onChange={handleChange} className=" shadow-sky-300 shadow-inner     rounded-full flex   lg:mb-0 mb-3  " >
                    <div className='flex w-full   lg:bg-transparent  ' >
                        <input className=' px-4    py-1 placeholder:text-black bg-transparent dark:placeholder:text-white dark:text-white  font-Poppins-Regular w-full   focus:outline-none  '
                            onChange={(e) => setText(e.target.value)} placeholder='To Do...' type="text" value={text} />
                    </div>
                    <button className='bg-black dark:bg-sky-900 p-2 font-Poppins-Regular rounded-full lg:block mt-4 hover:bg-slate-700 mr-2 mb-3 '  ><BiSend className="text-white" size={15} /></button>
                </form>
            </div>
        </div>
    )
}

export default InputToDo;