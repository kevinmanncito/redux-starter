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
