import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import Contact from "./Components/Contact"

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Routes>
    <Route path={"/"} element={<Projects />} />
    <Route path={"/aboutme"} element={<AboutMe />} />
    <Route path={"/contact"} element={<Contact />} />
    </Routes>
    </Router>
     
    </div>
  );
}

export default App;
