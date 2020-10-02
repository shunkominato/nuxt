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
    },

    actions: {
      updateMessageAction(context, payload) {
        console.log("-----------------");
        console.log(context);
        console.log("-----------------");
        context.commit("updateMessage", payload);
      }
    }
  });
};

export default createStore;
