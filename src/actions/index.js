import axios from 'axios';

export const fetchCoins = () => async dispatch => {
  const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=50';
  const res = await axios.get(url);

  dispatch({
    type: 'fetch_coins',
    payload: res.data
  });
}
