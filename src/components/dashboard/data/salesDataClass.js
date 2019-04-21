import React, { Component } from 'react';

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import _ from "lodash";

import styled from "styled-components";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { AppContainer, Navigation, Body, Title } from "../containers";
import 'hammerjs';

import moment from 'moment'

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem
} from '@progress/kendo-react-charts';


// import { barChartQ4Months, barChartMonthlyPercentages } from './data/salesData';
// import { donutChartData } from './data/salesData';
class SalesData extends Component{
  state = {
    donutChartData: [
      { 'foodType': 'IT', 'percentSold': 1 },
      { 'foodType': 'Finance', 'percentSold': 24 },
      { 'foodType': 'Recruitment', 'percentSold': 13 },
      { 'foodType': 'General', 'percentSold': 16.5 },
      { 'foodType': 'Others', 'percentSold': 16.5 },
    ],

  }

  renderBarChart=(e)=>{
    const {projects} = this.props;

    var it_a=0;
    var finance_a=0;
    var recruitment_a=0;
    var general_a=0;
    var other_a=0;
    var it_b=0;
    var finance_b=0;
    var recruitment_b=0;
    var general_b=0;
    var other_b=0;
    var it_c=0;
    var finance_c=0;
    var recruitment_c=0;
    var general_c=0;
    var other_c=0;

    if (projects!=undefined){
      console.log(projects);
      console.log(projects[0]);
      var date = new Date()
      var currentMonth = date.getMonth();
      var oneMonthLater = new Date()
      oneMonthLater.setMonth(currentMonth+1);
      var twoMonthLater = new Date()
      twoMonthLater.setMonth(currentMonth+2);
      var c = moment(date).format('LLL').split(" ")[0];
      var b = moment(oneMonthLater).format('LLL').split(" ")[0];
      var a = moment(twoMonthLater).format('LLL').split(" ")[0];
      const barChartQ4Months=[c, b, a];
      for (var i = 0; i < projects.length; i++){
        if (projects[i].sel==="it"){
          if (projects[i].createdAt.toDate().getMonth()===date.getMonth()){
            it_a++;
          }
          if (projects[i].createdAt.toDate().getMonth()===oneMonthLater.getMonth()){
            it_b++;
          }
          if (projects[i].createdAt.toDate().getMonth()===twoMonthLater.getMonth()){
            it_c++;
          }
        }else if(projects[i].sel==="finance"){
          if (projects[i].createdAt.toDate().getMonth()===date.getMonth()){
            finance_a++;
          }
          if (projects[i].createdAt.toDate().getMonth()===oneMonthLater.getMonth()){
            finance_b++;
          }
          if (projects[i].createdAt.toDate().getMonth()===twoMonthLater.getMonth()){
            finance_c++;
          }
        }else if(projects[i].sel==="recruitment"){
          if (projects[i].createdAt.toDate().getMonth()===date.getMonth()){
            recruitment_a++;
          }
          if (projects[i].createdAt.toDate().getMonth()===oneMonthLater.getMonth()){
            recruitment_b++;
          }
          if (projects[i].createdAt.toDate().getMonth()===twoMonthLater.getMonth()){
            recruitment_c++;
          }
        }else if(projects[i].sel==="general"){
          if (projects[i].createdAt.toDate().getMonth()===date.getMonth()){
            general_a++;
          }
          if (projects[i].createdAt.toDate().getMonth()===oneMonthLater.getMonth()){
            general_b++;
          }
          if (projects[i].createdAt.toDate().getMonth()===twoMonthLater.getMonth()){
            general_c++;
          }
        }else if(projects[i].sel==="other"){
          if (projects[i].createdAt.toDate().getMonth()==date.getMonth()){
            other_a++;
          }
          if (projects[i].createdAt.toDate().getMonth()==oneMonthLater.getMonth()){
            other_b++;
          }
          if (projects[i].createdAt.toDate().getMonth()==twoMonthLater.getMonth()){
            other_c++;
          }
        }else{
          console.log("Wrong type!! "+projects[i].sel);
        }
      }
      const barChartMonthlyPercentages=[
        { name: 'IT', data: [it_a,it_b,it_c] },
        { name: 'Finance', data: [finance_a, finance_b, finance_c] },
        { name: 'Recruitment', data: [recruitment_a,recruitment_b,recruitment_c] },
        { name: 'General', data: [general_a,general_b,general_c] },
        { name: 'Others', data: [other_a,other_b,other_c] },
      ]
      return (
        <Chart style={{ height: 288 }}>
          <ChartLegend visible={false} />
          <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={barChartQ4Months} startAngle={45} />
          </ChartCategoryAxis>
          <ChartSeries>
            {
              barChartMonthlyPercentages.map((item, idx) => (
                <ChartSeriesItem key={idx} type="column" data={item.data} name={item.name} gap={2}/>
              ))}
          </ChartSeries>
          <ChartValueAxis skip={4}>
            <ChartValueAxisItem color="#888" skip={2} />
          </ChartValueAxis>
        </Chart>
      )
    }else{
      return null;
    }



  }

