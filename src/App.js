import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Projects/Project';
import './App.css';
import Contact from './components/Contact/Contact';
import Skill from './components/Skills/Skill';
import { Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './index'


const App = () => {
  return (
    <>
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/skills" component={Skill} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" ></Redirect>

      </Switch> */}
      <Home to="#" />
      <About to="#about" />
      <Project to="#project" />
      <Skill to="#skills" />
      <Contact to="#contact" />
    </>
  );
}

export default App;
