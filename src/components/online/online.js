import React from 'react';
import './online.css';
import github from '../../images/SocialIcons/github.png';
import stackoverflow from '../../images/SocialIcons/stackoverflow.png';

export default class Online extends React.Component {
  render() {
    return (
      <div>
  <h3>Online</h3>
        
        <ul>
          <li className="social-button">
            <a 
              href="https://github.com/Macpeters"
              target="_blank"
              rel="noopener noreferrer">
            <img className="social-image" src={github} alt="github logo" />
            <span className="link-title">Github</span>
            </a>
          </li>
          <li className="social-button">
            <a 
              href="https://stackoverflow.com/users/2111713/macpeters"
              target="_blank"
              rel="noopener noreferrer">
              <img className="social-image" src={stackoverflow} alt="stack overflow logo" />
            <span className="link-title">Stack Overflow</span>
            </a>
          </li>
        </ul>
      </div>

    )
  }
}