import { useEffect, useState } from 'react';
import { Navbar } from "./components";
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from './features/reducer';
const App = () => {
  const todos = useSelector(state => state.todoReducerState.todo)
  const [todoInputs, setTodoInputs] = useState("");
  const disPatch = useDispatch();
  const handleToAdd = (e) => {
    e.preventDefault();
    if (todoInputs.trim() === "") {
      return;
    }
    disPatch(
      addTodo(
        { id: nanoid(), text: todoInputs.trim(), completed: false }
      ))
    setTodoInputs("")

  }
  const handleChange = (e) => {
    setTodoInputs(e.target.value)
  }
  useEffect(() => {
    console.log(todos);
  }, [todos])
  return (
    <div>
      <Navbar />

      <div className='max-w-[1240px] mx-auto  ' >
        <div className='mx-3 ' >
          <div className='grid grid-cols-1 md:grid-cols-2' >
            <div>
              <h1 className='bg-blue-900 rounded-t-md text-red-600 p-4 text-3xl font-Poppins-Regular ' >Add To List</h1>
              <form onSubmit={handleToAdd} onChange={handleChange} >
                <input className='w-full px-3 py-1 rounded-b-md font-Poppins-Regular border focus:outline-none border-blue-700 ' placeholder='To Do' type="text" value={todoInputs} onChange={(e) => setTodoInputs(e.target.value)} />
                <div className='flex justify-end' >
                  <button className='bg-red-500 rounded-md p-2 font-Poppins-Regular  md:block mt-4 hidden  '  >Add </button>
                </div>
              </form>
            </div>
            <div className='h-[500px] my-3 md:my-0  md:ml-3  rounded-md bg-gray-300 overflow-auto   ' >

              <h1 className='text-3xl p-4 grid  ' >To Do List</h1>

              <ul className='mx-3 gap-4 flex flex-col  ' >

                {todos.map((todos, i) => {

                  return (
                    <div className='flex flex-row'>
                      <li key={todos.id} className='bg-blue-400 text-white font-Poppins-Regular w-full p-2 rounded-full' > <span className='text-black' >{i + 1} - </span> {todos.text}</li>
                    </div>
                  )
                })}
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App
