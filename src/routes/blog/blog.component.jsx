import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import BlogFormat1 from "../../components/blog-format1/blog-format1.component";
import BackGround5 from "../../components/background5/background5.component";
import './blog.style.css';
import Footer from "../footer/footer.component";

const Blog = () => {
  const blogs = [
    {
      img:'Frame 14.png',
      title:'A message from Tim Holmes',
      content:'As a Behavioral Health Network with many child and family programs and services, we are very aware of the devastating effects of childhood abuse and neglect. We know that a child’s brain development is impacted by early experiences and that a safe and nurturing childhood is critical for their mental health and wellbeing. We also know that poverty, racism and generational trauma can create family pressures that can foster neglect and abuse. And this violence not only harms children, it also has far-reaching consequences for families, neighborhoods, schools and communities.',
      date:'April 20, 2022',
      background:<BackGround5 />,
      link:'/a-message-from-tim-holmes'
    },
    {
      img:'Frame 15.png',
      title:'New MBH Alternative Response Team',
      content:'MultiCare Behavioral Health Crisis Services has partnered with Pierce County Human Services to create a new community Alternative Response Team. This team will include a supervisor, crisis therapist and up to four crisis care coordinators who will partner with Pierce County sheriff’s deputies to respond to emergency calls involving non-criminal crisis situations.',
      date:'April 20, 2022',
      background:'',
      link:'/new-mbh-alternative-response-team'
    },
    {
      img:'Frame 17.png',
      title:'Focus on High Reliability',
      content:'Our HRO theme for this quarter is Pay Attention to Details, and our HRO tool for April is “Standardized Handoffs.” Posters are displayed throughout our facilities and leaders will be highlighting this tool throughout the month.',
      date:'March 31, 2022',
      background:<BackGround5 />,
      link:'/focus-on-high-reliability'
    },
    {
      img:'Frame 50.png',
      title:'Navos Completes Successful Joint Commission Survey',
      content:'Navos is a complex organization with programs that fall under the behavioral health survey manual as well as the hospital survey manual, but after an intense four day survey earlier this month, the Joint Commission gave Navos a highly complimentary report.',
      date:'March 31, 2022',
      background:'',
      link:'/navos-completes-successful-joint-commission-survey'
    },
    {
      img:'Frame 51.png',
      title:'Behavioral Health Foundation Grant',
      content:'The Behavioral Health Foundation is soliciting applications for proposals for the 2022 allocation cycle.',
      date:'March 31, 2022',
      background:<BackGround5 />,
      link:'/behavioral-health-foundation-grant'
    },
    {
      img:'Frame 52.png',
      title:'Changing Minds',
      content:'Join us virtually on Wednesday, May 4, from noon-12:45pm for our Changing Minds event, where you’ll learn how our network is responding to the mental health crisis facing so many of our young people today.',
      date:'March 31, 2022',
      background:'',
      link:'/changing-minds'
    }
  ]
  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='Blog' slogan='Learn More About Our Current Updates' />
      <div className='all-blog'>
      {
        blogs.map(({img, title, date, content, background, link}) => (
          <BlogFormat1 image={img} title={title} date={date} content={content} background={background} link={link}/>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Blog;