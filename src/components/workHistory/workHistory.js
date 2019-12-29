import React from 'react';

export default class WorkHistory extends React.Component {
  render() {
    return (
      <div>
        <h3>Work History</h3>
        <article>
          <span className="job-title">Full Stack Developer </span>
          <span className="organization">Info-tech Research Group</span>
          <span className="time-period">October 2015 - Present</span>
          <ul className="responsibilities">
            <li>Maintained legacy systems: added features, fixed bugs, upgraded gems/packages</li>
            <li>Built new projects and components to interact with existing systems.</li>
            <li>Created custom surveys to collect client data, maintaining data integrity, and produced web and PDF reports to visualize the data using Highcharts.</li>
            <li>Worked agile in a quickly changing environment, pivoting when required.</li>
            <li>Mentored new and junior employees</li>
          </ul>
        </article>

        <article>
          <span className="job-title">Full Stack Developer </span>
          <span className="organization">Lazar Entertainment</span>
          <span className="time-period">April 2013 - October 2015</span>
          <ul className="responsibilities">
            <li>Worked on multistream, realtime, interactive video compiled for an audience (using flash)</li>
            <li>Helped build an in depth dashboard using AngularJs, Rails, REDIS data storage, Faye eventserver, Wowza videoserver</li>
            <li>Documented company code standards, practices and helped onboard new employees</li>
            <li>Wrote and maintained Unit tests with Rspec, Jasmine/Karma</li>
            <li>Compiled embeddable interactive Geo-Data Maps using Mapbox, Tilemill, OpenJump, and Leaflet.js api</li>
          </ul>
        </article>

        <article>
          <span className="job-title">Game Developer </span>
          <span className="organization">Independant</span>
          <span className="time-period">April 2013 - Present</span>
          <ul className="responsibilities">
            <li>Developed cross-platform games using GameMaker Studio, Unity3D, AS3</li>
            <li>Worked with various teams, participating in game jams</li>
            <li>Released games in the Apple and Google Play stores</li>
          </ul>
        </article>

        <article>
          <span className="job-title">Quality Assurance</span>
          <span className="organization">Little Guy Games</span>
          <span className="time-period">November 2012 - January 2013</span>
          <ul className="responsibilities">
            <li>Designed a comprehensive test plan</li>
            <li>Tested games in various states of completion for bugs, inconsistencies, and imbalances</li>
            <li>Logged bugs via Bugzilla</li>
            <li>Kept a crash log, including breakpoints and error codes from XCode</li>
          </ul>
        </article>
      </div>
    )
  }
}