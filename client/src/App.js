import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Landing from './components/layout/Landing'
import About from './components/layout/About'
import Projects from './components/layout/Projects'
import Contact from './components/layout/Contact'
import './App.css';

const App = () => {

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Sidebar />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
