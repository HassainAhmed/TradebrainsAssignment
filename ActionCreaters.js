export const addStockToWatchlist = (symbol,name) => {
  return (dispatch) => {
  dispatch({
  type: "addStockToWatchlist",
  payload: symbol,name
  });
  };
  };
  
  export const removeStockFromWatchlist = (symbol,name) => {
  return (dispatch) => {
  dispatch({
  type: "removeStockFromWatchlist",
  payload: Symbol,name
  });
  };
  };