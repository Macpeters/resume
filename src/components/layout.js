import React from 'react';

import Tabs from './tabs';

import Header from './header/header.js';
import Highlights from './highlights.js';
import Education from './education.js';
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
              List of Projects
            </div>
            <div label="Online">
              List of Online Accounts
            </div>
          </Tabs>
        </div>    
      </div>
    )
  }
}