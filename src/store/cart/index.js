export default {
  state: {
    goods: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const idx = state.goods.findIndex(item => item.product.id == product.id);
      if (idx !== -1) {
        let item = state.goods[idx];
        if (item.count < item.product.total) {
          item.count++
        }
      } else {
        state.goods.push({
          count: 1,
          product
        });
      }
    },
    DELETE_FROM_CART(state, product_id) {
        const idx = state.goods.findIndex(item => item.product.id == product_id);
        state.goods.splice(idx, 1);
    },
    INCREASE(state, product_id) {
        const idx = state.goods.findIndex(item => item.product.id == product_id);
        if (idx !== -1) {
          let item = state.goods[idx]
          if (item.count < item.product.total) {
            item.count++
          }
        }
    },
    DECREASE(state, product_id) {
      const idx = state.goods.findIndex(item => item.product.id == product_id);
      if (idx !== -1) {
        let item = state.goods[idx]
        if (item.count > 1) {
          item.count--
        } else {
          state.goods.splice(idx, 1);
        }
      }
    }
  },
  actions: {
    addProductToCart (ctx, product) {
      ctx.commit('ADD_TO_CART', product);
    },
    deleteProductFromCart (ctx, product_id) {
      ctx.commit('DELETE_FROM_CART', product_id);
    },
    increaseProductCount (ctx, product_id) {
      ctx.commit('INCREASE', product_id);
    },
    decreaseProductCount (ctx, product_id) {
      ctx.commit('DECREASE', product_id);
    }

  },
  getters: {
      getCartItems(state) {
          return state.goods;
      },
      getTotalPriceInCart(state) {
          // Рассчет цены всех товаров
          let totalPrice = 0;
          state.goods.forEach(item => {
            totalPrice += item.count * item.product.price;
          });
          return totalPrice;
      }
  }
}
