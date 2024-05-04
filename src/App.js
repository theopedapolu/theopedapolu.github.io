import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ScrollToTop from "./ScrollToTop.js";
import Nav from './components/Nav.js';
import Profile from "./components/Profile.js";
import Coursework from "./components/Coursework.js";
import Projects from './components/Projects.js';
import Blog from './components/Blog.js';
import Footer from './components/Footer.js';
import ProkudinGorskii from "./components/ProkudinGorskii.js";
import ImageBlending from "./components/ImageBlending.js";
import FaceMorphing from "./components/FaceMorphing.js";
import Autostitching from "./components/Autostitching.js";
import NERF from "./components/NERF.js";

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
    <ScrollToTop></ScrollToTop>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/prokudin_gorskii" element={<ProkudinGorskii/>}/>
      <Route path='/image_filtering_and_blending' element={<ImageBlending/>}/>
      <Route path='/face_morphing' element={<FaceMorphing/>}/>
      <Route path='/nerf' element={<NERF/>}/>
      <Route path='/autostitching' element={<Autostitching/>}/>
      <Route path='/hdr' element={<ImageBlending/>}/>
    </Routes>
    </BrowserRouter>
  );

}

export default App;
