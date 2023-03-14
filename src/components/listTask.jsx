import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { removeTodo, toggleTodo } from '../features/reducer';
import { inputToDoVarition, navbarVarition } from '../utiles/motion';
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
        <div className='mx-3 shadow-2xl shadow-blue-900 ' >
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg ' >

                <h1 className='text-3xl p-4 grid text-blackfont-Poppins-Regular  tracking-widest font-Poppins-Regular ' >All my Tasks</h1>
            </div>
            <div className=' h-[400px] sm:h-[300px] md:h-[500px] lg:h-[800px] my-3 md:my-0  md:ml-3  rounded-md    overflow-auto   ' >
                <ul className='mx-3 gap-2 flex flex-col  ' >

                    {todo.map((todos, i) => {

                        return (
                            <motion.div variants={inputToDoVarition} initial="hidden" animate="visible" key={todos.id} className='flex flex-row justify-center items-center '>
                                <li style={{ textDecoration: todos.completed ? "line-through" : "none" }}
                                    className='bg-slate-700  inline-flex   my-2   font-Poppins-Regular decoration-white w-full p-2 py-3 capitalize  rounded-md' >
                                    <span className='text-white  px-2 justify-center items-center  rounded-full ' >{i + 1} -    </span>
                                    <div className='bg-gradient-to-r from-purple-500 to-amber-400 bg-clip-text text-transparent' >{todos.text}</div>
                                </li>
                                <input type='checkbox' onClick={() => handleOnToggle(todos.id)} className='bg-green-400 rounded-full ml-4  cursor-alias ' >


                                </input>
                                <div onClick={() => handleOnRemove(todos.id)} className='text-black  font-Poppins-Regular font-semibold ml-4 cursor-pointer hover:underline ' >

                                    Remove
                                </div>
                            </motion.div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ListTask