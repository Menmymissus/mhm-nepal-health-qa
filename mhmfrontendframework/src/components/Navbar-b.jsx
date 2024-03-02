import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar-b.css'
import {Link as ScrollLink} from 'react-scroll'
function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
        <div className='navbar'>
            <div className='navbar-container'>
                <ScrollLink activeClass='no-active' smooth spy to="hero" className="navbar-logo">
                    MHM 
                </ScrollLink>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                        <ScrollLink activeClass="active" smooth spy offset={-80} to='services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </ScrollLink>
                     </li>
                     <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                     </li>
                     <li className='nav-item'>
                        <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                     </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar