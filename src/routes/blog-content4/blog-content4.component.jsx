import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import blog2Image from '../../asset/Frame 50.png';
import './blog-content4.style.css';
import Footer from "../footer/footer.component";

const BlogContent4 = () => {
  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='Blog' slogan='Learn More About Our Current Updates' />
      <div className='blog1-container'>
      <h1 className='b-content-title'>Navos Completes Successful Joint Commission Survey</h1>
      <img className='b-content-image' src={blog2Image} alt='blog3' />
      <div className='b-content-container'>
        <p className='b-content'>Navos is a complex organization with programs that fall under the behavioral health survey manual as well as the hospital survey manual, but after an intense four day survey earlier this month, the Joint Commission gave Navos a highly complimentary report.</p>
        <p className='b-content'>The team of four surveyors were pleased with the excellent level of outpatient care and the responses from shared-housing clients who reported that they “felt safe” and enjoyed a strong sense of community. They were also pleased with the level of engagement among the outpatient teams and with Navos’ quality program and pharmacy. However, they shared that they were most impressed with the improvements made at the hospital, and with the number of positive changes that have occurred since the last survey. </p>
        <p className='b-content'>Of course, in a survey of this depth and complexity, there are always some findings and recommendations for improvement. For outpatient, the findings are related to treatment plans, medication practices, ligature assessments and suicide screening. The hospital findings are related to treatment plans, suicide screening and assessment and documentation but there were none related to ligature risk for the hospital. The inpatient and outpatient teams are now working together to develop a shared plan of correction for these findings.</p>
        <p className='b-content'>Navos did receive one serious, condition-level finding related to the b-tags and documentation. The psychiatric history and physical and treatment plans were found to be missing required elements. So, while we had hoped to have no condition-level findings, this single finding is a great improvement over the 25 condition-level findings on the last TJC survey. The hospital will have a follow-up survey in 45 days to ensure the plan of correction is in place.</p>
        <p className='b-content'>We are grateful to our Navos leaders and teams for remaining focused on safety, quality and excellent care. A survey is simply a snapshot in time, but it is a reflection of the hard work and attention to detail that you bring to your work, every day. We are grateful for your commitment and dedication. It really does make a real difference to those we serve.</p>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogContent4;