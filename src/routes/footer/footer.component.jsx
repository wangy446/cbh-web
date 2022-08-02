import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './footer.style.css';
import BackGround3 from "../../components/background3/background3.component";

const Footer = () => {
  return(
    <Fragment>
      <Outlet />
      <div className='navigation-f'>
        <h1 className='logo-f'>Logo</h1>
        <div className='nav-links-f'>
          <Link className='nav-link-f' to='/'>
            Home
          </Link>
          <Link className='nav-link-f' to='/about'>
            Who We Are
          </Link>
          <Link className='nav-link-f' to='/news'>
            In The News
          </Link>
          <Link className='nav-link-f' to='/case'>
            Case Consultation
          </Link>
          <Link className='nav-link-f' to='/fnish'>
            FNISH
          </Link>
          <Link className='nav-link-f' to='/resources'>
            Resources
          </Link>
          <Link className='nav-link-f' to='/blog'>
            Blog
          </Link>
        </div>
      </div>
      <BackGround3 />
    </Fragment>
  )
}

export default Footer;