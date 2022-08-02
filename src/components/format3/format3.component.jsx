import './format3.style.css';
import {Link} from 'react-router-dom';

const FormatThree = (props) => {
  return (
    <div className='category-container'>
      <div className='category-body-container'>
        <Link className='news-link3' to={props.link}>
          <img className='image3' src={require('../../asset/'+ props.image)} alt={props.title} />
        </Link>
        <Link className='title-link3' to={props.link}>
        <h1 className='titles3'>{props.title}</h1>
        </Link>
          <p className='date3'>{props.date}</p>
      </div>
    </div>

  )
}

export default FormatThree;