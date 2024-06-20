import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { CardHeader } from "react-bootstrap";

function UserCard({ user }) {
 
  return (
    <li className="userCard">
      <Card>
        <Card.Img variant="top" src={user.avatar_url} />
        <Card.Body>
          <Card.Title>
                {user.username}
          </Card.Title>
          <Card.Text>{user.name}</Card.Text>
        </Card.Body>
      </Card>
    </li>
  );
}

export default UserCard;