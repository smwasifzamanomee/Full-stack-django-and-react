import Navbar from "./components/Navbar";
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>      
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/profile" element= {<Profile />} />
        <Route path="/:id/" element= {<PostDetails />} />
      </Routes>    
      
    </BrowserRouter>
  )
}