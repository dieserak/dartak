export const state = () => ({
  amountPlayers: 2,
  score: 501,
  checkout: "d"
});

export const mutations = {
  setAmountPlayers(state, amount) {
    state.amountPlayers = amount;
  },
  setScore(state, score){
      state.score = score
  },
  setCheckout(state, checkout){
      state.checkout = checkout
  }
};
