import './fnish-card.style.css';
import '../../asset/Rectangle 70.png';

const FnishCard = (props) => {
  return(
    <div className='step-card-container'>
      <div className='each-card'>
        <h1 className='step-number'>{props.number}</h1>
        <p className='step-name'>{props.name}</p>
        <p className='step-title'>{props.title}</p>
        <p className='step-subtitle'>{props.intro}</p>
      </div>
    </div>
  )
}

export default FnishCard;