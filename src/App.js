import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Detailpage from "./pages/Detailpage";

function App() {
 return(
  <>
  <header>
    <div className="containerNav">
      <Link className="nav" to="/">Movie</Link>
    </div>
  </header>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/:id" element={<Detailpage/>}/>
  </Routes>
  </>
 )
}

export default App;