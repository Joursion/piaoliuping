import { createStore } from 'redux'
import reducers from '../reducer'

module.exports = createStore(reducers)