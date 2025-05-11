import React, { Component } from 'react'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'


export default class About extends Component {
  render() {
    return (
      <Container>
        <TabContainer id='left-tabs-example' defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant='pills' className='flex-column mt-2'>
                    <NavItem>
                        <NavLink eventKey="first">Design</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey="second">Team</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey="third">Programming</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey="fourth">Frameworks</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey="fifth">Libraries</NavLink>
                    </NavItem>
                </Nav>
                </Col>
                <Col sm={9}>
                <TabContent className='mt-3'>
                    <TabPane eventKey="first">
                        <img alt='photo1' src="https://www.figma.com/community/resource/f3997856-1d63-4661-b9de-5716bcee61e2/thumbnail" width="800px"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </TabPane>
                    <TabPane eventKey="second">
                        <img alt='photo1' src="https://t3.ftcdn.net/jpg/04/79/93/20/360_F_479932092_BmeQGwL1ljKI368UJVlIwczA8MtjbBnj.jpg" width="800px"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </TabPane>
                    <TabPane eventKey="third">
                        <img alt='photo1' src="https://technology.online.city.ac.uk/media/mageplaza/blog/post/c/i/city_programming_languages_1.jpg" width="800px"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </TabPane>
                    <TabPane eventKey="fourth">
                        <img alt='photo1' src="https://miro.medium.com/v2/resize:fit:940/1*ueZBjBDoOQg19rEJYIUoaA.png" width="800px"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </TabPane>
                    <TabPane eventKey="fifth">
                        <img alt='photo1' src="https://img.freepik.com/free-photo/numerology-collage-concept_23-2150061750.jpg?semt=ais_hybrid&w=740" width="800px"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </TabPane>
                </TabContent>
                </Col>
            </Row>
        </TabContainer>
      </Container>
    )
  }
}
