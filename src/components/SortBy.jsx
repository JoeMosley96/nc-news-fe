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
    <Navbar expand="lg" className="navigation">
      <Container className="navigation">
        <Nav>
          <NavDropdown
            key="sortByDropdown"
            title={<span className="text-white">Sort By</span>}
            id="basic-nav-dropdown"
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
            key="sortByDropdown"
            title={<span className="text-white">Order</span>}
            id="basic-nav-dropdown"
          >
            {orderQueries.map((orderQuery)=>{
                return (
                    <NavDropdown.Item
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
        </Nav>
      </Container>
    </Navbar>
  );
}
export default SortBy;
