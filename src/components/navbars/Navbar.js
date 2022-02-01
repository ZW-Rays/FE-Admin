import React from 'react';
import style from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
  <div className={style['navbar']}>

    <h1 className="f-10">LOGO</h1>
    <div className={style['navbar-profile']}>
      <FontAwesomeIcon icon={faUser} size='4x'/>
    </div>

  </div>);
}
