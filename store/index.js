import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: "hell"
      };
    },

    mutations: {
      updateMessage: function(state) {
        state.message = "aaaa";
      }
    }
  });
};

export default createStore;
