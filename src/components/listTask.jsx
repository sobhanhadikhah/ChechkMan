import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const ListTask = () => {

    const todo = useSelector(state => state.todoReducerState.todo)
    return (
        <div className='mx-3' >
            <h1 className='text-3xl p-4 grid  ' >All my Tasks</h1>
            <div className='h-[300px] my-3 md:my-0  md:ml-3  rounded-md bg-gray-300 overflow-auto   ' >
                <ul className='mx-3 gap-2 flex flex-col  ' >

                    {todo.map((todos, i) => {

                        return (
                            <div key={todos.id} className='flex flex-row'>
                                <li className='bg-purple-500 text-yellow-400 my-2  font-Poppins-Regular w-full p-2 rounded-full' > <span className='text-black' >{i + 1} - </span> {todos.text}</li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ListTask