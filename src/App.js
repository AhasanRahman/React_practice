// import './App.css';
// import Home from './components/home
// import List from './components/List';
// import ContractForm from './components/ContractForm';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import Test from './components/test';

// import Header from './pages/header';
import Home from './pages/Home';
import About from  './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    // <div className="App">
    
    // </div>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Service" element={<Service/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>
  </Routes>
  </BrowserRouter>


  );
}

export default App;
