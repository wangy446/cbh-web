import './about-format2.style.css';

const AboutFormat2 = (props) => {
  return(
    <div>
      <div className='description2'>
        <img className='about-img2' src={props.img} alt='img-2' />
        <p className='about-descri2'>{props.content}</p>
      </div>
    </div>
  )
}

export default AboutFormat2;