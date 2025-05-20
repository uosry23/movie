import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useLocation } from "react-router-dom";
import { getSearchMovies } from "./../system/searchformovies";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch, FaUser, FaFilm, FaTv } from "react-icons/fa";

// Create a custom CSS for the header
import "./Header.css";

const Header = () => {
  const { searchmovies } = useSelector((state) => state.serachMovies);
  const dispatch = useDispatch();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(getSearchMovies(value));
  };

  const isActive = (path) => {
    return location.pathname === path ? "active-nav-link" : "";
  };

  return (
    <div className="header-container">
      <Navbar
        expand="lg"
        className={`navbar-custom ${scrolled ? "navbar-scrolled" : ""}`}
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            <span className="brand-text">Movie</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className={isActive("/")}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/movies" className={isActive("/movies")}>
                <FaFilm className="nav-icon" /> Movies
              </Nav.Link>
              <Nav.Link as={Link} to="/series" className={isActive("/series")}>
                <FaTv className="nav-icon" /> Series
              </Nav.Link>
            </Nav>
            <div className="search-section">
              <InputGroup>
                <Form.Control
                  placeholder="Search movies..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="search-input"
                />
                <Button variant="primary" className="search-button">
                  <FaSearch />
                </Button>
              </InputGroup>
            </div>
            <Nav className="ms-auto">
              <Link to="/login">
                <Button variant="outline-light" className="login-button">
                  <FaUser className="me-2" /> Login
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
