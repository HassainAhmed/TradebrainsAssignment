import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addStockToWatchlist } from './state/ActionCreater/ActionCreater'
const Home = ({ stocks }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [companies, setCompanies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=ZYULLW81LDM7GT04`
        );
        const data = response.data;
        setCompanies(data['bestMatches'] || []);
      } catch (error) {
        console.error(error);
      }
    };
    
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);
  

  return (
    <div>
      <h1></h1>
      <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
      <ul>
        {companies.map((company) => (
          <li key={company['1. symbol']}>
            {company['2. name']} ({company['1. symbol']})
            <button className="btn btn-success"onClick={() => {
            dispatch(addStockToWatchlist(company['1. symbol'], company['2. name']))
            
            }}>
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stocks: state.symbol,
  };
};

export default connect(mapStateToProps)(Home);
