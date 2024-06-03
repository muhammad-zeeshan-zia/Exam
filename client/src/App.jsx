import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
 

  return (
    <>
     <BrowserRouter>
        <Routes>
    
          <Route path="/register" element={<Register/>}></Route> 
          <Route path="/login" element={<Login/>}></Route>  
          <Route path="/" element={<Home/>}></Route>  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
