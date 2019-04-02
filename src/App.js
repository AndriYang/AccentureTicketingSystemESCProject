import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import AdminSignIn from './components/auth/AdminSignIn'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import customerquery from './components/customerquery/customerquery'
import guesscustomerquery from './components/customerquery/guesscustomerquery'
import Frontpage from './components/frontpage/Frontpage'
import About from './components/frontpage/About'
// import NewReplyQuery from './components/ToDo/NewReplyQuery'
import NewReplyQuery from './components/ToDo/NewReplyQueryAccenture'
import Agent from './components/real-time-chat/Agent'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Frontpage} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/customerquery' component={customerquery} />
            <Route path='/guesscustomerquery' component={guesscustomerquery} />
            <Route path='/aboutus' component={About} />
            <Route path='/admin' component = {AdminSignIn} />
            <Route path='/reply' component={NewReplyQuery} />
            <Route path='/realtimechatagent' component = {Agent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
