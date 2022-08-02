import Header from "../../components/header/header.component";
import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import AboutFormat1 from "../../components/about-format1/about-format1.component";
import AboutFormat2 from "../../components/about-format2/about-format2.component";
import AboutFormat3 from "../../components/about-format3/about-format3.component";
import AboutFormat4 from "../../components/about-format4/about-format4.component";
import aboutImg1 from '../../asset/about-img1.png';
import aboutImg2 from '../../asset/about-img2.png';
import aboutImg3 from '../../asset/about-img3.png'
import descripLogo from '../../asset/Frame 30.png';
import Footer from "../footer/footer.component";


const About = () => {
  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='Who We Are' slogan='Learn More About Our Expert' />
      <Header className='about-us-header' header='About Us' />
      <AboutFormat1
        img={aboutImg1}
        content='Washington State ranks 43 out of 51 in the US for access to mental health services. For example, over 42% of Tacoma Public Schools (TPS) students face service barriers due to being economically disadvantaged. Accordingly, the WA Office of Superintendent of Public Instruction (OSPI) has deemed building staffing capacity to support student well-being as a key priority in 2021-23. Studies demonstrate that consultations that are transferable from behavioral health care experts to school staff are an efficient, scalable, cost-effective, and sustained model. However, this model has not been adopted in TPS. Our proposed capacity building project aims to strengthen an established partnership between UW Tacoma, TPS and MultiCare Adolescent Behavioral Health Unit and conduct a needs assessment that will inform the development and implementation of a transferrable consultation program that supports student mental well-being.'
        desriplogo={descripLogo}
        />
        <Header className='mission-header' header='Our Mission' />
        <AboutFormat2
        img={aboutImg2}
        content='Our mission is to enhance the mental and behavioral health of all students connected to Project AWARE through an interconnected system framework with the partnerships of education, mental health, and community supports which promote wellness, resilience, and tools to empower all students, families, educators, and school staff.

        To reduce inequality in academic, social, behavioral, and health outcomes of young people through developing evidence-based tools and programs with inter-disciplinary stakeholders including xxx.'
        />
        <Header className='vision-header' header='Our Vision' />
        <AboutFormat2
        img={aboutImg3}
        content='Through comprehensive mental and behavior health supports all students will be prepared for post-secondary pathways, careers and civic engagement.

        Through addressing youth behavioral health crisis in ways that can enhance the work of school staff, practitioners, and policymakers.'
        />
        <Header className='vision-header' header='Our Value' />
        <AboutFormat3 />
        <Header className='vision-header' header='Meet The Team' />
        <AboutFormat4 />
        <Footer />
    </div>
  )
}

export default About;