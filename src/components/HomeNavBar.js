import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./HomeNavBar.css";
import Logo from "../assets/logo-new.png";
import HistoryLogo from "../assets/history-logo-outline.png";
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import History from '../pages/History';
import Home from '../pages/Home';

export const HomeNavBar = ({cookie}) => {

  return (
    <Router>
      <div style={{fontFamily: 'Niramit'}}>
        <Navbar className="navbar" bg="light" expand="lg" sticky="top">
          <Container fluid className ="px-5 mx-5">
            <Navbar.Brand as={Link} to={"/"}>
              <img
                alt=""
                src={Logo}
                width="100%"
                height="100px"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'> */}
              <Nav className="justify-content-end">
                  <Nav.Link as={Link} to={"/history"} className="d-flex">
                    {/* <Row className="d-inline-flex"> */}
                      {/* <Col className="d-none d-lg-block p-0"> */}
                        <img
                          alt=""
                          src={HistoryLogo}
                          width="50%"
                          height="100px"
                          className="d-inline-block align-top justify-content-end"
                        />
                      {/* </Col>
                      <Col className="align-self-center flex-start"> */}
                        <p className="align-self-center pt-3" style={{fontWeight: 'lighter', maxWidth:'140px'}}>
                          User History
                        </p>
                      {/* </Col>
                    </Row> */}
                  </Nav.Link>
              </Nav>
            {/* </Navbar.Collapse> */}
          </Container>
        </Navbar>
        <Routes>
          <Route path="/history" element = {<History cookie={cookie} />} />
          <Route path="/" element={<Home cookie={cookie}/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default HomeNavBar;