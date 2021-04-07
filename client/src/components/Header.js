import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        Kayfabe Tracker
        </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Home;