const Work = (state = [], action) => {
  switch (action.type) {
    case "ADD_STOCK_TO_WATCHLIST":
      return [...state, action.payload];
    case "REMOVE_STOCK_FROM_WATCHLIST":
      return state.filter((stock) => {
        return stock.symbol !== action.payload.symbol;
      });
    default:
      return state;
  }
};
export default Work;
