import React from 'react';
import PropTypes from 'prop-types';


class AddLinkForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      label: '',
      url: ''
    };
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.addLink(this.state.label, this.state.url);
    this.setState({
      label: '',
      url: ''
    });
  }

  labelChanged(e) {
    const newText = e.target.value;
    this.setState({label: newText});
  }

  urlChanged(e) {
    const newText = e.target.value;
    this.setState({url: newText});
  }

  render() {
    return (
      <form onSubmit={this.formSubmit.bind(this)}>
        <input 
          type="text" 
          placeholder="label" 
          value={this.state.label} 
          onChange={this.labelChanged.bind(this)} />
        <input 
          type="text" 
          placeholder="url" 
          value={this.state.url} 
          onChange={this.urlChanged.bind(this)} />
        <button type="submit">Add link</button>
      </form>
    );
  }
};

AddLinkForm.propTypes = {
  addLink: PropTypes.func.isRequired
};

export default AddLinkForm;
