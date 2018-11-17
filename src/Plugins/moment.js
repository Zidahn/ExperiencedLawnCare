import Vue from 'vue'
import Moment from 'moment'

Vue.prototype.moment = Moment
Vue.use(Moment)
  
export default new Moment()