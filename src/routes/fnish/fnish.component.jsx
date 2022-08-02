import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import Header from "../../components/header/header.component";
import FnishFormat1 from "../../components/fnish-format1/fnish-format.component";
import FnishCard from "../../components/fnish-card/fnish-card.component";
import Footer from "../footer/footer.component";
import './fnish.style.css';
import '../../asset/Rectangle 71.png';
import InputField2 from "../../components/input-field2/input-field2.component";
import Header2 from "../../components/header2/header2.component";

const Fnish = () => {
  const stepsCards = [
    {
      number:'1',
      name: 'Step 1',
      title: 'Understand The Program',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      number:'2',
      name: 'Step 2',
      title: 'Contact Our Advisor',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      number:'3',
      name: 'Step 3',
      title: 'Get To Know Detail Information',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      number:'4',
      name: 'Step 4',
      title: 'Join The Program',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    }
  ]
  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='FNISH Program' slogan='Slogan' />
      <Header className='case-header' header='About FNISH Program' />
      <FnishFormat1
      image1='Frame 66.png'
      image2='Frame 67.png'
      image3='Frame 68.png'
      content1='The Patient Financial Navigators from MultiCare help hospital patients obtain insurance coverage.  The MC PFN Team would like to apply the same process to obtaining insurance coverage for the school student population to help students get Behavioral Health Treatment needed when finances are a barrier.  Financial Navigation in School Health'
      content2=''/>
      <div className='all-step-container'>
        {
        stepsCards.map(({number, name, title, intro}) => (
          <FnishCard number={number} name={name} title={title} intro={intro}/>
      ))}
      </div>
      <Header className='card-header' header='Learn More About FNISH' />
      <InputField2 />
      <Footer />
    </div>
  )
}

export default Fnish;