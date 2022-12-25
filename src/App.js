import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import Contact from "./Components/Contact"

function App() {

  const [home,setHome]= useState(true)
  const [aboutMe,setAboutMe]= useState(false)
  const [contact,setContact]= useState(false)
  console.log(home)
  return (
    <div className="App">
    <Router>
    <Header home={home} setHome={setHome} setAboutMe={setAboutMe} aboutMe={aboutMe} setContact={setContact} contact={contact}/>
    <Routes>
    <Route path={"/"} element={<Projects />} />
    <Route path={"/my-portfolio"} element={<Projects />} />
    <Route path={"/aboutme"} element={<AboutMe />} />
    <Route path={"/contact"} element={<Contact />} />
    </Routes>
    </Router>
     
    </div>
  );
}

export default App;
