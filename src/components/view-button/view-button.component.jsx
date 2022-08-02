import {Link} from 'react-router-dom';
import './view-button.style.css';

const ViewButton = (props) => {
  return (
    <button className='view-button'>
        <Link className='view-link' to={props.link}>
         Learn More
        </Link>
    </button>
  )
}

export default ViewButton;