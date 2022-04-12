import { Button } from 'bootstrap';
import React from 'react';
import { Col, Row, Form, Navbar, 
    Container, Nav, NavDropdown, NavDropdownProps } from "react-bootstrap";
    import './BudgetPlanner.css';

function BudgetPlanner(props) {
    var listItems = [["Shopping", 400], ["Internet", 45]];
    return (
        <div>
            <h1>My Budget Planner</h1>
            
            <Container>
                <Row>
                    <Col className="topMenuItems">Budget: $1000</Col>
                    <Col className="topMenuItems">Remaining: $400</Col>
                    <Col className="topMenuItems">Spent so far: $600</Col>
                </Row>
                <Row>&nbsp;</Row>
                <Row className="expenseArea">
                    <h3>Expenses</h3>
                        <Container>
                            <Row style={{borderTop: "1px solid black"}}>
                                <Col left>Shopping</Col>
                                <Col >$100</Col>
                            </Row>
                            <Row style={{borderTop: "1px solid black"}}>
                                <Col left>Internet</Col>
                                <Col >$40</Col>
                            </Row>
                        </Container>
                </Row>
                <Row>&nbsp;</Row>
                <Row>
                    <h3>Add Expense</h3>
                    <Col>Name <br /><input></input></Col>
                    <Col>Cost <br /><input></input></Col>
                    <Col><button>Add Item</button></Col>
                </Row>
            </Container>
        </div>
    );
}

export default BudgetPlanner;