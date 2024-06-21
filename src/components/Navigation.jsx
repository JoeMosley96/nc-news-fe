import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useEffect, useState } from "react";

function Navigation({ topics }) {
  return (
    <Navbar expand="lg" className="navigation">
      <Container className="navigation">
        <Navbar.Brand className="text-white" href="#home">
          <h1>NC News</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-white"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="text-white" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="/users">
              Users
            </Nav.Link>
            <NavDropdown 
              key= "navDropdown"
              title={<span className="text-white">Topics</span>}
              id="basic-nav-dropdown"
            >
              {topics.map((topic, index) => {
                const capitalisedSlug =
                  topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1);
                return (
                    <NavDropdown.Item
                      href={`/topics/${topic.slug}`}
                      key={topic.slug}>
                      {capitalisedSlug}
                    </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
