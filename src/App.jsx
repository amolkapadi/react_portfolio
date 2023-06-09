import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Navbar from './components/common/Navbar';
import Blog from './components/pages/blog/Blog';

function App() {
  return (
   <Fragment>
    <Navbar />
      <Blog />
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
   </Fragment>
  );
}

export default App;
