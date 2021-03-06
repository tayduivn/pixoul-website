import React from "react"
/* Third-Party */
import { Container, Row, Col } from 'react-grid-system'
/* Utils */
import Typography from "utils/typography/typography"
import Feature from "utils/feature/feature"
/* Images */
import HeartIcon from "utils/icons/heart"
import SearchIcon from "utils/icons/search"
import DesignIcon from "utils/icons/design"
import DevelopmentIcon from "utils/icons/development"
import StackIcon from "utils/icons/stack"

const Excel = () => (
  <div className="excel gutters">

    <div className="excel-header">
      <HeartIcon color="#276cf2" circular />
      <Typography variant="header1" align="center">Where We Excel.</Typography>
      <Typography variant="subtitle1" align="center">We supply the talent you need, right when you need it.  Our network spans skill in programming languages, branding, research, and more.</Typography>
    </div>

    <Container>
      <Row>
        <Col sm={12} md={3}>
          <Feature
            shrink
            position="top"
            align="center"
            title="Research & Strategy"
            icon={<SearchIcon color="#000000" />}
            description="Branding, Messaging, User Sentiment, etc."
          />
        </Col>
        <Col sm={12} md={3}>
          <Feature
            shrink
            position="top"
            align="center"
            title="UX/UI Design"
            icon={<DesignIcon color="#000000" />}
            description="Wireframes, High Fidelity Mockups, User Testing, etc."
          />
        </Col>
        <Col sm={12} md={3}>
          <Feature
            shrink
            position="top"
            align="center"
            title="Development"
            icon={<DevelopmentIcon color="#000000" />}
            description="Front End Implementation, Back End Databases, QA, etc."
          />
        </Col>
        <Col sm={12} md={3}>
          <Feature
            shrink
            position="top"
            align="center"
            title="Project Management"
            icon={<StackIcon color="#000000" />}
            description="Agile Scrum, Waterfall Methodologies, etc."
          />
        </Col>
      </Row>
    </Container>
  </div>
)


export default Excel
