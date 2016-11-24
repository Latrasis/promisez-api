export const state = {
  profile: {
    name: 'Bob'
  },
  contacts: [
    {name: 'Alice'},
    {name: 'Eve'}
  ],
  promiselist: {}
};

export const mutations = {
  addPromise: (state, {id, promise}) => state.promiseList[id] = promise,
  addContact: (state, {id, contact}) => state.contacts[id] = contact
};

export const actions = {
  createPromise({ state, commit }, promise) {
    commit('addPromise', promise.description+promise.assignee, promise)
  }
}
