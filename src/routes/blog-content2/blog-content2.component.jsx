import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import blog2Image from '../../asset/Frame 15.png';
import './blog-content2.style.css';
import Footer from "../footer/footer.component";

const BlogContent2 = () => {
  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='Blog' slogan='Learn More About Our Current Updates' />
      <div className='blog1-container'>
      <h1 className='b-content-title'>New MBH Alternative Response Team</h1>
      <img className='b-content-image' src={blog2Image} alt='blog2' />
      <div className='b-content-container'>
        <p className='b-content'>MultiCare Behavioral Health Crisis Services has partnered with Pierce County Human Services to create a new community Alternative Response Team. This team will include a supervisor, crisis therapist and up to four crisis care coordinators who will partner with Pierce County sheriff’s deputies to respond to emergency calls involving non-criminal crisis situations. The team will help individuals who are struggling with behavioral health concerns by providing critical support and referrals to appropriate services. In additional to providing care coordination and crisis risk assessments, the team will also support the responding deputies in educating callers about resources in order to reduce future emergency calls.</p>
        <p className='b-content'>This program is funded through the new Pierce County behavioral health tax, and the team expects to begin posting for the open positions soon. </p>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogContent2;