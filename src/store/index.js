import Vue from "vue";
import Vuex  from 'vuex';

import goods from './goods';
import cart from './cart';
import currency from './currency/store.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { goods, cart, currency }
})
