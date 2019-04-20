import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, CardTitle, CardPanel } from 'react-materialize';

export const About = () => {

  return(

    <form class="aboutus-background" >

        <Row>
        <Col m={6} s={12}>
        <CardPanel className="purple lighten-2">
        <span className="white-text center-align">
        <h1 class="white-text"> WHAT WE DO  </h1>
        <p>Accenture solves our clients toughest challenges by providing unmatched services in strategy, consulting, digital, technology and operations.
        We partner with more than three-quarters of the Fortune Global 500, driving innovation to improve the way the world works and lives.
        With expertise across more than 40 industries and all business functions, we deliver transformational outcomes for a demanding new digital world.</p>
        </span>
        </CardPanel>
        </Col>
        </Row>


      <div className="card-panel center-align">
      <div class="section">
        <h4 class="purple-text text-darken-2">Accenture Strategy</h4>
        <p>Shapes the future at the intersection of business and technology</p>
      </div>
      <div class="divider"></div>
      <div class="section">
        <h4 class="purple-text text-darken-2">Accenture Consulting</h4>
        <p>Transforms businesses through industry expertise and insights</p>
      </div>
      <div class="divider"></div>
      <div class="section">
        <h4 class="purple-text text-darken-2">Accenture Digital</h4>
        <p>Creates value through new experiences, new intelligence and new connections</p>
      </div>
      <div class="divider"></div>
      <div class="section">
        <h4 class="purple-text text-darken-2">Accenture Technology</h4>
        <p>Powers businesses with cutting-edge solutions using established and emerging technologies</p>
      </div>
      <div class="divider"></div>
      <div class="section">
        <h4 class="purple-text text-darken-2">Accenture Operation</h4>
        <p>Delivers outcomes through infrastructure, security, cloud and business process services</p>
      </div>
      </div>

    </form>

  )
}

export default About
