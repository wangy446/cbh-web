import './header.style.css';

const Header = (props) => {
  return (
    <h1 className='header-main'>{props.header}</h1>
  )
}

export default Header;