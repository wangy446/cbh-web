import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import blog2Image from '../../asset/Frame 52.png';
import './blog-content6.style.css';
import Footer from "../footer/footer.component";

const BlogContent6 = () => {
  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='Blog' slogan='Learn More About Our Current Updates' />
      <div className='blog1-container'>
      <h1 className='b-content-title'>Changing Minds</h1>
      <img className='b-content-image' src={blog2Image} alt='blog3' />
      <div className='b-content-container'>
        <p className='b-content'>Join us virtually on <strong>Wednesday, May 4, </strong> from <strong>noon-12:45pm </strong>for our Changing Minds event, where you’ll learn how our network is responding to the mental health crisis facing so many of our young people today.</p>
        <p className='b-content'>The event will feature guest speaker and health care hero, Dr. Ben Danielson. Dr. Danielson is a Clinical Professor of Pediatrics at the University of Washington School of Medicine. He also serves on various boards of philanthropic organizations and community groups dedicated to health issues.</p>
        <p className='b-content'>For two decades, Dr. Danielson was the medical director at the Odessa Brown Children’s Clinic, which serves mostly families who are low-income in a historically Black community. His work focuses on promoting well-being and dignity, especially for marginalized communities.</p>
        <p className='b-content'>To learn more, read our <a className='blog6-link' href='https://give.multicare.org/changing-minds-speaker-talks-kids-mental-health/'>Changing Minds blog story</a>. Register for free <a className='blog6-link' href='https://www.multicare.org/changing-minds/registration/'>here</a>.</p>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogContent6;