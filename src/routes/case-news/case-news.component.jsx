import BackGround4 from "../../components/background4/background4.component";
import BackgroundTitle from "../../components/background-title/background-title.component";
import ResourceFormat1 from "../../components/resource-format1/resource-format1.component";
import Footer from "../footer/footer.component";
import BackGround6 from "../../components/background6/background6.component";

const CaseNews = () => {
  const newsCase = [
    {
      img:'past-case-1.png',
      title:"362 School Counselors on the Pandemic’s Effect on Children: ‘Anxiety Is Filling Our Kids’s",
      content:"In a survey of 362 school counselors nationwide by The New York Times in April, the counselors — licensed educators who teach these skills — described many students as frozen, socially and emotionally, at the age they were when the pandemic started.",
      background:'',
      link:'https://www.nytimes.com/interactive/2022/05/29/upshot/pandemic-school-counselors.html',
      date:'April 20, 2022'
    },
  ]

  return(
    <div>
      <BackGround4 />
      <BackgroundTitle title='Case Consultation News' slogan='Learn More Current Student Behavioral Health' />
      <div className='all-blog'>
      {
        newsCase.map(({img, title, content, background, link, date}) => (
          <ResourceFormat1 image={img} title={title} content={content} background={background} link={link} date={date}/>
        ))}
      </div>
      <Footer />
    </div>
  )
}


export default CaseNews;