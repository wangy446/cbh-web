import {Link} from 'react-router-dom';
import './view-button2.style.css';

const ViewButton2 = (props) => {
  return (
    <button className='view-button'>
        <Link className='view-link' to={props.link}>
         Learn More
        </Link>
    </button>
  )
}

export default ViewButton2;