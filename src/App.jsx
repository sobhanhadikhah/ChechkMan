import { useState, useEffect } from "react";
import { Navbar } from "./components";
import { useSelector } from "react-redux";
import { About, AddListPage, Notfound } from "./pages"
import useTitle from './hooks/usetitle';
import { Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navbarVarition } from "./utiles/motion";
import { useDarkMode } from "./hooks/darkmde";
const App = () => {
  //const todo = useSelector(state => state.todoReducerState.todo);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  useDarkMode(theme)

  return (
    <AnimatePresence mode="wait" >
      <div className="h-screen dark:bg-slate-800 bg-[#F5F5F5] "
      >

        <motion.div variants={navbarVarition} initial="hidden" animate="visible"  >
          <Navbar theme={theme} setTheme={setTheme} />
        </motion.div>
        <div  >
          <Routes>
            <Route path="/" element={<AddListPage />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>

      </div>
    </AnimatePresence>
  )
}

export default App;
