import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
const Header = (props) => {
  return (
    <nav className="navbar  header">
      <div className="container-fluid">
        <img
          src=".\src\img\logo.svg"
          alt="Logo"
          className="d-inline-block align-top"
        />

        <form className="d-flex  " role="search">
          <input
            className="form-control   "
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => {
              props.handleChangeSearch(event.target.value);
            }}
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
