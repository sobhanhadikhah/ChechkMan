import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo, removeTodo } from '../features/reducer';
const InputToDo = () => {
    const [text, setText] = useState("")
    const disPatch = useDispatch();
    const handleToAdd = (e) => {
        e.preventDefault();
        if (text.trim() === "") {
            return;
        }
        disPatch(addTodo({ id: nanoid(), text: text.trim(), completed: false }))
        setText("")
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <h1 className='bg-blue-900 rounded-t-md text-red-600 p-4 text-3xl font-Poppins-Regular ' >Add To List</h1>
            <form onSubmit={handleToAdd} onChange={handleChange} >
                <input className='w-full px-3 py-1 rounded-b-md font-Poppins-Regular border focus:outline-none border-blue-700 ' onChange={(e) => setText(e.target.value)} placeholder='To Do'
                    type="text" value={text} />
                <div className='flex justify-end' >
                    <button className='bg-red-500 rounded-md p-2 font-Poppins-Regular  lg:block mt-4 hidden '  >Add </button>
                </div>
            </form>
        </div>
    )
}

export default InputToDo;