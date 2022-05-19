import React from 'react'
import './header.css';
import prof_pic from '../../assets/prof_pic.jpeg';
const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Welcome to myDomain...</h1>
      <p>My name is Austin and I am a Computer Science Major that is continuously learning more and more everyday! I created this website to show a little about myself. Please take a look around.</p>

      

      
    </div>

    <div className="gpt3__header-image">
      <img src={prof_pic} alt="me"/>
    </div>
  </div>
);


export default Header
