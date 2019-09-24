import React from "react";

const Navigation = ({ counters }) => {
  console.log("Navigation reder");

  return (
    <div className="container">
      <nav className="navbar navbar-dark-gray bg-gray">
        <a className="navbar-brand" href="#top">
          Navigation
          <span className="badge badge-pill badge-secondary m-1">
            {counters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
