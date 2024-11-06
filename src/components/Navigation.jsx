import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useEffect, useState } from "react";

function Navigation({ topics }) {
  return (
    <Navbar expand="lg" bg="danger" variant="dark">
      <Container >
        <Navbar.Brand  href="/">
          <h1>JM News</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/users">
              Users
            </Nav.Link>
            <NavDropdown 
              key= "navDropdown"
              title="Topics"
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
