import React from 'react';
import './header.css';

export default class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <h1>Mac Peters</h1>
        <h2>www.macpeters.com</h2>
        <hr />
      </div>
    )
  }
}