import { createStore,applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './Reducers/CombinedReducers'

const store = createStore( rootReducers,combineReducers,applyMiddleware(thunk));

export default store;
