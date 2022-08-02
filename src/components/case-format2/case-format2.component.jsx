import './case-format2.style.css';
import { Link } from 'react-router-dom';

const CaseFormatTwo = (props) => {
  console.log(props.slogan)
  return (
    <div className='case-container2'>
      <div className='case-container-indi'>
      <Link className='pase-case' to={props.link}>
        <img className='image10' src={require('../../asset/'+ props.image)} alt={props.title} />
      </Link>
      <Link className='pase-case-title' to={props.link}>
          <h1 className='titles10'>{props.title}</h1>
      </Link>
      <Link className='pase-case' to={props.link}>
          <p className='slogan10'>{props.slogan}</p>
      </Link>
      </div>
    </div>

  )
}

export default CaseFormatTwo;