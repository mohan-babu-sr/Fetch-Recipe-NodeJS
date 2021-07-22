import axios from 'axios';
import React from 'react';

const CreateRecipe = () => {
  const handleClick = async event => {
    event.preventDefault();

    axios.post('http://localhost:3001/create');

    console.log('clicked');
  };
  return (
    <div>
      <button onClick={handleClick}>Fetch data</button>
    </div>
  );
};

export default CreateRecipe;
