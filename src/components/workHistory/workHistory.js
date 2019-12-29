import React from 'react';

export default class WorkHistory extends React.Component {
  render() {
    return (
      <div>
        <h3>Work History</h3>
        <article>
          <span className="title">Full Stack Developer </span>
          <span className="company">Info-tech Research Group</span>
          <span className="time-period">October 2015 - Present</span>
          <ul className="responsibilities">
            <li>Maintaining legacy systems: updating code to follow best practices, adding features, fixing bugs</li>
            <li>IT innovation and product development: building new projects and components to interact with existing systems.</li>
            <li>Data Collection and Visualization: creating custom surveys to collect client data, maintaining data integrity, and producing web and pdf reports to visualize the data clearly.</li>
            <li>Agile Development: working in a quickly changing environment, pivoting when required.</li>
            <li>Upgrading and setting up environments and configurations</li>
          </ul>
        </article>

        <article>
          <span className="title">Front End Developer </span>
          <span className="company">Lazar Entertainment</span>
          <span className="time-period">April 2013 - October 2015</span>
          <ul className="responsibilities">
            <li>Live Streaming: multistream, realtime, interactive video compiled for an audience (using flash), with an in depth dashboard</li>
            <li>Fullstack Development: HTML5, AngularJs, Rails, REDIS data storage, Faye eventserver, Wowza videoserver</li>
            <li>Documenting company code standards, practices</li>
            <li>Unit tests with Rspec, Jasmine/Karma</li>
            <li>Compiling embeddable interactive Geo-Data Maps using Mapbox, Tilemill, OpenJump, and Leaflet.js api</li>
          </ul>
        </article>

        <article>
          <span className="title">Game Developer </span>
          <span className="company">Independant</span>
          <span className="time-period">April 2013 - Present</span>
          <ul className="responsibilities">
            <li>Developing cross-platform games using GameMaker Studio, Unity3D, AS3</li>
            <li>Working with various teams, participating in game jams</li>
            <li>Freelance Web/App development</li>
          </ul>
        </article>

        <article>
          <span className="title">Quality Assurance</span>
          <span className="company">Little Guy Games</span>
          <span className="time-period">November 2012 - January 2013</span>
          <ul className="responsibilities">
            <li>Designed a comprehensive test plan</li>
            <li>Tested games in various states of completion for bugs, inconsistencies, and imbalances</li>
            <li>Logged bugs via Bugzilla</li>
            <li>Kept a crash log which included breakpoints and error codes from XCode</li>
          </ul>
        </article>
      </div>
    )
  }
}