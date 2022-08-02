import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import Header from "../../components/header/header.component";
import CaseFormat1 from "../../components/case-format1/case-format.component";
import ViewButton from "../../components/view-button/view-button.component";
import CaseFormatTwo from "../../components/case-format2/case-format2.component";
import './case.style.css';
import EventCard from "../../components/event-card/event-card.component";
import InputField from "../../components/input-field/input-field.component";
import SendButton from "../../components/send-button/send-button.component";
import Footer from "../footer/footer.component";
import CaseFormat3 from "../../components/case-format3/case-format3.component";
import ViewButton3 from "../../components/view-button3/view-button3.component";
import {Link} from 'react-router-dom';

const Case = () => {
  const pastCase = [
    {
      image:'Frame 27.png',
      title:'Lorem ipsum dolor',
      subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      link:'/past-case'
    },
    {
      image:'Frame 28.png',
      title:'Lorem ipsum dolor',
      subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      link:''
    },
    {
      image:'Frame 29.png',
      title:'Lorem ipsum dolor',
      subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      link:''
    }
  ]


  const caseNews = [
    {
      image:'past-case-1.png',
      title:'362 School Counselors on the Pandemic’s Effect on Children: ‘Anxiety Is Filling Our Kids’',
      subtitle:'In a Times survey, counselors said students are behind in their abilities to learn, cope and relate.',
      link:'https://www.nytimes.com/interactive/2022/05/29/upshot/pandemic-school-counselors.html'
    },
    {
      image:'Frame 28.png',
      title:'Lorem ipsum dolor',
      subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      link:''
    },
    {
      image:'Frame 29.png',
      title:'Lorem ipsum dolor',
      subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      link:''
    }
  ]

  const event = [
    {
      date:'July 15',
      time:'3:00-4:00',
      title:'Lorem ipsum dolor sit amet, consectetur adipiscing',
      link:'https://www.Lorem ipsum dolor sit amet.com'
    },
    {
      date:'July 15',
      time:'3:00-4:00',
      title:'Lorem ipsum dolor sit amet, consectetur adipiscing',
      link:'https://www.Lorem ipsum dolor sit amet.com'
    },
    {
      date:'July 15',
      time:'3:00-4:00',
      title:'Lorem ipsum dolor sit amet, consectetur adipiscing',
      link:'https://www.Lorem ipsum dolor sit amet.com'
    }
  ]

  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='Case Consultation' slogan='Slogan' />
      <Header className='case-header' header='About Case Consultation' />
      <CaseFormat1
      image1='Frame 24.png'
      image2='Frame 25.png'
      image3='Frame 26.png'
      content1='The Triad Coalition would like to offer consultation services and education to the School Health Professionals with Monthly Consultation Reviews of complex BH student cases with MC Child & Adol Psychiatrist Dr. Lucas McIntyre.  Education and discussion to support school staff in behavioral health care.'
      content2=''/>
      <Header className='case-header' header='Past Case Consultation' />
      <div className='case-container'>
      {
        pastCase.map(({image, title, subtitle, link}) => (
            <CaseFormatTwo image={image} title={title} slogan={subtitle} link={link}/>
        ))}
      </div>
      <ViewButton3 link='/past-case' />
      <Header className='case-header' header='Case Consultation News' />
      <div className='news-case-container'>
      {
        caseNews.map(({image, title, subtitle, link}) => (
            <CaseFormat3 image={image} title={title} slogan={subtitle} link={link}/>
        ))}
      </div>
      <ViewButton3 link='/case-news' />
      <Header className='case-header' header='Upcoming Event' />
      <div className='all-event-container'>
        {
        event.map(({date,time, title, link}) => (
          <EventCard date={date} title={title} time={time} link={link}/>
      ))}
      </div>
      <Header className='case-header' header='Provide Your Case Questions For Advising' />
      <InputField />
      <Footer />
    </div>
  )
}

export default Case;