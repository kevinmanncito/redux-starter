import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLink, removeLink } from '../actions/link';
import Header from '../components/Header';
import Link from '../components/Link';
import AddLinkForm from '../components/AddLinkForm';
import style from '../sass/main.scss';

import { getLinks } from '../reducers'
// or you could import from ../reducers/links and remove the export getLinks from reducer/index.js

// Alway go with stateless components if you can. React can make a lot performance improvements.
// If you need state, then try and keep it as isolated as posible. So if you're header had a drop down or something,
// keep the state in the header component.
const App = ({ dispatch, links, addLink, removeLink }) => (
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


// I like to move the connecting out into a different file that lives right along side of this file. So what i would
// end up with, is instead of a App.jsx, i would have an 'app' directory with 'app.js' and 'app.connect.js'

const mapStateToProps = state => (
  {
    // Call get Links and pass it a ref to state and let it do its thing. You now have links from state
    links: getLinks(state)
  }
);

// Use this form of way to link actions to dispatch. Much easier in the long run
const mapDispatchToProps = {
  addLink,
  removeLink
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
