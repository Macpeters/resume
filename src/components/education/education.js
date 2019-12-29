import React from 'react';

export default class Education extends React.Component {
  render() {
    return (
      <article>
        <h3>Education</h3>
        <div>
          <span className="organization">triOS, Video Game Design and Development Diploma Program, Toronto</span>
          <span className="time-period">2011 - 2013</span>
          <br />
          <span className="job-title">Graduated with Honors</span>
          <div className="">
            <h4>Awards</h4>
            <ul className="responsibilities">
                <li>Highest Acedemic Achievement</li>
                <li>Perfect Attendance</li>
            </ul>
          </div>
          <div>
            <h4>Courses</h4>
            <ul className="responsibilities">
              <li>Video Game Analysis and Technical Design</li>
              <li>Game Prototyping with AS3, HTML5, XNA, Unity3D, C++/DirectX</li>
              <li>Video Game Business, Math, and Physics</li>
              <li>Level Design, Game Audio, 3D Modelling With Maya</li>
            </ul>
          </div>

          <div>
            <h4>Extra-Curriculars</h4>
            <ul className="responsibilities">
              <li>Participated in weekly GPC (Game Prototype Challenge)</li>
              <li>Participated in Month-long Windows 7 Game Challenge</li>
              <li>Attended Level Up to present a game: Jump Dude</li>
              <li>Worked as Student Ambassador during the Game On Science expo at the Ontario Science Center</li>
            </ul>
          </div>
        </div>
      </article>
    )
  }
}