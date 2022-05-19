import React from 'react';

import { youtube, github, linkedin } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div className='media'>
      <a href='https://www.youtube.com/channel/UCnmlSHlAUbDC0cC0Ti8Fq_Q/featured' target='_blank'>
        <img src={youtube} width='50' height='50' />
      </a>
    </div>
    <div className='media'>
      <a href='https://github.com/achu922' target='_blank'>
        <img src={github} width='50' height='50'/>
      </a>
    </div>
    <div className='media'>
      <a href='https://www.linkedin.com/in/amchu1' target='_blank'>
        <img src={linkedin} width='50' height='50'/>
      </a>      
    </div>
  </div>
  
  
);

export default Brand
