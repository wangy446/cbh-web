import './resource.style.css';

const ResourceFormat1 = (props) => {
  return(
    <div className='blogs-container'>
      <div>{props.background}</div>
      <a className='blog-link' href={props.link}>
      <div className='blog-container'>
        <img className='blog-img' src={require('../../asset/'+ props.image)} alt='blog-img' />
        <div className="blogs">
          <h1 className='blog-title'>{props.title}</h1>
          <p className='blog-content'>{props.content}</p>
        </div>
      </div>
      <p className='blog-date'>{props.date}</p>
      </a>
    </div>
  )
}

export default ResourceFormat1;