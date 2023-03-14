import { useState, useEffect } from "react";
import { Navbar } from "./components";
import { useSelector } from "react-redux";
import { About, AddListPage, Notfound } from "./pages"
import { useTitle } from './hooks/usetitle';
import { Route, Routes } from "react-router-dom";
import { saveToDo } from "./hooks/savestoreg";
const App = () => {
  const todo = useSelector(state => state.todoReducerState.todo);
  useTitle("Home")
  return (
    <div>
      <Navbar />
      <div className="" >
        <Routes>
          <Route path="/" element={<AddListPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>


    </div>
  )
}

export default App;
