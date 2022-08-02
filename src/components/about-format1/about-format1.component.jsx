import './about-format1.style.css';

const AboutFormat1 = (props) => {
  return(
    <div>
      <div className='description'>
        <img className='about-img1' src={props.img} alt='img-1' />
        <p className='about-descri1'>{props.content}</p>
      </div>
      <img className='logo-descrip' src={props.desriplogo} alt='logos' />
    </div>
  )
}

export default AboutFormat1;