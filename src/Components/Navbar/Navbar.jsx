import React, { useState } from 'react';
import './Navbar.css';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu visibility
  const [searchOpen, setSearchOpen] = useState(false); // State for toggling search box visibility
  const [activeLink, setActiveLink] = useState('Home'); // Track the active link

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className='navbar'>
      {/* Hamburger Menu */}
      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation List */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li
          className={activeLink === 'Home' ? 'active' : ''}
          onClick={() => setActiveLink('Home')}
        >
          Home
        </li>
        <li
          className={activeLink === 'About' ? 'active' : ''}
          onClick={() => setActiveLink('About')}
        >
          About
        </li>
        <li
          className={activeLink === 'Product' ? 'active' : ''}
          onClick={() => setActiveLink('Product')}
        >
          Product
        </li>
        <li
          className={activeLink === 'Contact' ? 'active' : ''}
          onClick={() => setActiveLink('Contact')}
        >
          Contact
        </li>
      </ul>

      {/* Search Box */}
      <div className={`search-box ${searchOpen ? 'open' : ''}`}>
        <input type="text" placeholder='Search' />
        <img
          src={theme === 'light' ? search_icon_light : search_icon_dark}
          alt="Search"
          onClick={() => setSearchOpen(!searchOpen)} // Toggle search box visibility
        />
      </div>

      {/* Theme Toggle */}
      <img
        onClick={toggle_mode}
        src={theme === 'light' ? toggle_light : toggle_dark}
        alt="Toggle Theme"
        className='toggle-icon'
      />
      
    </div>
  );
};

export default Navbar;
