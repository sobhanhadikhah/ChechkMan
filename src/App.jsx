import { Navbar } from "./components";
import { About, AddListPage, Notfound } from "./pages"
import { useTitle } from './hooks/usetitle';
import { Route, Routes } from "react-router-dom";
const App = () => {
  
  useTitle("Home")
  
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<AddListPage   />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>


    </div>
  )
}

export default App
