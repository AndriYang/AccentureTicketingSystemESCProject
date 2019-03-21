import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import ToDoList from './components/ToDo/ToDoList'
import customerquery from './components/customerquery/customerquery'
import Frontpage from './components/frontpage/Frontpage'
import About from './components/frontpage/About'
import replyQuery from './components/ToDo/replyQuery'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Frontpage} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/todo' component={ToDoList} />
            <Route path='/customerquery' component={customerquery} />
            <Route path='/aboutus' component={About} />
            <Route path='/replyquery' component ={replyQuery} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
