export const state = () => ({
  messege: "mojule"
});

export const mutations = {
  updateMessage: function(state, payload) {
    console.log("dddddd");
    state.messege = payload;
  }
};

export const actions = {
  updateMessageAction(context, payload) {
    console.log("adsfsd");
    context.commit("updateMessage", payload);
  }
};
