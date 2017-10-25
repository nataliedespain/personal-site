import React, { Component } from 'react';
import './App.css';

import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

class App extends Component {
  state = {
    colorName: 'turquoise'
  }
  changeColor = (colorName) => {
    this.setState({
      colorName
    });
  }
  render() {
    return (
      <div>
        <Main
          changeColor={this.changeColor}
          colorName={this.state.colorName}
        />
        <About
          colorName={this.state.colorName}
        />
        <Projects
          colorName={this.state.colorName}
        />
        <Skills
          colorName={this.state.colorName}
        />
        <Experience
          colorName={this.state.colorName}
        />
        <Education
          colorName={this.state.colorName}
        />
        <Footer
          colorName={this.state.colorName}
        />
      </div>
    );
  }
}

export default App;
