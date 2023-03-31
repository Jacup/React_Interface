import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import Name from './components/Name'
import Album from './components/Album'
import Group from './components/Group'
import Counter from './components/Counter'

function App() {
  const name = 'Jakub'
  return (
    <div className="App">
      <HelloWorld name={'World'} />
      <Name name={name} />
      <Group />
      <Album />
      <Counter />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edytuj <code>src/App.js</code> and save to reload.
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
  );
}

export default App;
