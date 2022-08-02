import './background-title.style.css';

const BackgroundTitle = (props) => {
  return(
    <div>
      <h1 className='bg-title'>{props.title}</h1>
      <p className='bg-slogan'>{props.slogan}</p>
    </div>
  )
}

export default BackgroundTitle;
