import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import About from './components/layout/About'
import Projects from './components/layout/Projects'
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
