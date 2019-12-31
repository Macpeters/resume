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
            <div label={{ text: "Online", tabClass: "online" }}>
              <Online />
            </div>
          </Tabs>
        </div>    
      </div>
    )
  }
}