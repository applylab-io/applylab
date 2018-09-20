import React, { Component } from 'react';
import logo from './applylab_io_logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFlask, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faFlask, faCodeBranch)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">pplylab.io</h1>
          <div className="Promotion">
            <h3>INNOVATION</h3>
            <h3>DIGITAL SOLUTIONS</h3>
            <h3>OPEN SOURCE</h3>
          </div>
        </header>
        <p className="App-intro">
          Please write to <a href="mailto:info@applylab.io">info@applylab.io</a> for your digital solutions needs.
        </p>
        <p>
          <FontAwesomeIcon icon="code-branch" size="2x" className="Bubble-animation"/>
          <FontAwesomeIcon icon="code-branch" size="2x" className="Bubble-animation"/>
          <FontAwesomeIcon icon="code-branch" size="2x" className="Bubble-animation"/>
        </p>
        <p>
          <FontAwesomeIcon icon="flask" size="9x" className="Flask-animation"/>
        </p>
        <p>
          <h3>BUILD THE FUTURE</h3>
        </p>
      </div>
    );
  }
}

export default App;
