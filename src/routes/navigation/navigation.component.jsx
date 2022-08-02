import {Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.style.css';

const Navigation = () => {
  return(
    <Fragment>
      <div className='navigation'>
        <h1 className='logo'>Logo</h1>
        <div className='nav-links'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/about'>
            Who We Are
          </Link>
          <Link className='nav-link' to='/news'>
            In The News
          </Link>
          <Link className='nav-link' to='/case'>
            Case Consultation
          </Link>
          <Link className='nav-link' to='/fnish'>
            FNISH
          </Link>
          <Link className='nav-link' to='/resources'>
            Resources
          </Link>
          <Link className='nav-link' to='/blog'>
            Blog
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;