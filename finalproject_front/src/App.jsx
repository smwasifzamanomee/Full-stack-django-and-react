import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import axios from "axios";
import { useStateValue } from "./state/StateProvider";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./pages/About";
import NewPostAdd from "./pages/NewPostAdd";

export default function App() {
  const [{ profile }, dispatch] = useStateValue(null);

  console.log("profile", profile)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/profile/',
      headers: { Authorization: `Token ${window.localStorage.getItem('token')}` }  //089ce34e2164a82b394cedf4336311fcc058fedb
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      dispatch({
        type: 'SET_PROFILE',
        value: response.data['data']
      })
    }).catch(function (error) {
      console.error(error);
    });
  }, [])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {profile !== null ? (<>
          <Route path="/profile" element={<Profile />} />
          <Route path="/newpost" element={<NewPostAdd />} />
        </>) : (<>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          
          
        </>)}
        <Route path="/:id/" element={<PostDetails />} />
      </Routes>

    </BrowserRouter>
  )
}