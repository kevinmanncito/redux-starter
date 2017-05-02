import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as LinkActionCreators from '../actions/link';
import Header from '../components/Header';
import Link from '../components/Link';
import AddLinkForm from '../components/AddLinkForm';
import style from '../sass/main.scss';


class App extends Component {
  render () {

    const { dispatch, links } = this.props;
    const addLink = bindActionCreators(LinkActionCreators.addLink, dispatch);
    const removeLink = bindActionCreators(LinkActionCreators.removeLink, dispatch);

    return (
      <div>
        <Header title={'List of links (with redux)'}/>
        <AddLinkForm addLink={addLink} />
        {links.map((link, index) => 
          <Link 
            label={link.label} 
            url={link.url}
            key={link.label}
            index={index}
            removeLink={removeLink} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    links: state.links
  }
);

export default connect(mapStateToProps)(App);
