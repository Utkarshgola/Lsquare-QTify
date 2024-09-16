import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import Section2 from './components/Section2/Section2';


function App() {
  
  return (
    <>
  
    <Navbar />
    <Hero />
    <Section />
    <Section2 />
    <Section songsSection={true}/>
    
    
    
    </>
  );
}

export default App;


{/* <div className="App">
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
          Learn React with me
        </a>
      </header>
    </div> */}