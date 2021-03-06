import React from 'react';
import './projects.css';
import cactusLog from '../../images/Projects/cactusLog.png';
import cellSim from '../../images/Projects/cellSim.png';
import keyToKeys from '../../images/Projects/keyToKeys.png';
import personalSite from '../../images/Projects/personalSite.png';
import raveMau5 from '../../images/Projects/raveMau5.png';

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <ul className="projects-list">
          <li><a href="#cactus-log">Cactus Log</a></li>
          <li><a href="#personal-site">Personal Website</a></li>
          <li><a href="#ravemau5">RaveMau5</a></li>
          <li><a href="#cell-sim">Cell Sim</a></li>
          <li><a href="#key-to-keys">Key To Keys</a></li>
          <li><a href="#skate-invasion">Skate Invasion</a></li>
        </ul>

        <div>
          <article id="cactus-log">
            <div>
              <div className="project-intro">
                <img className="intro-image" src={cactusLog} alt="screenshot of cactus log" />
                <div className="intro-summary">
                  <h3>Cactus Log</h3>
                  <div>I created this to track my cactus collection.
                  <a href="https://cactus-bartik-2ca70d.netlify.com/"
                      target="_blank"
                      rel="noopener noreferrer">  View it live on Netlify</a></div>
                </div>
              </div>

              <div className="project-description">
                <div className="description tech-used">
                  <h4>Technology Used</h4>
                  A VueJS/Nuxt app with static data stored in json files. A component for each species
                  is where I can add a new log entry, and accompanying photo.  This site would benefit from a database.
                </div>
                <div className="description future-plans">
                  <h4>Future Plans</h4>
                  I would like to build search features in so I can see how many species share features such as
                  where they originated from, or whether they produce edible fruit.
                </div>
              </div>
            </div>
          </article>

          <article id="personal-site">
            <div>
              <div className="project-intro">
                <img className="intro-image" src={personalSite} alt="screenshot of personal site" />
                <div className="intro-summary">
                  <h3>Personal Site</h3>
                  <div >My main website - from there you can access all my dev and art projects</div>
                  <div><a
                    href="http://www.macpeters.com"
                    target="_blank"
                    rel="noopener noreferrer">www.macpeters.com</a></div>
                </div>
              </div>

              <div className="project-description">
                <div className="description tech-used">
                  <h4>Technology Used</h4>
                  A VueJS/Nuxt app
                </div>
                <div className="description future-plans">
                  <h4>Future Plans</h4>
                  I would like to write a few more blog posts of things I've learned, and quick references.
                </div>
              </div>
            </div>
          </article>

          <article id="ravemau5">
            <div>
              <div className="project-intro">
                <img className="intro-image" src={raveMau5} alt="screenshot of RaveMau5" />
                <div className="intro-summary">
                  <h3>RaveMau5</h3>
                  <div>A platformer game built in GMS.
                  <a
                      href="https://ravemau5.netlify.com/"
                      target="_blank"
                      rel="noopener noreferrer">  Play RaveMau5</a>
                  </div>
                </div>
              </div>

              <div className="project-description">
                <div className="description tech-used">
                  <h4>Technology Used</h4>
                  Build in GameMaker 1, then upgraded it to run with GameMaker 2.  The playable version is
                  built for HTML5, but it could be easily built to other platforms
                </div>
                <div className="description future-plans">
                  <h4>Future Plans</h4>
                  As with most of my games, the UI, graphics, and music suffer from a lack of attention.  I have some
                  good mechanics in place, but the entire UX could use an overhaul.  I have been working towards being
                  able to animate, but I'd like to replace all the assets eventually.
                </div>
              </div>
            </div>
          </article>

          <article id="cell-sim">
            <div>
              <div className="project-intro">
                <img className="intro-image" src={cellSim} alt="screenshot of Cell Sim" />
                <div className="intro-summary">
                  <h3>Cell Sim</h3>
                  <div>A Simulation Game built in GMS.
                  <a
                      href="https://macpeters.itch.io/cell-sim"
                      target="_blank"
                      rel="noopener noreferrer">  Play on Itch.io (press P to start/stop)</a>
                  </div>
                </div>
              </div>
              <div className="project-description">
                <div className="description tech-used">
                  <h4>Technology Used</h4>
                  Built in GameMaker 2.
                </div>
                <div className="description future-plans">
                  <h4>Future Plans</h4>
                  I had a list, probably on Github, of other behaviour mechanics and cell types I'd like to apply.
                  I would also like to overhaul the graphics and add some music.
                </div>
              </div>
            </div>
          </article>

          <article id="key-to-keys">
            <div>
              <div className="project-intro">
                <img className="intro-image" src={keyToKeys} alt="screenshot of Key To Keys" />
                <div className="intro-summary">
                  <h3>Key To Keys</h3>
                  <div>An Educational game for learning key signatures built in GMS over a weekend at ToJam</div>
                  <div><a
                    href="https://macpeters.itch.io/the-key-to-keys"
                    target="_blank"
                    rel="noopener noreferrer">Play Key To Keys on Itch.io</a></div>
                </div>
              </div>
              <div className="project-description">
                <div className="description tech-used">
                  <h4>Technology Used</h4>
                  This was built in GameMaker 1
                </div>
                <div className="description future-plans">
                  <h4>Future Plans</h4>
                  This game is not fun at all, and it isn't even clear what you are supposed to do, so the UI needs
                  a new plan entirely.  Most of the time I spent was working out the algorithm to generate chords dynamically.
                  I believe I made it easy to narrow the focus down to just major chords, or just seventh chords, which would help
                  with pattern recognition.
              </div>
              </div>
            </div>
          </article>

          <article id="skate-invasion">
            <div>
              <div className="project-intro">
                {/* <img src="" className="project-image"  alt="screenshot of Skate Invasion" /> */}
                <div className="summary">
                  <h3>Skate Invasion</h3>
                  <div>A Game built in GMS to use Pathfinding</div>
                  <div></div>
                </div>
              </div>

              <div className="project-description">
                <div className="description tech-used">
                  <h4>Technology Used</h4>
                  Built in GameMaker 1 - I followed a tutorial on pathfinding, but it didn't work, even
                  using the source code directly.  I got it working after a lot of debugging
                </div>
                <div className="description future-plans">
                  <h4>Future Plans</h4>
                  Really the only thing in place is the pathfinding.  This game was also supposed to be a pseudo-simulation.
                  The mechanics that move the characters around the game area, and allow the player to add obstacles in order
                  to herd the characters together all still need to be added.  There is really nothing for graphics or music,
                  and I will have to import the code into GameMaker 2 in order to continue working on it at all.
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

    )
  }
}