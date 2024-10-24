import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <div>
    <div className="home-container">
      <h1>Welcome to Innomatics Research Labs</h1>
      </div>
      <nav>
        <NavLink to="/" exact activeClassName="active">Home</NavLink> | 
        <NavLink to="/about" activeClassName="active">About</NavLink> | 
        <NavLink to="/services" activeClassName="active">Services</NavLink> | 
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Home;
