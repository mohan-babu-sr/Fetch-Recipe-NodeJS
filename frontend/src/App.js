import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateRecipe from './components/CreateRecipe';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path='/create'>
          <CreateRecipe />
        </Route>
      </Router>
    </div>
  );
}

export default App;
