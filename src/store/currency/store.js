export default {
  state: {
    coefficent: 75,
    currencyCoefInc: false,
    currencyCoefDec: false,
  },
  mutations: {
    UPDATE_COEFF(state, coeff) {
      if (coeff < state.coefficent) {
        state.currencyCoefInc = false;
        state.currencyCoefDec = true;
      } else if (coeff > state.coefficent) {
        state.currencyCoefInc = true;
        state.currencyCoefDec = false;
      } else if (coeff == state.coefficent) {
        state.currencyCoefInc = false;
        state.currencyCoefDec = false;
      }

      state.coefficent = (coeff > 0) ? coeff : state.coefficent;
    }
  },
  actions: {
    updateCoeff(ctx, value) {
      ctx.commit('UPDATE_COEFF', value);
    },
    randCoeff(ctx, range) {
      let randCoeff = Math.floor(Math.random() * range);
      ctx.commit('UPDATE_COEFF', randCoeff);
    }
  },
  getters: {
    getCoeff(state) {
      return state.coefficent;
    },
    isIncrease(state) {
      return state.currencyCoefInc;
    },
    isDecrease(state) {
      return state.currencyCoefDec;
    }
  }
}
