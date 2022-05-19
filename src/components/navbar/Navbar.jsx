import React, { useState } from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine, RiUnderline } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-nobg.png';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} />
        </div>
          <div className="gpt3__navbar-links_container">
            <nav className='desktop_bar'>
              <p><NavLink 
              to='/' 
              className='slide-in-elliptic-top-fwd'
              style={({ isActive }) => ({
                color: isActive ? 'gold' : 'white',
              })}
              >Home
              </NavLink></p>

              <p><NavLink 
              to='/proj' 
              className='slide-in-elliptic-top-fwd'
              style={({ isActive }) => ({
                color: isActive ? 'gold' : 'white'
              })}
              >Projects
              </NavLink></p>

              <p><NavLink 
              to='/pinfo' 
              className='slide-in-elliptic-top-fwd'
              style={({ isActive }) => ({
                color: isActive ? 'gold' : 'white'
              })}
              >Playing with API's
              </NavLink></p>

            </nav>
            
          </div>
        
      </div>
      
      <div className='gpt3__navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
        <div className='gpt3__navbar-menu_container scale-up-center'>
          <div className='gpt3__navbar-menu_container-links'>
            <nav>
                <p><NavLink 
                to='/' 
                className='slide-in-elliptic-top-fwd'
                style={({ isActive }) => ({
                  color: isActive ? 'gold' : 'white'
                })}
                >Home
                </NavLink></p>

                <p><NavLink 
                to='/pinfo' 
                className='slide-in-elliptic-top-fwd'
                style={({ isActive }) => ({
                  color: isActive ? 'gold' : 'white'
                })}
                >Personal Info
                </NavLink></p>

                <p><NavLink 
                to='/proj' 
                className='slide-in-elliptic-top-fwd'
                style={({ isActive }) => ({
                  color: isActive ? 'gold' : 'white'
                })}
                >Projects
                </NavLink></p>

              </nav>
            
          </div>
        </div>
      )}
      
      </div>
    </div>
  )
}

export default Navbar