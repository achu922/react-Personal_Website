import React from 'react'
import UE_door_script from '../../assets/UE_door_scrip_pic.png';
import fastapipic from '../../assets/fastapi-socialmedia.png';
import html_website from '../../assets/html-website.png';
import ReactPlayer from 'react-player';


import './projects.css';
const Projects = () => (
  <section className='s1'>
    <h1 className='gradient__text' >Check out some of the Projects I have been working on!</h1>
    <div className='post-wrapper'>
     
      <div className='post'>
        <img className='thumbnail' src={UE_door_script} />
        <div className='post-preview'>
          <h6 className='post-title'>Unreal Engine Door Script</h6>
          <p className='post-intro'>Created a door that would automatically open using a calculated weight system. Example: The weight of the cube and cone combined is able to open the door.</p>
        </div>
      </div>
      <div className='post'>
        <ReactPlayer width='100%' height='180px' url='https://www.youtube.com/watch?v=SQKeaCGOmAw' />
        <div className='post-preview'>
          <h6 className='post-title'>VRCHAT World</h6>
          <p className='post-intro'>Created and Designed a VRChat world using Unity, Blender and VRChat SDK. Created custom stuctures and really enjoyed messing around with building and VRChat's SDK.</p>
        </div>
      </div>
      <div className='post'>
        <img className='thumbnail' src={html_website} />
        <div className='post-preview'>
          <h6 className='post-title' ><a href='https://www.public.asu.edu/~amchu1/' target='_blank'>HTML Website (click me)</a></h6>
          <p className='post-intro'>First personal project. Created a personal website using HTML and CSS. Utilized Javascript to save changes to theme colors the user picks. Also has a form that allows users to send emails to me.</p>
        </div>
      </div>
      <div className='post'>
        <ReactPlayer width='100%' height='180px' url='https://youtu.be/qVv6pGCJNbg' />
        <div className='post-preview'>
          <h6 className='post-title'>Pediatric Healthcare Management App</h6>
          <p className='post-intro'>Collaborated in a team of 5 members and utilized JavaFX and SQLite. Encouraged to use Agile Method for development and hosted Sprint meetings bi-weekly to ensure we met project deadlines.</p>
        </div>
      </div>
      <div className='post'>
        <img className='thumbnail' src={fastapipic} />
        <div className='post-preview'>
          <h6 className='post-title' ><a href='https://fastapi-austin.herokuapp.com/docs' target='_blank'>Social Media API (click me)</a></h6>
          <p className='post-intro'>Learned how to utilize the FastAPI framework and PostgreSQL to develop a Social Media API which has a functional Login authentication, User and Post functions and a vote system. </p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects
