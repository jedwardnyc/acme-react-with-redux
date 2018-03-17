import React from 'react';
import { Link } from 'react-router-dom';

// Here incase I add more functionality and other tabs are needed

const Nav = (props) => {
  return (
    <div>
        <ul className='nav nav-tabs'>
          <li className='nav-item'> <Link className='nav-link' to='/' style={{textDecoration: 'none'}}> All Users </Link> </li>
        </ul>
    </div>
  )
};

export default Nav;