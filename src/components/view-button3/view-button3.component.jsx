import {Link} from 'react-router-dom';
import './view-button3.style.css';

const ViewButton3 = (props) => {
  return (
    <button className='view-button-case'>
        <Link className='view-link-case' to={props.link}>
         Learn More
        </Link>
    </button>
  )
}

export default ViewButton3;