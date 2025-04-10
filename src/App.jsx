import Nav from "./components/Nav.jsx";
import ImageToJson from "./file.jsx";
import Home from "./pages/Home.jsx";
import { data } from './image.js';


import { useState } from "react";

function App() {
 
  
  // const [imgs, setImg] = useState([])
  
  // setImg(image)
  // console.log(img)

  return (
    <main>
      <Nav/>
      <Home/>
      
    </main>
  )
}

export default App
