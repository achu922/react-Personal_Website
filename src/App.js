import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Footer, Header } from './containers';
import { Navbar, Brand, Home, PersonalInfo, Projects} from './components';
import './App.css';

const App = () => {
  return (
    
    <div className='App'>
      <Router>
        <div className='gradient_bg'>
        <Navbar />
        
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path="/pinfo" element={<PersonalInfo />} />
            <Route path="/proj" element={<Projects />} />
          </Routes>
         
        <Header />
        <Brand />
        <Footer />
        </div>
        </Router>
        
    </div>
    
    
    
  )
}

export default App
