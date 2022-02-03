import React from 'react';
import Style from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faScroll, faCubes, faBox, faPassport, faTruckLoading, faBarcode, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { 
    Link,
    useResolvedPath,
    useMatch } from 'react-router-dom';
import appendClass from 'utils/class';

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

export default function Sidebar() {

    const isOpen = true

  return (
    <div className={Style['sidebar']}>
        <div className={Style['sidebar-top']}>
            <SideLinks />
        </div>
        <div className={Style['sidebar-bottom']}>
            <SideBottom />
        </div>
    </div>
  );
}

function SideLinks() {
    return (
        <div className={`${Style['sidebar-menu']}`}>
            {LINKS.map((link, i) => (
                <SideLink 
                    key={i} 
                    to={link.to} 
                    label={link.label} 
                    icon={link.icon} />
            ))}
        </div>
    )
}


function SideLink({ to = '', label = '', icon = ''}) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })

    let currentClass = Style['sidebar-content']
    if (match) {
        currentClass += ` ${Style['sidebar-content-active']}`
    }

    return (
        <Link to={to} className='text-decoration-none'>
            <div className={currentClass}>
                <FontAwesomeIcon icon={icon} fixedWidth className={'menu-icon'} />
                <span className={'menu-label'}>{label}</span>
            </div>
        </Link>
    )
}

function SideBottom() {
    return (
        <Link to={'/logout'} className='text-decoration-none'>
            <div className={Style['sidebar-content']}>
                <FontAwesomeIcon icon={faSignOutAlt}  fixedWidth className={'menu-icon'}/>
                <span className={'menu-label'}>LogOut</span>
            </div>
        </Link>
    )
}