import Home from "./Components/Home/Home";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import { Login } from "./Redux-toolkit/AuthSlice";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element= {<LandingPage/>}></Route>
          <Route path="/home" element= {<Home/>}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
