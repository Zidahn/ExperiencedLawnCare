export default ({ 
  state: {
    name: 'Kevin'
  },
  getters: {
    getUserName: (state) => {
      return state.name;
    }
  }
})