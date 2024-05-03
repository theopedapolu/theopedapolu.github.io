import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav.js';
import Profile from "./components/Profile.js";
import Coursework from "./components/Coursework.js";
import Projects from './components/Projects.js';
import Blog from './components/Blog.js';
import Footer from './components/Footer.js';
import ProkudinGorskii from "./components/ProkudinGorskii.js";

function Home() {
  return (
    <>
      <Nav/>
      <Profile/>
      <Coursework/>
      <Projects/>
      <Blog/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/prokudin_gorskii" element={<ProkudinGorskii/>}/>
    </Routes>
    </BrowserRouter>
  );

}

export default App;
