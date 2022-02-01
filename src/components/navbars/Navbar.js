import React from 'react';
import style from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Container from 'components/containers/Container'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
  <div className={style['navbar']}>
    <Container className={style['navbar-container']}>
    <h1 className="f-6">LOGO</h1>
    <div className={style['navbar-dropdown']}>
      <button className={style['navbar-dropdown-btn']}>
        <FontAwesomeIcon icon={faUser} size='2x'/>
      </button>
      <div className={style['navbar-dropdown-content']}>
        <Link to={}>Detail Profile</Link>
        <Link to={}>Log Out</Link>
      </div>
    </div>

    </Container>
  </div>);
}
