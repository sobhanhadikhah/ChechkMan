import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { motion, Reorder } from 'framer-motion';
import { addTodo, removeTodo, toggleTodo } from '../features/reducer';
import { aboutH1, inputToDoVarition, navbarVarition } from '../utiles/motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ListTask = () => {
    const todo = useSelector(state => state.todoReducerState.todo);
    const [staetTodo, setstaetTodo] = useState([])
    const disPatch = useDispatch();
    const handleOnRemove = (itemId) => {
        toast.error(`Remove Item ${itemId}`)
        disPatch(removeTodo(itemId))
    }
    const handleOnToggle = (itemId) => {
        disPatch(toggleTodo(itemId))

    }
    useEffect(() => {
        setstaetTodo(todo)
        console.log(staetTodo);
    }, [todo])
    return (
        <div className='mx-3 shadow-inner dark:shadow-2xl dark:shadow-blue-800 shadow-black -z-10 ' >
            <div className=' rounded-lg ' >

                <h1 className='text-3xl p-4 grid text-blackfont-Poppins-Regular  tracking-widest font-Poppins-Regular bg-gradient-to-r from-cyan-500 to-blue-500
                text-transparent bg-clip-text ' >All my Tasks</h1>
                <div className='border mx-3  border-purple-500 ' />
            </div>
            <div className=' h-[350px] sm:h-[300px] md:h-[500px] lg:h-[500px] my-3 md:my-0  md:ml-3  rounded-md    overflow-auto   ' >
                <Reorder.Group values={staetTodo} onReorder={setstaetTodo}  >

                    <div className='mx-3 gap-2 flex flex-col  ' >

                        {staetTodo && staetTodo.map((todos, i) => {

                            return (
                                <Reorder.Item value={todos} key={todos.id} className='cursor-grab' >

                                    <motion.div variants={aboutH1} whileInView="visible" initial="hidden" className='flex flex-row justify-center items-center '>
                                        <div style={{ textDecoration: todos.completed ? "line-through" : "none" }}
                                            className='dark:bg-slate-700 bg-gray-300 inline-flex   my-2   font-Poppins-Regular decoration-white w-full p-2 py-3 capitalize  rounded-md' >
                                            <span className='dark:text-white text-black   px-2 justify-center items-center  rounded-full ' >{i + 1} -    </span>
                                            <div className=' bg-gradient-to-r from-purple-500 to-amber-400 bg-clip-text text-transparent' >{todos.text}</div>
                                        </div>
                                        <input type='checkbox' onClick={() => handleOnToggle(todos.id)} className='bg-green-400 rounded-full ml-4  cursor-alias ' >


                                        </input>
                                        <button onClick={() => handleOnRemove(todos.id)} className='  p-1 text-red-400 rounded-md font-Poppins-Regular font-semibold ml-4 cursor-pointer hover:underline ' >

                                            Remove
                                        </button>
                                    </motion.div>
                                </Reorder.Item>
                            )
                        })}
                    </div>
                </Reorder.Group>
            </div>
        </div>
    )
}

export default ListTask