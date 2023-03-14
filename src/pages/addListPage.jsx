import { useState } from 'react'
import { ListTask, NavigitionBottem, InputToDo } from "../components";
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo, removeTodo, toggleTodo } from '../features/reducer';
import { motion } from 'framer-motion';
import { inputToDoVarition } from '../utiles/motion';
const AddListPage = () => {
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
            <div className='max-w-[1240px] mx-auto   ' >
                <div className='' >
                    {/* adding prosecering */}
                    <div className='grid grid-cols-1 md:grid-cols-2' >
                        <div  >
                            <InputToDo handleChange={handleChange} handleToAdd={handleToAdd} text={text} setText={setText} />

                        </div>
                        {/* to do listing here */}
                        <motion.div variants={inputToDoVarition} initial="hidden" animate="visible" >

                            <ListTask />
                        </motion.div>
                    </div>
                </div>
                {/* navigition bottome is here */}
                {/* <div className='block lg:hidden' >
                    <NavigitionBottem    />
                </div> */}

            </div>
        </div>
    )
}

export default AddListPage