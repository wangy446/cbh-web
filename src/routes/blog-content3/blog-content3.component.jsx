import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import blog2Image from '../../asset/Frame 23.png';
import './blog-content3.style.css';
import Footer from "../footer/footer.component";

const BlogContent3 = () => {
  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='Blog' slogan='Learn More About Our Current Updates' />
      <div className='blog1-container'>
      <h1 className='b-content-title'>Focus on High Reliability</h1>
      <img className='b-content-image' src={blog2Image} alt='blog3' />
      <div className='b-content-container'>
        <p className='b-content'>Our HRO theme for this quarter is Pay Attention to Details, and our HRO tool for April is “Standardized Handoffs.” Posters are displayed throughout our facilities and leaders will be highlighting this tool throughout the month.</p>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogContent3;