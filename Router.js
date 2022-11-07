import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./src/module/Navbar/Navbar";
import Contact from "./src/module/Contact/Contact"
import About from "./src/module/About/About";
import Home from "./src/module/Home/Home";
import Login from "./src/module/Login/Login";
import Features from "./src/module/Features/Features";



const Router = () => {
    return (
       
        <>
           
            <ResponsiveAppBar />
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Features" element={<Features />} />
                <Route path="/Login" element={<Login />} />
            </Routes>

       
        </>

    )
}

export default Router;
