import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../img/logo/logo.svg';
import './header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <Link to="/" className="header_logo">
            <img src={logo} alt="iDo" />
            <span>iDo</span>
          </Link>
          <div className="header_menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? (
                <>
                <div className="menu-icon-bar cross"></div>
                <div className="menu-icon-bar -cross"></div>
                </>
            ) : (
                <>
                <div className="menu-icon-bar"></div>
                <div className="menu-icon-bar"></div>
                <div className="menu-icon-bar"></div>
                </>
            )}
            </div>
          <nav className={`header_nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
              <li><Link to="/documents" onClick={closeMenu}>Documents</Link></li>
              <li><Link to="/contacts" onClick={closeMenu}>Contacts</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
