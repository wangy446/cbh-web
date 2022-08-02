import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Blog from './routes/blog/blog.component';
import BlogContent1 from './routes/blog-content1/blog-content1.component';
import Resource from './routes/resource/resource.component';
import News from './routes/news/news.component';
import BlogContent2 from './routes/blog-content2/blog-content2.component';
import BlogContent3 from './routes/blog-content3/blog-content3.component';
import BlogContent4 from './routes/blog-content4/blog-content4.component';
import BlogContent5 from './routes/blog-content5/blog-content5.component';
import BlogContent6 from './routes/blog-content6/blog-content6.component';
import Case from './routes/case/case.component';
import PastCase from './routes/past-case/past-case.component';
import Fnish from './routes/fnish/fnish.component';
import CaseNews from './routes/case-news/case-news.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={(<Navigation /> )}>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/blog' element={<Blog />} />
        <Route path='/resources' element={<Resource />} />
        <Route path='/news' element={<News />} />
        <Route path='/case' element={<Case />} />
        <Route path='/fnish' element={<Fnish />} />
        <Route path='/past-case' element={<PastCase />} />
        <Route path='/case-news' element={<CaseNews />} />
        <Route path='/a-message-from-tim-holmes' element={<BlogContent1 />} />
        <Route path='/new-mbh-alternative-response-team' element={<BlogContent2 />} />
        <Route path='/focus-on-high-reliability' element={<BlogContent3 />} />
        <Route path='/navos-completes-successful-joint-commission-survey' element={<BlogContent4 />} />
        <Route path='/behavioral-health-foundation-grant' element={<BlogContent5 />} />
        <Route path='/changing-minds' element={<BlogContent6 />} />
      </Route>
    </Routes>
  );
}

export default App;
