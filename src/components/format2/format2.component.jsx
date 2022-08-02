import './format2.style.css';

const FormatTwo = (props) => {
  console.log(props.slogan)
  return (
    <div className='category-container2'>
      <div className='category-body-container2'>
        <img className='image2' src={require('../../asset/'+ props.image)} alt={props.title} />
        <h1 className='titles2'>{props.title}</h1>
        <p className='slogan2'>{props.slogan}</p>
      </div>
    </div>

  )
}

export default FormatTwo;