import './fnish-format.style.css';

const FnishFormat1 = (props) => {
  return(
    <div className='fnish-intro-container'>
      <div className='fnish-intro-img'>
        <img className='fnish-img' src={require('../../asset/'+ props.image1)} alt='img' />
        <img className='fnish-img' src={require('../../asset/'+ props.image2)} alt='img' />
        <img className='fnish-img' src={require('../../asset/'+ props.image3)} alt='img' />
      </div>
      <p className='intro-content'>{props.content1}</p>
      <p className='intro-content'>{props.content2}</p>
    </div>
  )
}

export default FnishFormat1;