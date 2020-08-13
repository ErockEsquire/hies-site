import serviceReducer from './serviceReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  service: serviceReducer
})

export default allReducers;