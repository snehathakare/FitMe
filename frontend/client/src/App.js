import './App.css';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FIT ME</h1>
        <Login />
        <p>list of all food entries(show only if login success)</p>
        <Home />
      </header>
    </div>
  );
}

export default App;
