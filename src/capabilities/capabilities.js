import React, { useRef } from "react"

/* Third-Party Packages */
import { withRouter, Route } from "react-router-dom"
/* Utility Components */
import { Hero, HeroContent, HeroFooter, HeroMedia, HeroText, HeroAction} from "utils/hero/hero"
/* Presentation Components */
import CapabilityFeatures from "./capability-features/capability-features"
import PartnerIndustries from "./partner-industries/partner-industries"
import Reviews from "./reviews/reviews"
import Strategy from "./strategy/strategy"
import Design from "./design/design"
import Technology from "./technology/technology"
/* Images */
import bg from "./images/bg.png"
import phone from "./images/phone-mockup.png"

function Page(){
  const sectionEl = useRef(null)

  const heroClick = () => {
    sectionEl.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return(
    <div>
        <Hero bg={bg} theme="light" align="left">
          <HeroContent>
            <HeroText
              width={475}
              size={65}
              text="How can we help?"
            />
            <HeroText
              size={22}
              width={508}
              text="We’re here to bring life to your digital vision. Got a project in mind? Let’s talk."
            />
            <HeroAction action={heroClick} />
          </HeroContent>
          <HeroFooter>
            <HeroMedia media={phone} width={350} />
          </HeroFooter>
        </Hero>

        <div ref={sectionEl}>
          <CapabilityFeatures />
        </div>

        <PartnerIndustries />

        <Reviews />
    </div>
  )
}


function Capabilities({ match }){
  return(
    <div>
        <Route exact path={`${match.path}/`} component={Page} />
        <Route path={`${match.path}/strategy`} component={Strategy} />
        <Route path={`${match.path}/design`} component={Design} />
        <Route path={`${match.path}/technology`} component={Technology} />
    </div>
  )
}

export default withRouter(Capabilities)
