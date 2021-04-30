export default (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case `WITHDRAW_MONEY`:
      return {
        ...state,
        totalAmount: state.totalAmount - action.payload,
      };
    default:
      return state;
  }
};
