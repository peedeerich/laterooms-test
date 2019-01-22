import { combineReducers } from 'redux';
import hotelReducer from './hotels';
import displayReducer from './display';

export default function createReducer() {
  return combineReducers({
    hotels: hotelReducer,
    display: displayReducer,
  });
}
