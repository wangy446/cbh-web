import background from '../../asset/Group 60.png';
import './event-card.style.css';

const EventCard = (props) => {
  return(
    <div className='event-container'>
      <div className='event-info-container'>
        <div className='date-time-container'>
        <p className='event-date'>{props.date}</p>
        <p className='event-time'>{props.time}</p>
        </div>
        <div className='event-title-link-container'>
          <p className='event-title'>{props.title}</p>
          <a className='event-link' href={props.link}><p>{props.link}</p></a>
        </div>
      </div>
    </div>

  )
}

export default EventCard;