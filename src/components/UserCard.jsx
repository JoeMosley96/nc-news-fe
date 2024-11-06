import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { CardHeader } from "react-bootstrap";

function UserCard({ user }) {
 
  return (
    <li className="userCard">
      <Card>
        <Card.Header>
        <Card.Title>
          <a 
          href={`/users/${user.username}`}
          class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                {user.username}

          </a>
          </Card.Title>
        
        </Card.Header>
        <Card.Img src={user.avatar_url} className="user-img-top"/>
       
      </Card>
    </li>
  );
}

export default UserCard;