import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import History from '../pages/History';
import Login from '../pages/Login';
import Home from '../pages/Home';

export const HomeNavBar = () => {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>Slightly Impulsive</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/history"}>Past Purchase</Nav.Link>
              </Nav>
              <Nav className = "d-inline-flex justify-content-end">
                <Button as={Link} to={"/login"}>Sign In/Up</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/history" element = {<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default HomeNavBar;