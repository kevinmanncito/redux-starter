import { combineReducers, createStore } from 'redux'
import linkReducer from './link'
// ... import all your reducers here

const reducers = combineReducers({
  linkReducer,
  // ... Put all aditional reducers here
})

// before you create the store you can add middleware here and keep your main index file clean ;)

const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension()
);


export default store
