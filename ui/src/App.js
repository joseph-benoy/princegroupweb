import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
import "react-bootstrap-submenu/dist/index.css";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Admin from './pages/admin/admin';
import Dash from './pages/dash/dash';
import ScrollToTop from "react-scroll-to-top";
import Shop from './pages/shopProduct/shop';
import Product from './pages/product/product';
import Item from './pages/item/item';
import{ ScrollToTop as St} from "react-scroll-to-top";
import Type from './pages/type/type';
import Search from './pages/search/type';
import Contact from './pages/contact/contact';

function App() {
  return (
    <Router>
    <div className="App">
      <ScrollToTop smooth color='#259cd8'/>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/admin" element={<Admin/>}></Route>
              <Route path="/admin/dashboard" element={<Dash/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/category/:category" element={<Product/>}></Route>
              <Route path="/item/:pid" element={<Item/>}></Route>
              <Route path="/type/:category/:sub/:type" element={<Type/>}></Route>
              <Route path="/search/:term" element={<Search/>}></Route>          
              <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
      </div>
    </Router>


  );
}

export default App;
