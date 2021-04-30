export const setWithdrawalAmount = (amount) => {
  return {
    type: `WITHDRAW_MONEY`,
    payload: amount,
  };
};
