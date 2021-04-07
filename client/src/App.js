import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Wrestlers from './pages/Wrestlers';
import { Jumbotron, Container } from 'react-bootstrap';
import { createBrowserHistory } from 'history'

function App() {
  return (
    <div className="app">
      <Router history={createBrowserHistory}>
        <Header />

        <Jumbotron fluid className="page-container">
          <Container>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/:promotion/wrestlers' component={Wrestlers} />
          </Container>
        </Jumbotron>
      </Router>

    </div>
  );
}

export default App;
