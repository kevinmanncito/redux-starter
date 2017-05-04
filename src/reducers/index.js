import { combineReducers, createStore } from 'redux'
import links, * as fromLink from './link' // Import all the selectors
// ... import all your reducers here

const reducers = combineReducers({
  links,
  // ... Put all aditional reducers here
})

// before you create the store you can add middleware here and keep your main index file clean ;)

const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension()
);


export default store

// We call getLinks from the 'fromLink' reducer file and pass it a reference to the part of state
// that links exists at
export const getLinks = (state) => fromLink.getLinks(state.links)
