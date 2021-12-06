import React from 'react'
import "./App.css";
import Navbar from './Components/Navbar/index';
import { BrowserRouter as Routers, Route ,Routes} from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/AboutUs";
import Features from "./Components/Features";
import CareerPath from "./Components/CareerPath";


const App = () => {
    return (
        <>
       <Routers>
       <Navbar/>
       <Routes>
           <Route path="/" exact element={<Home/>}/>
           <Route path="/CareerPath" exact element={<CareerPath/>}/>
           <Route path="/Feature" exact element={<Features/>}/>
           <Route path="/AboutUs" exact element={<About/>}/>
       </Routes>
       </Routers>
       </>
    )
}

export default App
