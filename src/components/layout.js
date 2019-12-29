import React from 'react';

import Tabs from './tabs/tabs.js';

import Education from './education/education.js';
import Header from './header/header.js';
import Highlights from './highlights.js';
import Online from './online/online.js';
import Projects from './projects/projects.js';
import WorkHistory from './workHistory/workHistory.js';

export default class Layout extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div>
          <Tabs>
            <div label="Highlights">
              <Highlights />
            </div>
            <div label="Work History">
              <WorkHistory />
            </div>
            <div label="Education">
              <Education />
            </div>
            <div label="Projects">
              <Projects />
            </div>
            <div label="Online">
              <Online />
            </div>
          </Tabs>
        </div>    
      </div>
    )
  }
}