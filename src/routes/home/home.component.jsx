import BackGround1 from "../../components/background1/background1.component";
import FormatOne from "../../components/format1/format1.component";
import './home.style.css';
import Header from "../../components/header/header.component";
import ViewButton from "../../components/view-button/view-button.component";
import FormatTwo from "../../components/format2/format2.component";
import BackGround2 from "../../components/background2/background2.component";
import FormatThree from "../../components/format3/format3.component";
import Footer from "../footer/footer.component";
import { Link} from 'react-router-dom';

const Home = () => {

  const news = [
    {
      image: 'Frame 2.png',
      title: 'How Research Can Support K-12 youth behavioral health and well-being',
      date: 'April 20, 2022',
      link: 'https://www.facebook.com/photo?fbid=446628000644191&set=a.397811768859148'
    },
    {
      image: 'Frame 3.png',
      title: 'How UW Tacoma Professor Awarded Grant to Address Youth Mental Health',
      date: 'April 20, 2022',
      link: 'https://www.southsoundbiz.com/news/uw-tacoma-professor-awarded-grant-to-address-youth-mental-health/article_a9d26a0c-b500-11ec-b5c3-d3bbeed060a1.html'
    },
    {
      image: 'Frame 18.png',
      title: 'Dr. Chieh Cheng To Address Youth Mental Health With Tacoma Public Schools, Multicare',
      date: 'April 20, 2022',
      link: 'https://www.tacoma.uw.edu/news/dr-chieh-cheng-address-youth-mental-health-tacoma-public-schools-multicare'
    }
  ]

  const caseCon = [
    {
      image: '2047862255-huge.png',
      title: 'Lorem ipsum dolor',
      slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      link:''
    },
    {
      image: 'shutterstock_1896896407 1.png',
      title: 'Lorem ipsum dolor',
      slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      link: ''
    },
    {
      image: 'shutterstock_760999171.png',
      title: 'Lorem ipsum dolor',
      slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      linkL: ''
    }
  ]

  const program = [
    {
      image: 'unnamed (2) 1.png',
      title: 'Lorem ipsum dolor',
      slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      link: '/fnish'
    },
    {
      image: 'shutterstock_1316954084.png',
      title: 'Lorem ipsum dolor',
      slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      link:'/fnish'
    },
    {
      image: 'shutterstock_1240431886.png',
      title: 'Lorem ipsum dolor',
      slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      link:'/fnish'
    }
  ]

  const resource = [
    {
      image:'Frame 16.png',
      title: "Peer Health Educators help students meet life's challenges",
      date: '',
      link:'https://www.youtube.com/watch?v=T7kyZ5z6Evg'
    },
    {
      image:'Frame 19.png',
      title: "Peer to peer suicide prevention model ",
      date: '',
      link:'https://hopesquad.com/'
    },
    {
      image:'Frame 20.png',
      title: "Rosen, Murkowski Introduce Bipartisan Bill to Address K-12 Student Mental Health Crisis",
      date: '',
      link:'https://www.rosen.senate.gov/rosen-murkowski-introduce-bipartisan-bill-address-k-12-student-mental-health-crisis'
    }
  ]

  const blog = [
    {
      image:'Frame 22.png',
      title: "A Message From Tim Holmes: Child Abuse Prevention Month",
      date: 'April 20, 2022',
      link:''
    },
    {
      image:'Frame 21.png',
      title: "New MBH Alternative Response Team: Team expects to begin posting for the open positions soon",
      date: 'April 20, 2022',
      link:''
    },
    {
      image:'Frame 23.png',
      title: "Focus on High Reliability: HRO tool for April is “Standardized Handoffs",
      date: 'April 20, 2022',
      link:''
    }
  ]

  return(
    <div>
      <h1 className='title'>COMMENCEMENT BEHAVIORAL HEALTH</h1>
      <Link className='ti-but' to='/about'>
        <button className='title-button'>Learn More</button>
      </Link>
      <BackGround1 />
      <Header styleName='' header='In The News'/>
      <div className='categories-container'>
      {
        news.map(({image, title, date, link}) => (
          <FormatOne image={image} title={title} date={date} link={link}/>
        ))}
      </div>
      <ViewButton link='/news' />
      <Header className='case-header' header='Case Consultation' />
      <div className='categories-container'>
      {
        caseCon.map(({image, title, slogan, link}) => (
          <FormatTwo image={image} title={title} slogan={slogan} link={link}/>
        ))}
      </div>
      <ViewButton link='case' />
      <BackGround2 />
      <Header header='FNISH Programs' />
      <div className='categories-container'>
      {
        program.map(({image, title, slogan, link}) => (
            <FormatTwo image={image} title={title} slogan={slogan} link={link}/>
        ))}
      </div>
      <ViewButton link='/fnish' />
      <Header header='Resources' />
      <div className='categories-container'>
      {
        resource.map(({image, title, date, link}) => (
          <FormatOne image={image} title={title} date={date} link={link}/>
        ))}
      </div>
      <ViewButton link='/resources' />
      <BackGround2 />
      <Header header='Blog' />
      <div className='categories-container'>
      {
        blog.map(({image, title, date, link}) => (
          <FormatThree image={image} title={title} date={date} link={link}/>
        ))}
      </div>
      <ViewButton link='/blog' />
      <Footer />
    </div>
  )
}

export default Home;