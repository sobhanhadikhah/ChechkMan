import { useState } from 'react'
import { ListTask, NavigitionBottem, InputToDo } from "../components";
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo, removeTodo, toggleTodo } from '../features/reducer';
import { motion } from 'framer-motion';
import { aboutH1, inputToDoVarition } from '../utiles/motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../hooks/usetitle';
const AddListPage = () => {
    useTitle("Home");
    const [text, setText] = useState("")
    const disPatch = useDispatch();
    const handleToAdd = (e) => {
        e.preventDefault();
        if (text.trim() === "") {
            toast.error("Please Type any Words. ")
            return;
        }
        toast.success("Added.")
        disPatch(addTodo({ id: nanoid(), text: text.trim(), completed: false }))
        setText("")
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <div className='max-w-[1240px] mx-auto   ' >
                <div className='' >
                    {/* adding prosecering */}
                    <div className='grid grid-cols-1 md:grid-cols-1' >

                        {/* to do listing here */}
                        <div className='my-4' >
                            <InputToDo handleChange={handleChange} handleToAdd={handleToAdd} text={text} setText={setText} />

                        </div>
                        <motion.div variants={aboutH1} whileInView="visible" initial="hidden" >

                            <ListTask />
                        </motion.div>
                    </div>
                    <ToastContainer />
                </div>


            </div>
        </div>
    )
}

export default AddListPage