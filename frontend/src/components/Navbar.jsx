import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h4>
        <Link to='/create'>Create Recipe</Link>
      </h4>
    </div>
  );
};

export default Navbar;
