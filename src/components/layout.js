import React from 'react';

import './layout.css';
import Tabs from './tabs/tabs.js';

import Education from './education/education.js';
import Header from './header/header.js';
import Highlights from './highlights.js';
import Projects from './projects/projects.js';
import WorkHistory from './workHistory/workHistory.js';

import github from '../images/SocialIcons/github.png';
import stackoverflow from '../images/SocialIcons/stackoverflow.png';
import email from '../images/SocialIcons/email.png';

export default class Layout extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div className="content">
          <Tabs>
            <div label={{ text: "Highlights", tabClass: "highlights" }}>
              <Highlights />
            </div>
            <div label={{ text: "Work History", tabClass: "work-history" }}>
              <WorkHistory />
            </div>
            <div label={{ text: "Education", tabClass: "education" }}>
              <Education />
            </div>
            <div label={{ text: "Projects", tabClass: "projects" }}>
              <Projects />
            </div>
          </Tabs>
        </div>

        <div className="footer">
          <ul>
            <li className="social-li">
              <a
                href="https://github.com/Macpeters"
                target="_blank"
                rel="noopener noreferrer">
                <div className="social-button">
                  <img className="social-image" src={github} alt="github logo" />
                </div>

              </a>
            </li>
            <li className="social-li">
              <a
                href="https://stackoverflow.com/users/2111713/macpeters"
                target="_blank"
                rel="noopener noreferrer">
                <div className="social-button">
                  <img className="social-image" src={stackoverflow} alt="stack overflow logo" />
                </div>
              </a>
            </li>

            <li className="social-li">
              <a
                href="mailto:macpetersdev@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <div className="social-button">
                  <img className="social-image" src={email} alt="email icon" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}