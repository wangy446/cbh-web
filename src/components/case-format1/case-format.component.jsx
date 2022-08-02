import './case-format.style.css';

const CaseFormat1 = (props) => {
  return(
    <div className='case-intro-container'>
      <div className='case-intro-img'>
        <img className='case-img' src={require('../../asset/'+ props.image1)} alt='img' />
        <img className='case-img' src={require('../../asset/'+ props.image2)} alt='img' />
        <img className='case-img' src={require('../../asset/'+ props.image3)} alt='img' />
      </div>
      <p className='intro-content'>{props.content1}</p>
      <p className='intro-content'>{props.content2}</p>
    </div>
  )
}

export default CaseFormat1;