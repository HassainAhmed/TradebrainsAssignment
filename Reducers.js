import { ActionTypes } from "./ActionTypes";

const initialState={
   symbol:[{
      id:1,
      title:"hassain",

   }],
}
  const Work = (state=initialState , {type,payload}) => {
   switch (type.payload) {
     case  ActionTypes.ADD_STOCK_TO_WATCHLIST:
       return {...state,payload};
     case ActionTypes.REMOVE_STOCK_FROM_WATCHLIST:
       return state.filter((stock) => {
         return stock.symbol !== type.payload.symbol;
       });
     default:
       return state;
   }
 };
 export default Work;
  
