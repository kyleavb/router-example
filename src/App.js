import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import NinjaVsZombie from './NinjaVsZombie'

let projectArray = [
  {
    name: 'Ninja Vs Zombie',
    tech: 'Vanilla HTML/CSS/JS'
  },
  {
    name: 'Magic the Database',
    tech: 'Node.js, Express, EJS, Sequelize/Postgresql'
  },
  {
    name: 'Equally',
    tech: 'Node.js, Express, React, Mongoose/MongoDB'
  }
]

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <h1>My Portfolio Nav Bar!</h1>
          <Link to='/'>Home</Link>{` `}
          <Link to='/skills'>Skills</Link>{` `}
          <Link to='/projects'>Projects</Link>
          <hr />
          <h2>Render Area</h2>
          <Route exact path='/' component={Home} />
          <Route path='/skills' component={Skills} />
          <Route path='/projects' component={() => <Projects projects={projectArray} />} />
          <Route path='/NinjaVsZombie' component={NinjaVsZombie} />
        </div>
      </Router>
    );
  }
}

export default App;
