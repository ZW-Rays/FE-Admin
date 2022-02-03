import React from 'react';
import style from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
  <div className={style['navbar']}>
    <div className={style['navbar-container']}>
      <div className={style['navbar-left']}>
        <FontAwesomeIcon icon={faBars} fixedWidth className={style['navbar-icon']}/>
        <h1 className="f-6">LOGO</h1>
      </div>
      <div className={style['navbar-right']}>
        <div className={style['navbar-dropdown']}>
          <button className={style['navbar-dropdown-btn']}>
            <FontAwesomeIcon icon={faUser} size='2x'/>
          </button>
        </div>
      </div>
    </div>
  </div>);
}
