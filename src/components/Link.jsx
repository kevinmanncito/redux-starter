import React from 'react';
import PropTypes from 'prop-types';


class Link extends React.Component {

  constructor(props) {
    super(props);
  }

  buttonClicked(e) {
    e.preventDefault();
    this.props.removeLink(this.props.index);
  }

  render() {
    return (
      <div>
        • <a href={ this.props.url } target="_blank">{ this.props.label }</a>
        <button onClick={ this.buttonClicked.bind(this) }>remove!</button>
      </div>
    );
  }
};

Link.propTypes = {
  removeLink: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Link;
