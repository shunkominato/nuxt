import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: "hell"
      };
    }
  });
};

export default createStore;
