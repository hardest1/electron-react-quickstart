import React from 'react';
import './App.css';

import Electron from './services/Electron'


class App extends React.Component {

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>
          <b>Electron Boilerplate</b>
        </p>
        <p>
          Environment:<br/>
          { 
            Electron.isElectronEnv ? (
              <span style={{ color: '#01FF70' }}>✔ Electron </span>
            ) : (
              <span style={{ color: '#FF4136' }}>✘ Not Electron</span>
            )
          }
        </p>
        <a
          className="App-link"
          href="https://github.com/hardest1/electron-react-quickstart"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </header>
    </div>
    );
  }
}

export default App;
