import './background1.style.css';
import header1 from '../../asset/Group 49.png';

const BackGround1 = () => {
  return(
    <img className='bg1' src={header1} alt='header-img'/>
    //<div className='bg1' style={{
      //backgroundImage: `url(${header1}))`
    //}} />
  )
}

export default BackGround1;