import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, I’m <strong>Ankon Biswas</strong>. I am a 3rd-year student at Dalhousie University, majoring in 
          <strong> Applied Computer Science</strong>. I’m passionate about <strong>data analytics</strong>, 
          <strong> web development</strong>, and <strong>technology</strong>. 
          Let’s build something awesome together!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/ankonbiswas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
