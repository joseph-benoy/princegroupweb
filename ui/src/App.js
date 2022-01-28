import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
import "react-bootstrap-submenu/dist/index.css";
import {BrowserRouter as Router,Route,Routes,useNavigate} from 'react-router-dom';
import Header from "./components/Header/Header"
import Footer from "./components/footer/footer"
import About from './pages/about/about';
import Services from './pages/services/services';
import Contact from './pages/contact/contact';
import Admin from './pages/admin/admin';
function App() {
  return (
    <Router>
    <div className="App">
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
    </div>
    </Router>


  );
}

export default App;
