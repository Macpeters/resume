import React from 'react';

export default class Education extends React.Component {
  render() {
    return (
      <article>
        <h3>Education</h3>
        <div>
          <span className="organization">Cybrary</span>
          <span className="time-period">2021 - present</span>
          <div>
            <ul className="responsibilities">
              <li>
                <b>CompTIA Network+</b>
                <p>OSI & TCP/IP Models, Devices and Protocols, IP Addresses,
                  Routing & Switching, DNS, Virtual Computers
                </p>
              </li>
            </ul>
          </div>
          <br />
        </div>
        <div>
          <span className="organization">triOS</span>
          <span className="time-period">2011 - 2013</span>
          <span className="job-title">Graduated with Honors</span>
          <div>
            <ul className="responsibilities">
              <li>
                <b>Video Game Design and Development Diploma Program, Toronto</b>
                <p>
                  Analysis and Technical Design, Game Prototyping with AS3, HTML5,
                  XNA, Unity3D, C++/DirectX, Video Game Business, Math, and Physics,
                  Level Design, Game Audio, 3D Modelling With Maya
                </p>
                <div className="">
                  <h4>Awards</h4>
                  <ul className="responsibilities">
                    <li>Highest Acedemic Achievement</li>
                    <li>Perfect Attendance</li>
                  </ul>
                </div>
                <div>
                  <h4>Extra-Curriculars</h4>
                  <ul className="responsibilities">
                    <li>Participated in weekly GPC (Game Prototype Challenge)</li>
                    <li>Participated in Month-long Windows 7 Game Challenge</li>
                    <li>Attended Level Up to present a game: Jump Dude</li>
                    <li>Worked as Student Ambassador during the Game On Science expo at the Ontario Science Center</li>
                    <li>Took part in TOJam 7, 8, and 10</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
    )
  }
}