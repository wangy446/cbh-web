import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import ResourceFormat1 from "../../components/resource-format1/resource-format1.component";
import Footer from "../footer/footer.component";
import BackGround6 from "../../components/background6/background6.component";

const PastCase = () => {
  const pastCase = [
    {
      img:'Frame 27.png',
      title:"How Research Can Support K-12 youth behavioral health and well-beings",
      content:"Congratulations to Dr. Cheng, Ph.D. Alum '17 and Assistant Professor at the UWT School of Nursing and Healthcare Leadership, who received the 2022 Population Health Initiative Research Grant Award to build community capacity among MultiCare, Tacoma Public Schools, and University Washington to support K-12 youth behavioral health and well-being.",
      background:'',
      link:'https://www.facebook.com/photo?fbid=446628000644191&set=a.397811768859148',
      date:'April 20, 2022'
    },
    {
      img:'Frame 28.png',
      title:"How Research Can Support K-12 youth behavioral health and well-beings",
      content:"Congratulations to Dr. Cheng, Ph.D. Alum '17 and Assistant Professor at the UWT School of Nursing and Healthcare Leadership, who received the 2022 Population Health Initiative Research Grant Award to build community capacity among MultiCare, Tacoma Public Schools, and University Washington to support K-12 youth behavioral health and well-being.",
      background:<BackGround6 />,
      link:'https://www.facebook.com/photo?fbid=446628000644191&set=a.397811768859148',
      date:'April 20, 2022'
    },
    {
      img:'Frame 29.png',
      title:"How Research Can Support K-12 youth behavioral health and well-beings",
      content:"Congratulations to Dr. Cheng, Ph.D. Alum '17 and Assistant Professor at the UWT School of Nursing and Healthcare Leadership, who received the 2022 Population Health Initiative Research Grant Award to build community capacity among MultiCare, Tacoma Public Schools, and University Washington to support K-12 youth behavioral health and well-being.",
      background:'',
      link:'https://www.facebook.com/photo?fbid=446628000644191&set=a.397811768859148',
      date:'April 20, 2022'
    },
  ]
  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='Past Case Consultation' slogan='Learn More About Past Case Consultation' />
      <div className='all-blog'>
      {
        pastCase.map(({img, title, content, background, link, date}) => (
          <ResourceFormat1 image={img} title={title} content={content} background={background} link={link} date={date}/>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default PastCase;