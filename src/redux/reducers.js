import { combineReducers } from 'redux';
import hotelReducer from './hotels';

export default function createReducer() {
  return combineReducers({
    hotels: hotelReducer,
  });
}
