
import './send-button.style.css';

const SendButton = (props) => {

  const sendValue = () => {
    console.log('hi');
  }

  return (
    <button className='send-button'>
         Send
    </button>
  )
}

export default SendButton;