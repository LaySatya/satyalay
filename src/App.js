import { Route, Routes } from 'react-router-dom';
import About from './components/about.js';
import Contact from './components/contact.js';
import Home from './components/home.js';
import Service from './components/service.js';
import NavBar from './navbar.js';
function App() {
  return (
    <>

      <NavBar/>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={true}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
