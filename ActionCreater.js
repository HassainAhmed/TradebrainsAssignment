   import { ActionTypes } from "./ActionTypes";
 export   const  addStockToWatchlist = (Symbol,Name) => {
    return {
       type:ActionTypes.ADD_STOCK_TO_WATCHLIST,
       payload:Symbol,Name
    }
  }
 export   const  removeStockFromWatchlist = (Symbol,Name) => {
  return {
    type :ActionTypes.REMOVE_STOCK_FROM_WATCHLIST,
    payload:Symbol,Name
  }
 }