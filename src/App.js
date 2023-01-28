import logo from './logo.svg';
import './App.css';
import Stars from './components/Stars';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
import Review from './components/Review';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
function App() {
  return (
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
  );
}

export default App;
