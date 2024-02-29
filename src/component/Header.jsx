import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { getSearchMovies } from "./../system/searchformovies";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Header = () => {
  const { searchmovies } = useSelector((state) => state.serachMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(searchmovies);
    // dispatch(getSearchMovies());
  }, []);
  return (
    <div className="bg bg-black  w-100  ">
      <Navbar
        expand="lg"
        className="bg-dark d-flex justify-content-evenly rounded-5 me-3 ms-3"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand>React-Movie</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 ">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/movies"}>
                Movies
              </Nav.Link>
              <Nav.Link as={Link} to={"/series"}>
                {" "}
                Series
              </Nav.Link>
              <Nav.Link>Contact US</Nav.Link>
            </Nav>
            <Nav className="ms-auto  d-flex justify-content-between w-100 ">
              <div className="d-flex justify-content-between w-100   ">
                <div className="container ">
                  <div className=" justify-content-between ml-auto ">
                    <input
                      type="text"
                      className="bg-light rounded text-black mx-2 p-1"
                      placeholder="Enter movie name"
                      onChange={(e) =>
                        dispatch(getSearchMovies(e.target.value))
                      }
                    />

                    <Button variant="outline-warning" className="me-2 mx-2 ">
                      search
                    </Button>
                    <Button variant="outline-danger" className="me-2 mx-2 ">
                      searchSeries
                    </Button>
                    <Link to={"/login"} className="mx-2">
                      <Button variant="outline-info" className="me-2 ">
                        login
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
