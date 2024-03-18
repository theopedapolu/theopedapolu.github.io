import "./App.css"
import Nav from './components/Nav.js';
import Profile from "./components/Profile.js";
import Coursework from "./components/Coursework.js";
import Projects from './components/Projects.js';
import Blog from './components/Blog.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Nav/>
      <Profile/>
      <Coursework/>
      <Projects/>
      <Blog/>
      <Footer/>
    </div>
  );

}

export default App;
