import React from 'react'
import pic02 from '../assets/images/Heart-Opener-Cacao.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const One = props => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${pic02})` }}
  >
    <span className="image fit main">
      <img src={pic02} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <p>
                TOGETHER is always BETTER.
                Whole heartedly inviting You. From beginners to advanced, this group cleanse is made
                for All of us.
                A cleanse can be gentle, fun, and enlightening. Through the two weeks, we will support
                each other as we slowly reduce our food intake while increasing healing Liquids
                that wash clean and rejuvenate.
                As a "tribe", we can move together into the deeper layers of a Cleanse.
                The deeper we go, the better off we will be in the months to come.
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                ixCacao is both a superfood and a Hand Maiden who will support us during the cleanse.
                With just the right amount, cacao gently opens up our detoxification pathways
                We are also mentally and emotionally supported by the Love medicine of ixCacao
                that brings a sense of peace while going through the natural ebbs and flows of a cleanse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
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
export default One
