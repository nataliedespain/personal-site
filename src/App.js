import React, { Component } from 'react';
import './App.css';

import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Art from './components/Art';
import Footer from './components/Footer';

class App extends Component {
  state = {
    colorName: 'turquoise',
    pic1: '225px',
    pic2: '225px',
    pic3: '225px'
  }
  changeColor = (colorName) => {
    this.setState({
      colorName
    });
  }
  toggleHeight = (pic) => {
    if (pic === 1) {
      this.state.pic1 === '225px' ? this.setState({ pic1: '500px' }) : this.setState({ pic1: '225px' });
    } else if (pic === 2) {
      this.state.pic2 === '225px' ? this.setState({ pic2: '600px' }) : this.setState({ pic2: '225px' });
    } else {
      this.state.pic3 === '225px' ? this.setState({ pic3: '600px' }) : this.setState({ pic3: '225px' });
    }
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
        <Art
          pic1={this.state.pic1}
          pic2={this.state.pic2}
          pic3={this.state.pic3}
          toggleHeight={this.toggleHeight}
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
