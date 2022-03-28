import './App.css';
import { useSelector } from 'react-redux';
// import {increment} from './action/CounterAction';
// import {decrement} from './action/CounterAction';
import {useDispatch} from 'react-redux';
// import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import {HashRouter as Router, Link, Routes, Route} from 'react-router-dom';
import { Col, Row, Form, Navbar, 
  Container, Nav, NavDropdown, NavDropdownProps } from "react-bootstrap";
import RouteError from './RouteError';
import Redirect from './Redirect';
import ReduxHome from './component/ReduxHome';
import About from './component/About';
import FavoriteColor from './component/FavoriteColor';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // console.log('Inside UI');
  const counter = useSelector(state=>state);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <Router>
          <Container>
            <Navbar className="navigation" fixed="top" expand="lg" >
            <Navbar.Brand href="/reduxhome">Rick React</Navbar.Brand>
            <NavDropdown title="Assignments" id="basic-nav-dropdown">
            {/* <NavDropdown.Item><Link to="/reduxhome">Home</Link></NavDropdown.Item> */}
            <NavDropdown.Item><Link to="/favecolor">Favorite Color</Link></NavDropdown.Item>
              {/* <NavDropdown.Item><Link to="/calculator">Calculator</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/reactlayout">React Layout</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/nbrlist">Number List</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/loginform">Login Form</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/githubext">My Github React</Link></NavDropdown.Item> */}
          
            </NavDropdown>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto">
            
                
              </Nav>
            </Navbar.Collapse>
       
            </Navbar>
            
          </Container>
          
          <Routes>
            <Route path="/" element={<ReduxHome />} />
            <Route path="/favecolor" element={<FavoriteColor />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/" element={<Home />} />
            
            <Route path="/profile" element={<Profile />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/nbrlist" element={<NumberList />} />
            <Route path="/reactlayout" element={<ParentToChild />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/loginValidate" element={<LoginValidate />} /> */}
            {/* <Route path="/dynamiccontent" element={<DynamicContent />} /> */}
 
            <Route path="/githubext" element={() => { 
              window.open("https://github.com/RickF71/react-code");
              // window.location.href = 'https://github.com/RickF71/react-code'; 
              // return null;
              }}/>
            <Route path="*" element={<RouteError />} />
          </Routes>
          <Redirect />
        </Router>
    
          
      {/* <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button> */}
    </div>
  );
}

export default App;
