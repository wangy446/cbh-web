import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import BackGround5 from "../../components/background5/background5.component";
import './resource.style.css';
import Footer from "../footer/footer.component";
import ResourceFormat1 from "../../components/resource-format1/resource-format1.component";

const Resource = () => {
  const resource = [
    {
      img:'Frame 55.png',
      title:"Peer Health Educators help students meet life's challenges",
      content:'Peer Health Educators are current undergraduate and graduate students who give interactive workshops on health and wellness topics such as mental health, sleep, healthy relationships and alcohol use. Sharing evidence-based knowledge, skills and campus resources, these workshops are aimed at promoting life-long behaviors that support health, self-growth and meaningful connection. Workshops can be requested for UW students by anyone — faculty, staff, students, registered student organizations or departments.',
      background:'',
      link:'https://www.youtube.com/watch?v=T7kyZ5z6Evg',
      date:''
    },
    {
      img:'Frame 56.png',
      title:'Peer to peer suicide prevention model ',
      content:'Hope Squad is a peer-to-peer suicide prevention program. Hope Squad members are nominated by their classmates as trustworthy peers and trained by advisors. The program reduces youth suicide through education, training, and peer intervention.',
      background:<BackGround5 />,
      link:'https://hopesquad.com/',
      date:''
    },
    {
      img:'Frame 57.png',
      title:'Rosen, Murkowski Introduce Bipartisan Bill to Address K-12 Student Mental Health Crisis',
      content:'Clark County School District Has Reported An Increase In Student Suicides While Schools Were Closed For In-Person Learning, Rosen Bill Provides Resources To Address That.',
      background:'',
      link:'https://www.rosen.senate.gov/rosen-murkowski-introduce-bipartisan-bill-address-k-12-student-mental-health-crisis',
      date:''
    },
    {
      img:'Frame 58.png',
      title:'Sound alarm for kids',
      content:'Sound the Alarm for Kids seeks to raise awareness of the national emergency in child and adolescent mental health accelerated by the pandemic',
      background:<BackGround5 />,
      link:'https://www.soundthealarmforkids.org/principles/',
      date:''
    },
    {
      img:'Frame 59.png',
      title:'School based health alliance',
      content:'Founded in 1995, the School-Based Health Alliance (SBHA) is a nonproﬁt organization that advances and informs more than 2,500 school-based health care programs, enabling them to provide high-quality care to the nation’s most vulnerable children. SBHA also supports a network of 22 state afﬁliates, collaborates with partner organizations in the school health ﬁeld, and serves as a resource to policymakers in the education and health sectors.',
      background:'',
      link:'https://www.sbh4all.org/',
      date:''
    }
  ]

  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='Resource' slogan='Explore More Helpful Programs' />
      <div className='all-blog'>
      {
        resource.map(({img, title, content, background, link, date}) => (
          <ResourceFormat1 image={img} title={title} content={content} background={background} link={link} date={date}/>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Resource;