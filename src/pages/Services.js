import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <nav>
        <NavLink to="design" activeClassName="active">Design</NavLink>
        <NavLink to="development" activeClassName="active">Development</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Services;
