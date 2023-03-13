import { BiSend } from "react-icons/bi"
const InputToDo = ({ handleChange, handleToAdd, text, setText }) => {

    return (
        <div>
            <div className=" absolute lg:relative bottom-0 w-full px-3  " >
                <h1 className='bg-blue-900 rounded-t-md text-red-600 p-4 text-3xl font-Poppins-Regular lg:block hidden   ' >Add To List</h1>
                <form onSubmit={handleToAdd} onChange={handleChange} className=" bg-blue-300 lg:bg-transparent lg:rounded-b-md rounded-full flex   lg:mb-0 mb-2  " >
                    <div className='flex w-full   lg:bg-transparent  ' >
                        <input className=' px-3   py-1 placeholder:text-blue-400 bg-transparent  font-Poppins-Regular  focus:outline-none  '
                            onChange={(e) => setText(e.target.value)} placeholder='To Do' type="text" value={text} />
                    </div>
                    <button className='bg-gray-400  p-2 font-Poppins-Regular rounded-full lg:block mt-4 mr-2 mb-3 '  ><BiSend size={15} /></button>
                </form>
            </div>
        </div>
    )
}

export default InputToDo;