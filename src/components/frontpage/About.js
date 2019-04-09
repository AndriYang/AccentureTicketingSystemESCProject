import React, { Component } from 'react'
import { connect } from 'react-redux'

export const About = () => {

  return(
    <div className="card-panel">
      <h1 class="blue-text text-darken-2"> WHAT WE DO  </h1>
      <p>Accenture solves our clients toughest challenges by providing unmatched services in strategy, consulting, digital, technology and operations.</p>
      <p> We partner with more than three-quarters of the Fortune Global 500, driving innovation to improve the way the world works and lives.</p>
      <p> With expertise across more than 40 industries and all business functions, we deliver transformational outcomes for a demanding new digital world. </p>
    <div class="divider"></div>
    <div class="section">
      <h4 class="blue-text text-darken-2">Accenture Strategy</h4>
      <p>Shapes the future at the intersection of business and technology</p>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h4 class="blue-text text-darken-2">Accenture Consulting</h4>
      <p>Transforms businesses through industry expertise and insights</p>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h4 class="blue-text text-darken-2">Accenture Digital</h4>
      <p>Creates value through new experiences, new intelligence and new connections</p>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h4 class="blue-text text-darken-2">Accenture Technology</h4>
      <p>Powers businesses with cutting-edge solutions using established and emerging technologies</p>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h4 class="blue-text text-darken-2">Accenture Operation</h4>
      <p>Delivers outcomes through infrastructure, security, cloud and business process services</p>
    </div>
  </div>

  )
}

export default About
