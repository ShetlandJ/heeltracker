import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { createBrowserHistory } from 'history'

function App() {
  return (
    <div className="App">
      <Router history={createBrowserHistory}>
        <Header />

        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Router>

    </div>
  );
}

export default App;
