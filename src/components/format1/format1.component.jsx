import './format1.style.css';

const FormatOne = (props) => {
  return (
    <div className='category-container'>
      <div className='category-body-container'>
        <a className='news-link' href={props.link}>
          <img className='image' src={require('../../asset/'+ props.image)} alt={props.title} />
        </a>
        <a className='title-link' href={props.link}>
        <h1 className='titles'>{props.title}</h1>
        </a>
          <p className='date'>{props.date}</p>
      </div>
    </div>

  )
}

export default FormatOne;