export default (state = [], action) => {
  switch (action.type) {
    case 'fetch_coins':
      return action.payload;
    default:
      return state;
  };
}
