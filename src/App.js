
import './App.css';

import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Bollywood from './component/Bollywood';

import Food from './component/Food';
import Header from './component/Header';
import Technology from './component/Technology';
import Hollywood from './component/Hollywood';
import Fitness from './component/Fitness';
import Footer from './component/Footer';

function App() {



  return (
  <BrowserRouter>
    <div className="App">
      <Header/>
      <Nav/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bollywood' element={<Bollywood/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>

      </Routes>
      <Footer/>
     
    </div></BrowserRouter>
  );
}

export default App;
