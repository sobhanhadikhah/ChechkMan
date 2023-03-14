import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GoCheck } from "react-icons/go"
import { AiFillDelete } from "react-icons/ai";
import { removeTodo, toggleTodo } from '../features/reducer';
const ListTask = () => {
    const disPatch = useDispatch();
    const handleOnRemove = (itemId) => {
        disPatch(removeTodo(itemId))
    }
    const handleOnToggle = (itemId) => {
        disPatch(toggleTodo(itemId))
    }

    const todo = useSelector(state => state.todoReducerState.todo)
    return (
        <div className='mx-3' >
            <h1 className='text-3xl p-4 grid bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent ' >All my Tasks</h1>
            <div className=' h-[400px] sm:h-[300px] md:h-[500px] lg:h-[800px] my-3 md:my-0  md:ml-3  rounded-md   bg-gradient-to-r from-cyan-500 to-blue-500 overflow-auto   ' >
                <ul className='mx-3 gap-2 flex flex-col  ' >

                    {todo.map((todos, i) => {

                        return (
                            <div key={todos.id} className='flex flex-row justify-center items-center '>
                                <li style={{ textDecoration: todos.completed ? "line-through" : "none" }}
                                    className='bg-purple-500   text-yellow-400 my-2   font-Poppins-Regular w-full p-2 py-3 capitalize  rounded-md' >
                                    <span className='text-black border-black  ' >{i + 1} -  {todos.text} </span>
                                </li>
                                <input type='checkbox' onClick={() => handleOnToggle(todos.id)} className='bg-green-400 rounded-full ml-4  cursor-alias ' >


                                </input>
                                <div onClick={() => handleOnRemove(todos.id)} className='text-black font-Poppins-Regular font-semibold ml-4 cursor-pointer hover:underline ' >

                                    Remove
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ListTask