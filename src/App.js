import './App.css';
import {Routes,Route} from "react-router-dom";
import { BrowserRouter} from 'react-router-dom';
import Home from './NavBar/Home';
import Write from './NavBar/Write';
import Contact from './NavBar/Contact';
import Places from './NavBar/Places';
import Food from './NavBar/Food';
import NotFound from './NavBar/NotFound';
import Header from './NavBar/Header';
import Header1 from './NavBar/Header1';
import { useState } from 'react';
import Momos from './NavBar/Momos'
import Malana from './NavBar/Malana'
import Leh from './NavBar/Leh'
import Alu from './NavBar/Alu'
import Corona from './NavBar/Corona'
import Hotel from './NavBar/BookHotel'
import Hydration from './NavBar/HydrationOnHimalayas'
import History from './NavBar/History'
import Trek from './NavBar/Trek'
import FactsHimalyas from './NavBar/FactsHimlayas'
import Animals from './NavBar/Animals';
function App() {
  const [style,setStyle]=useState("n2");
   
  const btnclick=()=>{
    setStyle("n3");
  }
  return (
    <div className="App">
      <BrowserRouter>
      <div class="head">
  <Header/>
  </div>
  <div className='n2'>
    
    <Header1></Header1>
  </div>
  <hr></hr>
  <Routes>
   <Route path="/" element={<Home/>}/>
  <Route path="/Home" element={<Home/>}></Route>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/Places" element={<Places/>}/>
  <Route path="/Food" element={<Food/>}/>
  <Route path="/Home/Write" element={<Write/>}/>
  <Route path="/*" element={<NotFound />}/> 
  <Route path="/Momo" element={<Momos/>}/>
  <Route path="/Alu" element={<Alu/>}/>
  <Route path="/Malana" element={<Malana/>}/>
  <Route path="/Leh" element={<Leh/>}/>
  <Route path="/Corona" element={<Corona/>}/>
  <Route path="/Hotel" element={<Hotel/>}/>
  <Route path="/Hydration" element={<Hydration/>}/>
  <Route path="/History" element={<History/>}/>
  <Route path="/FactsHimalayas" element={<FactsHimalyas/>}/>
  <Route path="/Trek" element={<Trek/>}/>
  <Route path="/Animals" element={<Animals/>}/>
  </Routes>
  </BrowserRouter>
  
    </div>
  );
}

export default App;
