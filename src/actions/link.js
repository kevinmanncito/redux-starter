import * as LinkActionTypes from '../actiontypes/link';


export const addLink = (label, url) => {
  return {
    type: LinkActionTypes.ADD_LINK,
    label,
    url
  };
};

export const removeLink = index => {
  return {
    type: LinkActionTypes.REMOVE_LINK,
    index
  };
};
