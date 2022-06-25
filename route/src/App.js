import { BrowserRouter as Router,Routes, Route, NavLink, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

const App = () =>{
  return(
    <Router>
      <Link to="/"> <h2>Home</h2> </Link>
      <Link to="/about"> <h2>About</h2> </Link>
      <Link to="/contact"> <h2>Contact</h2> </Link>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;