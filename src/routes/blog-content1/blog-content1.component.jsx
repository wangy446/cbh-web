import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import blog1Image from '../../asset/blog-content-pic1.png';
import signImage from '../../asset/sign1.png';
import './blog-content1.style.css';
import Footer from "../footer/footer.component";

const BlogContent1 = () => {
  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='Blog' slogan='Learn More About Our Current Updates' />
      <div className='blog1-container'>
      <p className='b-content-subtitle'>Published April 20, 2022</p>
      <h1 className='b-content-title'>A message from Tim Holmes </h1>
      <p className='b-content-subtitle'>Child Abuse Prevention Month</p>
      <img className='b-content-image' src={blog1Image} alt='tim-holmes' />
      <p className='b-image-title'>Tim Holmes, President,</p>
      <p className='b-image-title'> MultiCare Behavioral Health Network</p>
      <div className='b-content-container'>
        <p className='b-content'>As a Behavioral Health Network with many child and family programs and services, we are very aware of the devastating effects of childhood abuse and neglect. We know that a child’s brain development is impacted by early experiences and that a safe and nurturing childhood is critical for their
        mental health and wellbeing. We also know that poverty, racism and generational trauma can create family pressures that can foster neglect and abuse. And this violence not only harms children, it also has far-reaching consequences for families, neighborhoods, schools and communities.</p>
        <p className='b-content'>I’ve shared previously that one of the primary reason why I decided to become a marriage and family therapist was because of my family’s experiences with my mother’s lifelong struggle with depression and anxiety. What I haven’t shared is the abuse my mother had experienced at the hands of her father. She, along with her siblings and her own mother, were ultimately able to escape this abuse, but the consequences of that trauma lasted her whole life. It impacted how she saw the world, how she interacted with others and how she raised her children. And I often
        wonder if my mom’s life would have been different if she had received early intervention and treatments.   </p>
        <p className='b-content'>Childhood trauma can be devastating, but we know that treatment works and recovery is possible. Over and over in our work we see the powerful impact of offering the right support at the right time. We see children heal and families thrive, and we know that this recovery has a powerful ripple effect on future generations and on our community as a whole. That is why we have always strived to provided high quality, comprehensive
        child and family services. Across our network, we offer extensive outpatient care, school-based programs and an infant and early childhood program.</p>
        <p className='b-content'>We provide intensive youth services at our Lake Burien campus and inpatient care at MultiCare’s Adolescent Behavioral Health Unit. However, the need continues to grow and we are continually seeking opportunities to improve access and expand our services. We are currently working on many different projects and initiatives, but I wanted to highlight just a few of them for you:  </p>
        <ul className='b-content-lists'>
          <li className='content-list'>
          In the Inland Northwest we are partnering with the Northeast Community Center and the ZoNE, a collective of more than 50 organizations, to open an outpatient behavioral health clinic in an underserved area of Spokane. Currently, our network does not provide any outpatient behavioral health services in the Inland Northwest, and the need has grown dramatically over the past few years. The clinic, which will open in April of 2023,
  will house about 30 clinicians and will be co-located with other community agencies offering extensive wrap-around supports.
          </li>
          <li className='content-list'>
          In the Puget Sound area, we are collaborating with the UW Tacoma’s School of Nursing and Health Care Leadership and Tacoma Public Schools on a pilot project to improve behavioral health disparities for K-12 students. It’s an exciting collaboration that participants believe will
  “solidify community engagement across the educational and medical systems to develop and test behavioral health promotion approaches in schools where our youth learn and thrive.” You can read more about this exciting collaboration here.
          </li>
          <li className='content-list'>
          Our continuing integration with Mary Bridge behaviorial health programs include taking steps to develop a full pediatric BH continuum of care. It has been enlightening to learn about their programs and get to know their passionate and dedicated teams. In fact, I was impressed with a letter in the News Tribune earlier this month, by Aytch Denaro, MSW, a licensed social worker at Mary Bridge Children’s Gender Health
  Clinic. They were concerned about recent legislation that seeks to limit or deny affirming health care for transgender and gender-diverse youth. Aytch addressed the level of fear and insecurity caused by this legislation and expressed pride in working for an organization committed to providing compassionate, affirming health care. If you haven’t read the article, I encourage you do so.
          </li>
        </ul>
        <p className='b-content'>If you would like to learn more about what our network is doing to care for vulnerable children and families, please join me for the Behavioral Health Foundation’s Changing Minds event on May 4 at noon. We will be sharing some heartwarming stories of recovery and you will hear from several of our child and family clinicians and leaders. We will also hear from Dr. Ben Danielson, Clinical Professor of Pediatrics at the University of Washington School of Medicine. You can register here to receive a calendar invitation to the virtual event. I highly encourage you to attend -- it’s a great way to learn more about our services and I promise you will be inspired by the real differences we are making in the lives of children and families.</p>
        <p className='b-content'>Protecting our youth, supporting families and preventing and treating child abuse is serious work and I am grateful to each of you for your contribution. We have an amazing team of clinicians, of course, but we all play a role in supporting children, youth and families in our community as well. Together, we are helping to create a better world for generations to come – and what could be more important than that? </p>
        <img className='b-footer-image' src={signImage} alt='' />
        <p className='b-footer-subtitle'>Tim Holmes</p>
        <p className='b-footer-subtitle'>President, MultiCare Behavioral Health Network</p>

      </div>

      </div>
      <Footer />
    </div>
  )
}

export default BlogContent1;