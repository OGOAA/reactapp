import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Aboutus from './Aboutus';
import Home from './Home';
import Layout from './Layout';
import './Layout'
import Glo from './Glo';
import Contact from './Contact';
import Drink from './Drink';
import Niceone from './Drink';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';



function App() {
  const newstyle= {
    color: "black",
    backgroundColor:"white",
    padding:"15px",
    fontFamily:"sanserif",
    textAlign:"center",
  }

  const globe = {
    display: "inline",
    
    }
   
  return (
    <div className= "App">
       <h1 style={newstyle}>VALUEMAX CODER'S HUB</h1>
       

      <BrowserRouter style={globe}>
          <Routes>
            <Route  path="/" element={<Layout />}>
              <Route path='Home' element={<Home />} />
              <Route path="Aboutus" element={<Aboutus />} />
              <Route path="Contact" element={<Contact />} />

            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;