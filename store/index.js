import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: "hell"
      };
    },

    mutations: {
      updateMessage: function(state, payload) {
        console.dir(state);
        state.message = payload;
      }
    }
  });
};

export default createStore;
