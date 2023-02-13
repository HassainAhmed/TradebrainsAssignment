const Work = (state = [], action) => {
  switch (action.type) {
    case "addStockToWatchlist":
      return [...state, action.payload];
    case "removeStockFromWatchlist":
      return state.filter((stock) => {
        return stock.symbol !== action.payload.symbol;
      });
    default:
      return state;
  }
};
export default Work;
