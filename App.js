import React from 'react';
import { BrowserRouter as Router, 
  Routes, Route,  } from 'react-router-dom';
import Home from './Home';
import Watchlist from './Watchlist';
import Header from './Header';


const App = () => {
  return (
    <div>
    
      <Router>
      <Header />
      <Routes>
      <Route  path="/Home" element={<Home></Home>} />
      <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
    </Router>
    
    </div>
  );
};

export default App;
