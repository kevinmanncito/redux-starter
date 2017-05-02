import React from 'react';
import PropTypes from 'prop-types';

// Having this doesn't really do anything...
// constructor(props) {
//   super(props);
// }

// This component could easily be a stateless component
const Link = ({ url, label, removeLink, index }) => {

  // This is what "Fat Arrow" syntax is good at! It automatically binds'this'
  const handleClick = (e) => {
    e.preventDefault()
    removeLink(index);
  }

  return (
    <div>
      • <a href={ url } target="_blank">{ label }</a>
      <button onClick={ handleClick }>remove!</button>
    </div>
  );
};

Link.propTypes = {
  removeLink: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default Link;
