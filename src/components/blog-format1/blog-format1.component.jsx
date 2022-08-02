import './blog.style.css';
import {Link} from 'react-router-dom';

const BlogFormat1 = (props) => {
  return(
    <div className='blogs-container'>
      <div>{props.background}</div>
      <Link className='blog-link' to={props.link}>
      <div className='blog-container'>
        <img className='blog-img' src={require('../../asset/'+ props.image)} alt='blog-img' />
        <div className="blogs">
          <h1 className='blog-title'>{props.title}</h1>
          <p className='blog-content'>{props.content}</p>
        </div>
      </div>
      <p className='blog-date'>{props.date}</p>
      </Link>
    </div>
  )
}

export default BlogFormat1;