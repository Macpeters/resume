import React from 'react';
import './online.css';
import github from '../../images/SocialIcons/github.png';
import stackoverflow from '../../images/SocialIcons/stackoverflow.png';
import email from '../../images/SocialIcons/email.png';

export default class Online extends React.Component {
  render() {
    return (
      <div>        
        <ul>
          <li class="social-li">
            <a 
              href="https://github.com/Macpeters"
              target="_blank"
              rel="noopener noreferrer">
            <div className="social-button">
              <img className="social-image" src={github} alt="github logo" />
              <span className="link-title">Github</span>
            </div>
            
            </a>
          </li>
          <li class="social-li">
            <a 
              href="https://stackoverflow.com/users/2111713/macpeters"
              target="_blank"
              rel="noopener noreferrer">
              <div className="social-button">
                <img className="social-image" src={stackoverflow} alt="stack overflow logo" />
                <span className="link-title">Stack Overflow</span>
              </div>
            </a>
          </li>

          <li class="social-li">
            <a
              href="mailto:macpetersdev@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <div className="social-button">
                <img className="social-image" src={email} alt="email icon" />
                <span className="link-title">Email</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

    )
  }
}