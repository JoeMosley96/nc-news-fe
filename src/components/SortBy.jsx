import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function SortBy({sort_by}) {
  const sortByQueries = [
    ["Date of publication", "created_at"],
    ["Number of comments", "comment_count"],
    ["Number of votes", "votes"],
  ];
  const orderQueries = [
    ["Ascending", "asc"],
    ["Descending", "desc"],
  ];
  const { topic_slug } = useParams();
//   const [chosenSortBy, setChosenSortBy] = useState()

  return (
    <Navbar expand="lg" bg="danger" variant="dark" className="text-light justify-content-start">
      <Container className="me-auto">
      {/* <Navbar.Toggle
          aria-controls="basic-navbar-nav"
        /> */}
       
          <NavDropdown
          className="spacing"
            key="sortByDropdown"
            title="Sort By"
          >
            {sortByQueries.map((sortByQuery, index) => {
              return (
                <NavDropdown.Item
                  key={sortByQuery}
                //   onClick = {()=>{setChosenSortBy(sortByQuery[1])}}
                  href={
                    topic_slug
                      ? `/topics/${topic_slug}?sort_by=${sortByQuery[1]}`
                      : `/?sort_by=${sortByQuery[1]}`
                  }
                  
                >
                  {sortByQuery[0]}
                </NavDropdown.Item>
              );
            })}
            </NavDropdown>
            
          <NavDropdown
          className="me-auto spacing"
            key="orderDropdown"
            title="Order"
          >
            {orderQueries.map((orderQuery, index)=>{
                return (
                    <NavDropdown.Item
                    key={index}
                    href={
                        topic_slug && sort_by
                          ? `/topics/${topic_slug}?sort_by=${sort_by}&order=${orderQuery[1]}`
                          : 
                        sort_by
                          ?`/?sort_by=${sort_by}&order=${orderQuery[1]}`
                          :
                        topic_slug
                          ? `/topics/${topic_slug}?order=${orderQuery[1]}`
                          : `?order=${orderQuery[1]}`
                      }
                      >
                        {orderQuery[0]}
                      </NavDropdown.Item>
                )
            })}
          </NavDropdown>
      </Container>
    </Navbar>
  );
}
export default SortBy;
