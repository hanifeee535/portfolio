import React from 'react';
import { Link } from 'react-router-dom'
import { Nav , Navbar } from 'react-bootstrap';
import {BsFillHouseFill} from 'react-icons/bs'
import {BsFillInfoCircleFill} from 'react-icons/bs'

import {BsFillFolderSymlinkFill} from 'react-icons/bs'
import {BsEnvelopeOpenFill} from 'react-icons/bs'
const Navigation= ()=>{
    return (
        <header className='header py-2' >
            <div className = 'container'>
       <Navbar collapseOnSelect expand="lg"  variant="dark"  >
             <Link to = '/' className = 'navbar-brand' > S A Hanif Ringku  </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                   <Link to = '/' className = 'nav-link px-3 ' > <span> <BsFillHouseFill/> </span> Home  </Link>

                    <Link to = '/about' className = 'nav-link px-3' > <span> <BsFillInfoCircleFill/> </span> About  </Link>

                     <Link to = '/project' className = 'nav-link px-3' > <span> <BsFillFolderSymlinkFill/> </span> Projects </Link>

                     

                       <Link to = '/contact' className = 'nav-link px-3 ' > <span> <BsEnvelopeOpenFill/> </span> Contact Me  </Link>
                    
      
                </Nav>
   
            </Navbar.Collapse>
        </Navbar>
    </div>
        </header>
    )
}
export default Navigation