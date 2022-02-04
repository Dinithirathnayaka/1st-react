import React from 'react';

import { BrowserRouter,Route} from 'react-router-dom';


import NameList from './Components/Pages/NameList/NameList';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import  Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';


function App() {
  return(
    <div>
      <BrowserRouter>
      <HeaderBar/>
      <Home/>
      <About/>
      <NameList/>
      </BrowserRouter>
      
    
    </div>
  );


  
}

export default App;
