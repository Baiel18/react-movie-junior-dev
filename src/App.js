import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Detailpage from "./pages/Detailpage";
import Home from "./Home";
import Login from "./component/Login";

function App() {
 return(
  <>
  <header>
    <div className="containerNav">
      <Link className="nav" to="/">Home</Link>
      <Link className="nav" to="/movie">Movie</Link>
      <Link className="nav" to="/contact">Contact</Link>
    </div>
  </header>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/movie" element={<Homepage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/:id" element={<Detailpage/>}/>
    <Route path="/a" element={<Login/>}/>
  </Routes>
  </>
 )
}

export default App;