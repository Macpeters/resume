import React from 'react';
import Header from './header/header.js';
import Highlights from './highlights.js';
import Education from './education.js';
import WorkHistory from './workHistory/workHistory.js';

export default class Layout extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Highlights />
        <WorkHistory />
        <Education />
      </div>
    )
  }
}