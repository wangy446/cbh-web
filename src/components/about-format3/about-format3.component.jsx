import './about-format3.style.css';
import img1 from '../../asset/Frame 31.png';
import img2 from '../../asset/Frame 32.png';
import img3 from '../../asset/Frame 33.png';
import img4 from '../../asset/Frame 34.png';

const AboutFormat3 = (props) => {
  return(
    <div className='card-container'>
      <div className='card'>
        <img className='card-img' src={img1} alt='value-img' />
        <p className='card-content'>Ensuring equity</p>
      </div>
      <div className='card'>
        <img className='card-img' src={img2} alt='value-img' />
        <p className='card-content'>Collaborations and service</p>
      </div>
      <div className='card'>
        <img className='card-img' src={img3} alt='value-img' />
        <p className='card-content'>Continuous improvement</p>
      </div>
      <div className='card'>
        <img className='card-img' src={img4} alt='value-img' />
        <p className='card-content'>Focus on the whole child</p>
      </div>
    </div>
  )
}

export default AboutFormat3;