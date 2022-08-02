import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import blog2Image from '../../asset/Frame 51.png';
import './blog-content5.style.css';
import Footer from "../footer/footer.component";

const BlogContent5 = () => {
  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='Blog' slogan='Learn More About Our Current Updates' />
      <div className='blog1-container'>
      <h1 className='b-content-title'>Behavioral Health Foundation Grant</h1>
      <img className='b-content-image' src={blog2Image} alt='blog3' />
      <div className='b-content-container'>
        <p className='b-content'>The Behavioral Health Foundation is soliciting applications for proposals for the 2022 allocation cycle.</p>
        <p className='b-content'>If you have an idea for a specific need or project that will enhance current programs and improve care for our clients and patients, you are encouraged to apply for funding from the Foundation.</p>
        <p className='b-content'><strong>What types of projects are funded?</strong></p>
        <p className='b-content'>The Foundation can fund a wide variety of proposals - In 2021, funds were granted to purchase a vehicle for the FACT program, to train staff on diversity-informed tenets and to create a coalition with MBH, Tacoma Public Schools and UW Tacoma to improve youth mental health.</p>
        <p className='b-content'><strong>Who can apply?</strong></p>
        <p className='b-content'>Any staff member at Navos, Greater Lakes Mental Healthcare and MultiCare Behavioral Health can submit an idea or proposal to their manager. All applications must be signed and submitted by a manager or director, but all staff are encouraged to submit ideas and discuss them with their leaders.</p>
        <p className='b-content'><strong>What is the application process?</strong></p>
        <ol className='b-content-lists'>
          <li className='content-list'>
          Managers are asked to solicit ideas from their teams. All staff are encouraged to submit ideas and leaders may also submit their own proposals.
          </li>
          <li className='content-list'>
          The leader will approve the proposal, ensure it meets the application criteria, and then signs and submits the proposal to <a href='mailto:Tim.Holmes@Multicare.org'>Tim.Holmes@Multicare.org</a> by October 1 for review and approval.
          </li>
          <li className='content-list'>
          Once Tim Holmes approves and signs the application, it must be submitted by: <strong>First deadline - August 15; Second deadline - October 15</strong>.
          </li>
          <li className='content-list'>
          Applications will be reviewed by an allocations committee comprised of MultiCare Behavioral Health Foundation board members. Applicants may be interviewed if the committee has additional questions.
          </li>
          <li className='content-list'>
          The allocations committee will present its recommendations to the MultiCare Behavioral Health Foundation board for voting.
          </li>
          <li className='content-list'>
          All applicants will be notified of the board’s decision, and those chosen for funding will be sent instructions on how to access the funds
          </li>
        </ol>
        <p className='b-content'><strong>Further details about the</strong> Behavioral Health Foundation, the fund allocation process and the application can be found on <a className='blog5-link'href='http://multicare.us.newsweaver.com/kyq24swk2a/1r4i4trmizd106pfejz4nv/external?email=true&a=5&p=15997950&t=1851614'>Point MultiCare</a>. If you have further questions, please contact the MultiCare Behavioral Health Foundation team at <a href='mailto:bhfoundation@multicare.org'>bhfoundation@multicare.org</a>.</p>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogContent5;