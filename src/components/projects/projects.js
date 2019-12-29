import React from 'react';
import './projects.css';

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <h3>Projects</h3>
        <ul>
          <li><a href="#cactus-log">Cactus Log</a></li>
          <li><a href="#personal-site">Personal Website</a></li>
          <li><a href="#ravemau5">RaveMau5</a></li>
          <li><a href="#cell-sim">Cell Sim</a></li>
          <li><a href="#key-to-keys">Key To Keys</a></li>
          <li><a href="#skate-invasion">Skate Invasion</a></li>
        </ul>

        <hr />

        <div>
          <article id="cactus-log">
            <h3>Cactus Log</h3>
            <div>
              <div className="summary">This is a pet project I created in order to track my cactus collection</div>
              <div className="summary"><a href="https://cactus-bartik-2ca70d.netlify.com/" target="_blank">View Cactus Log on Netlify</a></div>
              <div className="tech-used">
                <h4>Technology Used</h4>
                I built this as a VueJS/Nuxt app using json files to store static data. A component for each species
                is where I can add a new log entry, and accompanying photo.  This site would benefit from static storage
                like REDIS, but I'm taking the free approach here.  
              </div>
              <div className="future-plans">
                <h4>Future Plans</h4>
                I would like to build search features in so I can see how many species share features such as 
                where they originated from, or whether they produce edible fruit.
              </div>
            </div>
          </article>

          <hr />

          <article id="personal-site">
            <h3>Personal Site</h3>
            <div>
              <div className="summary">This is my main website - from there you can acess all my dev and art projects</div>
              <div className="summary"><a href="http://www.macpeters.com" target="_blank">www.macpeters.com</a></div>
              <div className="tech-used">
                <h4>Technology Used</h4>
                This as a VueJS/Nuxt app
              </div>
              <div className="future-plans">
                <h4>Future Plans</h4>
                I would like to build search features in so I can see how many species share features such as
                where they originated from, or whether they produce edible fruit.
              </div>
            </div>
          </article>

          <hr />

          <article id="ravemau5">
            <h3>RaveMau5</h3>
            <div>
              <div className="summary">A platformer game built in GMS</div>
              <div className="summary"><a href="https://ravemau5.netlify.com/" target="_blank">Play RaveMau5</a></div>
              <div className="tech-used">
                <h4>Technology Used</h4>
                I built this using GameMaker 1, then upgraded it to run with GameMaker 2.  The playable version is
                built for HTML5, but it could be easily built to other platforms
              </div>
              <div className="future-plans">
                <h4>Future Plans</h4>
                As with most of my games, the UI, graphics, and music suffer from a lack of attention.  I have some 
                good mechanics in place, but the entire UX could use an overhaul.  I have been working towards being 
                able to animate, but I'd like to replace all the assets eventually.
              </div>
            </div>
          </article>

          <hr />

          <article id="cell-sim">
            <h3>Cell Sim</h3>
            <div>
              <div className="summary">A Simulation Game built in GMS</div>
              <div className="summary"><a href="https://macpeters.itch.io/cell-sim" target="_blank">Play Cell Sim on Itch.io (press P to start/stop)</a></div>
              <div className="tech-used">
                <h4>Technology Used</h4>
                This was built in GameMaker 2.  
              </div>
              <div className="future-plans">
                <h4>Future Plans</h4>
                I had a list, probably on Github, of other behaviour mechanics and cell types I'd like to apply.  
                I would also like to overhaul the graphics and add some music.  
              </div>
            </div>
          </article>

          <hr />

          <article id="key-to-keys">
            <h3>Key To Keys</h3>
            <div>
              <div className="summary">An Educational game for learning key signatures built in GMS over a weekend at ToJam</div>
              <div className="summary"><a href="https://macpeters.itch.io/the-key-to-keys" target="_blank">Play Key To Keys on Itch.io</a></div>
              <div className="tech-used">
                <h4>Technology Used</h4>
                This was built in GameMaker 1
              </div>
              <div className="future-plans">
                <h4>Future Plans</h4>
                This game is not fun at all, and it isn't even clear what you are supposed to do, so the UI needs 
                a new plan entirely.  Most of the time I spent was working out the algorithm to generate chords dynamically.
                I believe I made it easy to narrow the focus down to just major chords, or just seventh chords, which would help
                with pattern recognition. 
              </div>
            </div>
          </article>

          <hr />

          <article id="skate-invasion">
            <h3>Skate Invasion</h3>
            <div>
              <div className="summary">A Game built in GMS to use Pathfinding</div>
              <div className="summary"></div>
              <div className="tech-used">
                <h4>Technology Used</h4>
                This was built in GameMaker 1 - I followed a tutorial on pathfinding, but it didn't work, even 
                using the source code directly.  I got it working after a lot of debugging
              </div>
              <div className="future-plans">
                <h4>Future Plans</h4>
                  Really the only thing in place is the pathfinding.  This game was also supposed to be a pseudo-simulation.
                  The mechanics that move the characters around the game area, and allow the player to add obstacles in order
                  to herd the characters together all still need to be added.  There is really nothing for graphics or music,
                  and I will have to import the code into GameMaker 2 in order to continue working on it at all.
              </div>
            </div>
          </article>

          <hr />
        </div>
      </div>

    )
  }
}