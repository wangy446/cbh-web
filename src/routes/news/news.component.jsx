import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import BackGround5 from "../../components/background5/background5.component";
import './news.style.css';
import Footer from "../footer/footer.component";
import ResourceFormat1 from "../../components/resource-format1/resource-format1.component";

const News = () => {
  const resource = [
    {
      img:'Frame 60.png',
      title:"How Research Can Support K-12 youth behavioral health and well-beings",
      content:"Congratulations to Dr. Cheng, Ph.D. Alum '17 and Assistant Professor at the UWT School of Nursing and Healthcare Leadership, who received the 2022 Population Health Initiative Research Grant Award to build community capacity among MultiCare, Tacoma Public Schools, and University Washington to support K-12 youth behavioral health and well-being.",
      background:'',
      link:'https://www.facebook.com/photo?fbid=446628000644191&set=a.397811768859148',
      date:'April 20, 2022'
    },
    {
      img:'Frame 61.png',
      title:'Dr. Chieh Cheng To Address Youth Mental Health With Tacoma Public Schools, Multicare',
      content:'Dr. Chieh (Sunny) Cheng, assistant professor in UW Tacoma’s School of Nursing & Healthcare Leadership, has been awarded a grant through the University of Washington Population Health Initiative (PHI).',
      background:<BackGround5 />,
      link:'https://www.tacoma.uw.edu/news/dr-chieh-cheng-address-youth-mental-health-tacoma-public-schools-multicare',
      date:'April 20, 2022'
    },
    {
      img:'Frame 62.png',
      title:'UW Tacoma Professor Awarded Grant to Address Youth Mental Health',
      content:'Chieh (Sunny) Cheng, assistant professor in UW Tacoma’s School of Nursing and Healthcare Leadership, has been awarded a pilot research grant through the University of Washington Population Health Initiative (PHI) to develop and test behavioral health promotion approaches in schools.',
      background:'',
      link:'https://www.southsoundbiz.com/news/uw-tacoma-professor-awarded-grant-to-address-youth-mental-health/article_a9d26a0c-b500-11ec-b5c3-d3bbeed060a1.html',
      date:'April 20, 2022'
    }
  ]

  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='In The News' slogan='Read More About Current News' />
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

export default News;