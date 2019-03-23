import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import AdminSignIn from './components/auth/AdminSignIn'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import ToDoList from './components/ToDo/ToDoList'
import customerquery from './components/customerquery/customerquery'
import guesscustomerquery from './components/customerquery/guesscustomerquery'
import Frontpage from './components/frontpage/Frontpage'
import About from './components/frontpage/About'
import replyQuery from './components/ToDo/replyQuery'
import NewToDoList from './components/ToDo/NewToDoList'


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
            <Route path='/guesscustomerquery' component={guesscustomerquery} />
            <Route path='/aboutus' component={About} />
            <Route path='/replyquery' component ={replyQuery} />
            <Route path='/admin' component = {AdminSignIn} />
            <Route path='/newtodo' component={NewToDoList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
