import './about-format4.style.css';
import img1 from '../../asset/Frame 6.png';
import img2 from '../../asset/Frame 8.png';
import img3 from '../../asset/Frame 9.png';

const AboutFormat4 = (props) => {
  return(
    <div className='card-container2'>
      <div className='intro'>
        <img className='people-img' src={img1} alt='people' />
        <div className='people-des'>
          <h1 className='name'>Lucas McIntyre MD</h1>
          <p className='people-intro'><strong>Lucas McIntyre MD</strong> is a child and adolescent psychiatrist. He is passionate about serving his community through direct patient care, program management and coalition building. He finds that by working concurrently at the individual and systemic levels he is best equipped to address the mental health disparities that face our youth. He enjoys working with youth, and is regularly inspired by their resilience, wit and compassion. He also enjoys collaborating with families, often learning as much from them as they do him. He applies a rigorous evidence-based approach to his clinical work, and is committed to increasing the mental health knowledge of our community. He has had the privilege of giving talks about mental health for the University of Washington Tacoma, Tacoma Public Schools, Franklin Pierce School District, Mary Bridge Hospital Emergency Department, the University of Hawai’i, and Kids Mental Health Pierce County. He is excited to bring his expertise to this coalition and is grateful to be working with his colleagues, Ms Ramos and Dr Cheng, both of whom he considers pillars of excellence in their respective fields.</p>
        </div>
      </div>
        <div className='intro'>
          <img className='people-img' src={img3} alt='people' />
          <div className='people-des'>
            <h1 className='name'>Susan Ramos</h1>
            <p className='people-intro'><strong>Susan Ramos, MN, RN</strong> earned her nursing education degree from UW Seattle and completed a dual master’s degree in Healthcare Leadership and Communities/Populations/Health from UW Tacoma. She has 28 years of nursing experience with an extensive background in Psychiatry, Pediatrics, Nursing and Care Management.  Susan is currently the Manager of Utilization Management for all the Behavioral Health Units in MultiCare, NAVOS, and Greater Lakes Mental Health. In 2021, she co-founded Commencement Behavioral Health, a triad coalition between MultiCare Behavioral Health, Tacoma Public Schools (TPS) and UW Tacoma, with her colleague Dr. Lucas McIntyre.  The overall objective for the coalition is to address the surge of youth mental health crisis in our school mental health population.  A triad community coalition model between three major institutions will be a collaborative effort to tackle mental health preventative care, education, research, and support in the school youth population. </p>
          </div>
        </div>
        <div className='intro'>
          <img className='people-img' src={img2} alt='people' />
          <div className='people-des'>
            <h1 className='name'>Chieh(Sunny) Cheng</h1>
            <p className='people-intro'><strong>Chieh (Sunny) Cheng, RN, PhD</strong> is a mental health researcher incorporating interdisciplinary thinking for 1) better understanding mental illness trajectories across lifespan for individuals experiencing psychotic symptoms and their families (Cheng et al., 20171; Cheng et al., 20202) to determine when, where and how to intervene; 2) developing, implementing and evaluating preventive and psychosocial interventions (Cheng et al., 20173; Cheng et al., 20224) ; 3) fostering equitable access to care for millions of people with mental illness (Michels, Hallgren, Cole, Chwastiak, & Cheng, 20225). </p>
          </div>
        </div>
    </div>
  )
}

export default AboutFormat4;