import { combineReducers } from 'redux';
import CoinList from './CoinListReducer';

export default combineReducers({
  coins: CoinList
});