  renderDonutChart=(e)=>{
    const {projects} = this.props;
    var it = 0;
    var finance = 0;
    var recruitement = 0;
    var general = 0;
    var other = 0;
    if (projects!=undefined){
      console.log(projects);
      console.log(projects[0]);
      for (var i = 0; i < projects.length; i++){
        if (projects[i].sel==="it"){
          it++;
        }else if(projects[i].sel==="finance"){
          finance++;
        }else if(projects[i].sel==="recruitment"){
          recruitement++;
        }else if(projects[i].sel==="general"){
          general++;
        }else if(projects[i].sel==="other"){
          other++;
        }else{
          console.log("Wrong type!! "+projects[i].sel);
        }
      }
    }

    const donutChartData = [
      { 'foodType': 'IT', 'percentSold': it },
      { 'foodType': 'Finance', 'percentSold': finance },
      { 'foodType': 'Recruitment', 'percentSold': recruitement },
      { 'foodType': 'General', 'percentSold': general },
      { 'foodType': 'Others', 'percentSold': other },
    ]

    const labelTemplate = (e) => (e.category + '\n'  + Math.round(e.percentage*100) +'%');
    return(
      <Chart style={{ height: 300 }}>
        <ChartSeries>
          <ChartSeriesItem type="donut" data={donutChartData} categoryField="foodType" field="percentSold" padding={0}>
            <ChartSeriesLabels color="#fff" background="none" content={labelTemplate} />
          </ChartSeriesItem>
        </ChartSeries>
        <ChartLegend visible={false} />
      </Chart>
    )
  }

  renderTotalSubmission=(e)=>{
    const { projects } = this.props;
    if(projects!=undefined){
      var total_submission=projects.length;
      return(
      <div>
      <span className="percentage-number">{total_submission}</span>
      <p>TOTAL SUBMISSION</p>
      </div>
      )
    }else{
      return null;
    }
  }
  renderSolveSpeed=(e)=>{
    const { projects } = this.props;
    if(projects!=undefined){
      return(
        <div className="percentage-container">
          <span className="percentage-number">2</span>
          <span className="speed-sign">DAYS</span>
          <p>AVERAGE RESOLVE SPEED</p>
        </div>
      )
    }else{
      return null;
    }
  }

  renderFirstResponse=(e)=>{
    return null;
  }
  renderApproachingDeadline=(e)=>{
    const { projects } = this.props;
    if(projects!=undefined){
      var approaching = 0;
      var date = new Date();
      for (var i = 0; i < projects.length; i++){
        if (projects[i].solveStatus=="processing"&&(projects[i].deadline.toDate().getTime() - (3 * 24 * 60 * 60 * 1000)<date.getTime())){
          approaching++;
        }
      }
      return(
        <div className="percentage-container">
          <span className="percentage-number">{approaching}</span>
          <span className="speed-sign">TICKETS</span>
          <p>APPROACHING DEADLINE</p>
        </div>
      )
    }else{
      return null;
    }
  }
  renderTicketSolved=(e)=>{
    const { projects } = this.props;
    if(projects!=undefined){
      var percentage = 0;
      var solved = 0;
      for (var i = 0; i < projects.length; i++){
        if (projects[i].solveStatus=="solved"){
          solved++;
        }
      }
      percentage = Math.round(100*solved/projects.length);
      return(
        <div className="percentage-container">
          <span className="percentage-number">{percentage}</span>
          <span className="percentage-sign">%</span>
          <p>TICKET RESOLVED</p>
        </div>
      )
    }else{
      return null;
    }
  }
  render(){
    const { projects,type } = this.props;
    // console.log({projects});
    if (type=="barChart"){
      return(
        <div>
        {this.renderBarChart()}
        </div>
      )
    }
    if (type=="donutChart"){
      return(
        <div>
        {this.renderDonutChart()}
        </div>
      )
    }
    if (type == "totalSubmission"){
      return(
        <div>
        {this.renderTotalSubmission()}
        </div>
      )
    }
    if (type == "ticketSolved"){
      return(
        <div>
        {this.renderTicketSolved()}
        </div>
      )
    }
    if (type == "solveSpeed"){
      return(
        <div>
        {this.renderSolveSpeed()}
        </div>
      )
    }
    if (type == "firstResponse"){
      return(
        <div>
        {this.renderFirstResponse()}
        </div>
      )
    }
    if (type == "approachingDeadline"){
      return(
        <div>
        {this.renderApproachingDeadline()}
        </div>
      )
    }
  }
}
export default SalesData;
