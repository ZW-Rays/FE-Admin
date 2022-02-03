import React from 'react';
import Style from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faScroll, faCubes, faBox, faPassport, faTruckLoading, faBarcode, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { 
    Link,
    useResolvedPath,
    useMatch } from 'react-router-dom';

const LINKS = [
    {
        to: '/',
        label: 'HOME',
        icon: faTachometerAlt,
    },
    {
        to: '/purchase-order',
        label: 'Purchase Order',
        icon: faScroll,
    },
    {
        to: '/packing',
        label: 'Packing',
        icon: faCubes,
    },
    {
        to: '/product',
        label: 'Product',
        icon: faBox,
    },
    {
        to: '/travel-document',
        label: 'Travel Document',
        icon: faPassport,
    },
    {
        to: '/production',
        label: 'Production',
        icon: faTruckLoading,
    },
    {
        to: '/scan-out',
        label: 'Scan Out',
        icon: faBarcode,
    },
    {
        to: '/scan-in',
        label: 'Scan In',
        icon: faBarcode,
    },
]

export default function Sidebar({ isOpen = true }) {
    let isOpenClass = Style['sidebar']
    if (!isOpen) {
        isOpenClass += ` ${Style['sidebar-close']}`
    }

  return (
    <div className={isOpenClass}>
        <div className={Style['sidebar-top']}>
            <SideLinks isOpen={isOpen}/>
        </div>
        <div className={Style['sidebar-bottom']}>
            <SideBottom isOpen={isOpen}/>
        </div>
    </div>
  );
}

function SideLinks({isOpen = true}) {
    return (
        <div className={`${Style['sidebar-menu']}`}>
            {LINKS.map((link, i) => (
                <SideLink 
                    key={i} 
                    to={link.to} 
                    label={link.label} 
                    icon={link.icon}
                    isOpen={isOpen} />
            ))}
        </div>
    )
}


function SideLink({ to = '', label = '', icon = '', isOpen = true}) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })

    let currentClass = Style['sidebar-content']
    if (match) {
        currentClass += ` ${Style['sidebar-content-active']}`
    }


    let isOpenClass = Style['label']
    if (!isOpen) {
        isOpenClass += ` ${Style['label-close']}`
    }

    return (
        <Link to={to} className='text-decoration-none'>
            <div className={currentClass}>
                <FontAwesomeIcon icon={icon} fixedWidth className={'menu-icon'} />
                <span className={isOpenClass}>{label}</span>
            </div>
        </Link>
    )
}

function SideBottom({isOpen = true}) {
    
    let isOpenClass = Style['label']
    if (!isOpen) {
        isOpenClass += ` ${Style['label-close']}`
    }

    return (
        <Link to={'/logout'} className='text-decoration-none'>
            <div className={Style['sidebar-content']}>
                <FontAwesomeIcon icon={faSignOutAlt}  fixedWidth className={'menu-icon'}/>
                <span className={isOpenClass}>LogOut</span>
            </div>
        </Link>
    )
}