import Vuex from 'vuex'
import Vue from 'vue';
import Users from '@/Store/Modules/users';

Vue.use(Vuex);

export default new Vuex.Store({ 
  modules: {
    users: Users
  },
  state: {
    title: 'Experienced Lawn Care LLC.'
  }
})