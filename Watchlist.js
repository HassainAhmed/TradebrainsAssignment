import React, { useState, useEffect } from 'react';
import { connect, } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {removeStockFromWatchlist} from './state/ActionCreater/ActionCreater'
const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);


  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const symbols = ['TCS', 'TATA-MOTORS', 'TATA-STEEL', 'TATA-POWER'];
      const promises = symbols.map((symbol) =>
        axios.get(
 `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=ZYULLW81LDM7GT04`
        )
      );
          
      try {
        const responses = await Promise.all(promises);
        const data = responses.map((response) => {
          return response.data['bestMatches'] || [];

        });
        setWatchlist(data.flat());
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Watchlist</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map((stock) => (
            <tr key={stock['1. symbol']}>
              <td>{stock['1. symbol']}</td>
              <td>{stock['2. name']}</td>
              <td>N/A</td>
              <td>
                {<button
                onClick={
                (name,symbol) => {
        return dispatch (removeStockFromWatchlist(stock['1.symbol'],stock['2.name']))

      }} > Remove
                </button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default connect()(Watchlist);
