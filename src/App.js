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
import FavoriteColorCheck from './component/FavoriteColorCheck';
// import Posts from './component/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  // console.log('Inside UI');
  const counter = useSelector(state=>state);
  const dispatch=useDispatch();
  const myStyle={
    backgroundColor: '#121723', 
    height:'100vh',
    color: '#9A7878'
  };
  const containerStyle={
    backgroundColor: '#29290B', 
    width: 'auto',
    height:'60px',
    marginBottom: '10px',
    color: '#9A9A78',
  };
  return (
    <div className="App" style={myStyle}>
      {/* <Posts /> */}
      <Router>
          <Container fluid style={containerStyle}>
            <Navbar className="navigation" fixed="top" expand="lg" >
            <Navbar.Brand href="/reduxhome" style={{color:"white", paddingLeft:"10px"}}>Rick React</Navbar.Brand>
            <NavDropdown title="Assignments" id="basic-nav-dropdown">
           
            <NavDropdown.Item><Link to="/favecolor">Favorite Color</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/favecolorcheck">Favorite Color Checkboxes</Link></NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto">
            
                
              </Nav>
            </Navbar.Collapse>
       
            </Navbar>
            
          </Container>
          
          <Routes>
            <Route path="/" element={<ReduxHome />} />
            <Route path="/favecolor" element={<FavoriteColor />} />
            <Route path="/favecolorcheck" element={<FavoriteColorCheck />} />
            <Route path="/about" element={<About />} />
 
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
