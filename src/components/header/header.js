import React from 'react';
import './header.css';
import logoImage from '../../images/logo.png';

export default class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <div class="logo">
          <img className="header-logo" src={logoImage} alt="logo" />
        </div>
        <div className="header-text">
          <h1>Maryanne (Mac) Peters</h1>
          <h2>www.macpeters.com</h2>
        </div>
      </div>
    )
  }
}