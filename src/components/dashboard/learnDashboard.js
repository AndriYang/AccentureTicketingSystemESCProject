
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Ripple } from '@progress/kendo-react-ripple';
import { savePDF } from '@progress/kendo-react-pdf';

import {DonutChartContainer} from './DonutChartContainer';
import { BarChartContainer } from './barchartContainer';
import { GridContainer } from './GridContainer';
import { PanelBarContainer } from './PanelBarContainer';

import '@progress/kendo-theme-material/dist/all.css';
import 'bootstrap-4-grid/css/grid.min.css';

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import _ from "lodash";

import styled from "styled-components";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { AppContainer, Navigation, Body, Title } from "./containers";

import SalesData from './data/salesDataClass'

class App extends Component {
  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
    this.state = {
      showDialog: false,
      total_submission: 245,
      resolve_speed: 2,
      first_response: 1,
      urgent_tickets: 5,
      percentage: 94
    }
  }
  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto' });
  }
  handleShare = () => {
    this.setState({
      showDialog: !this.state.showDialog
    }, function(){

    })
  }
  renderDonutChartContainer=()=>{
    return <DonutChartContainer />
  }
  renderBarChartContainer=()=>{
    return <BarChartContainer />
  }
  renderHeader=()=>{
    const date = new Date();
    const year = date.getYear();
    var Q = 1;
    if (date.getMonth()<=5&&date.getMonth()>2){
      Q = 2;
    }
    if (date.getMonth()<=8&&date.getMonth()>5){
      Q = 3;
    }
    if (date.getMonth()<=11&&date.getMonth()>8){
      Q = 4;
    }
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <h1>Ticket Dashboard | Q{Q} {year+1900}</h1>
      </div>
    )
  }
  render() {
    return (
        <div className="bootstrap-wrapper">
          <div className="app-container container" ref={(el) => this.appContainer = el}>
            <div className="row">
              {this.renderHeader()}
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right">

                <Button primary={true} onClick={this.handlePDFExport}>Export as PDF</Button>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-12 col-xl-12">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <SalesData projects={this.props.projects} type="donutChart"/>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <SalesData projects={this.props.projects} type="barChart"/>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                  <SalesData projects={this.props.projects} type="totalSubmission"/>
                  </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-2 col-lg-3 col-xl-3">
                    <SalesData projects={this.props.projects} type="ticketSolved"/>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-2 col-lg-3 col-xl-3">
                  <SalesData projects = {this.props.projects} type="solveSpeed"/>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-2 col-lg-3 col-xl-3">
                  <SalesData projects={this.props.projects} type="approachingDeadline"/>
                  </div>
                </div>
              </div>
            </div>
            {this.state.showDialog &&
              <Dialog title={"Share this report"} onClose={this.handleShare}>
                <p>Please enter the email address/es of the recipient/s.</p>
                <Input placeholder="example@progress.com" />
                <DialogActionsBar>
                  <Button primary={true} onClick={this.handleShare}>Share</Button>
                  <Button onClick={this.handleShare}>Cancel</Button>
                </DialogActionsBar>
              </Dialog>
            }
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(App);
