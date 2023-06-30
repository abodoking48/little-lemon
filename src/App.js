import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import Footer from "./components/Footer"
import Login from "./routes/Login";
import {Route, Routes} from "react-router-dom";
import Menu from "./routes/Menu";


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
        <Route path = "/footer" element = {<Footer />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/menu" element = {<Menu />}/>
      </Routes>
    </>
  );
}

export default App;
