import './case-format3.style.css';

const CaseFormat3 = (props) => {
  console.log(props.slogan)
  return (
    <div className='case-container3'>
      <div className='case-container-news-indi'>
      <a className='pase-case2' href={props.link}>
        <img className='image3' src={require('../../asset/'+ props.image)} alt={props.title} />
      </a>
      <a className='pase-case2' href={props.link}>
        <p className='case-title'>{props.title}</p>
      </a>
      <a className='pase-case2' href={props.link}>
        <p className='case-slogan'>{props.slogan}</p>
      </a>
      </div>
    </div>

  )
}

export default CaseFormat3;