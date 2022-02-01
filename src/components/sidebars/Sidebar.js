import React from 'react';
import Style from './Sidebar.module.css'
import appendClass from 'utils/class'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faScroll, faCubes, faBox, faPassport, faTruckLoading, faBarcode, faBars} from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
    <div className={Style['sidebar']}>
        <div className={Style['sidebar-menu']}>
            <div className={appendClass(Style['sidebar-content'], Style['sidebar-content-active'])}>
                <FontAwesomeIcon icon={faTachometerAlt} fixedWidth color="white"/>
                <a href="#">HOME</a>
            </div>
            <div className={Style['sidebar-content']}>
                <FontAwesomeIcon icon={faScroll} fixedWidth color="white"/>
                <a href="#">Purchase Order</a>
                </div>
            <div className={Style['sidebar-content']}>
                <FontAwesomeIcon icon={faCubes} fixedWidth color="white"/>
                <a href="#">Packing</a>
            </div>
            <div className={Style['sidebar-content']}>
                <FontAwesomeIcon icon={faBox} fixedWidth color="white"/>
                <a href="#">Product</a>
            </div>
            <div className={Style['sidebar-content']}>
                <FontAwesomeIcon icon={faPassport} fixedWidth color="white"/>
                <a href="#">Travel Document</a></div>
            <div className={Style['sidebar-content']}>
                <FontAwesomeIcon icon={faTruckLoading} fixedWidth color="white"/>
                <a href="#">Production</a>
            </div>
            <div className={Style['sidebar-content']}>
                <FontAwesomeIcon icon={faBarcode} fixedWidth color="white"/>
                <a href="#">Scan Out</a>
            </div>
            <div className={Style['sidebar-content']}>
                <FontAwesomeIcon icon={faBarcode}  fixedWidth color="white"/>
                <a href="#">Scan In</a>
            </div>
        </div>
    </div>
  );
}
