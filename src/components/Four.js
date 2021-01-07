import React from 'react'
import Fade from 'react-reveal/Fade'

const Four = props => (
  <Fade up>
    <section id="four" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>Here's What is Included</h2>
        </header>
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-paper-plane"></span>
              <h3>Group Chats</h3>
              <p>
                Feel supported and motivated with all those doing the cleanse in our Telegram group chat.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-video"></span>
              <h3>Three Live Zoom Calls</h3>
              <p>
                Receive guidance and insights into the world of optimum health from Matthew, Gabriel.
                Share stories and intentions with everyone in the group.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-info-circle"></span>
              <h3>Informational PDF Guide</h3>
              <p>
                Receive the protocols for the 2 week cleanse in written form for easy viewing.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-capsules"></span>
              <h3>A Detox Bundle (Optional)</h3>
              <p>
                Supplement bundle specifically designed to efficiently cleanse the system and
                strengthen your immunity to all diseases. (Details to come)
              </p>
            </section>
          {/**<section className="col-4 col-6-medium col-12-xsmall">
            <span className="icon solid alt major fa-file"></span>
            <h3>Odio laoreet accumsan</h3>
            <p>
              Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
              orci porttitor.
            </p>
          </section>
          <section className="col-4 col-6-medium col-12-xsmall">
            <span className="icon solid alt major fa-lock"></span>
            <h3>Massa arcu accumsan</h3>
            <p>
              Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
              orci porttitor.
            </p>
          </section>**/}
          </div>
        </div>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a target="_blank" href="https://shop.alchemyremember.me/product/group-cleanse-2020/" className="button">
                Sign Me Up to the 2 week Detox
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  </Fade>
)

export default Four
