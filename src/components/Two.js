import React from 'react'
import pic03 from '../assets/images/love-cacao.png'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Two = props => (
  <section
    id="two"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${pic03})` }}
  >
    <span className="image fit main">
      <img src={pic03} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>Love Yourself Enough, To Heal Yourself</h2>
          <p>A Journey to Self-Love through Cleansing</p>
        </header>
        <p>
          Love thyself to know thyself.
          Cacao is also supporting how we treat ourselves.
          Loving ourselves is part of being human.

        </p>
        <ul className="actions">
          <li>
            <a target="_blank" href="http://41.185.8.137/~xic02/alchemyofremembrance/" className="button">
              Join The Cleanse
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="three"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Two
