import * as LinkActionTypes from '../actiontypes/link';

const initialState = {
  links: []
};


export default function Link(state=initialState, action) {
  switch(action.type) {

    case LinkActionTypes.ADD_LINK:
      return {
        links: [
          ...state.links,
          {
            label: action.label,
            url: action.url
          }
        ]
      };

    case LinkActionTypes.REMOVE_LINK:
      return {
        links: [
          ...state.links.slice(0, action.index),
          ...state.links.slice(action.index + 1)
        ]
      };

    default:
      return state;
  }
}

// The state that is passed in is now a refrenece to the state that exists in this file only.
// This is a very simple example where just return links on the state, but hopefully you can see how
// this could be usefull if the state was more complicated.
export const getLinks = (state) => state.links
