import React from 'react';
import { BrowserRouter as Router, 
  Routes, Route,  } from 'react-router-dom';
import Home from './Home';
import Watchlist from './Watchlist';
import Header from './Header';
import { Provider } from 'react-redux';
import store from './State/Store';


const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Router>
      <Header />
      <Routes>
      <Route exact path="/Home" element={<Home ></Home>} />
      <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
    </Router>
    </Provider>
    </div>
  );
};

export default App;
