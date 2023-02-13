import { createStore,applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './CombinedReducers'

const store = createStore( rootReducers,combineReducers,applyMiddleware(thunk));

export default store;
