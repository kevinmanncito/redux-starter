import React from 'react';
import PropTypes from 'prop-types';


const Header = props => {
  return (
    <header className="header">
      <h1>List of Links (with redux):</h1>
    </header>
  );
}

Header.PropTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
