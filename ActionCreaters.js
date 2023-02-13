export const ="ADD_STOCK_TO_WATCHLIST";
export const addStockToWatchlist = (symbol,name) => {
  return (dispatch) => {
  dispatch({
  type: "ADD_STOCK_TO_WATCHLIST",
  payload: symbol,name
  });
  };
  };
  
  export const ="REMOVE_STOCK_FROM_WATCHLIST";
 
export const removeStockFromWatchlist = (symbol,name) => {
  return (dispatch) => {
  dispatch({
  type: "REMOVE_STOCK_FROM_WATCHLIST",
  payload: Symbol,name
  });
  };
  };
