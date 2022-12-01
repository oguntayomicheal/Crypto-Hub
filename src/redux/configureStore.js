import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { prodReducer } from './Data/Data';
// import coinReducer from './Data/CoinDetails';

const reducer = combineReducers({
  data: prodReducer,
});

const store = configureStore(
  {
    reducer,
  },
  applyMiddleware(thunk),
);

export default store;
