import './input-field2.style.css';
import school from '../../asset/teacher.png';
import gender from '../../asset/teacher.png';
import conselor from '../../asset/profile.png';
import age from '../../asset/calculator.png';
import summary from '../../asset/message-text.png';
import detail from '../../asset/messages-2.png';


const InputField2 = (props) => {
  const id = (name) => {
    return document.getElementById(name);
  }

  const gen = (query) => {
    return document.createElement(query);
  }

  const qs = (selector) => {
    return document.querySelector(selector);
  }

  const qsa = (query) => {
    return document.querySelectorAll(query);
  }

  const addSend = async (event) => {
    let data = new FormData(event.target);
    await sendResponse(data)
    return true
  }

  const sendResponse = async (data) => {

    // Send data to the backend via POST
    await fetch('http://localhost:5000/fnish', {  // Enter your IP address here
      method: 'POST',
      mode: "cors",
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify(Object.fromEntries(data)) // body data type must match "Content-Type" header
    })

  }

  return (
    <form className='input-containers' onSubmit={addSend}>
      <div className='input-container'>
        <div className='school1'>
          <p className='input-title'>School Referral From (Counselors/Teachers/Nurse/Other)</p>
          <input className='input-field' name='referral' type='text' required/>
          <img className='input-image' src={school} alt='school'/>
        </div>
        <div className='school2'>
          <p className='input-title'>Student Name</p>
          <input className='input-field' name='name' type='text' required/>
          <img className='input-image' src={conselor} alt='school'/>
        </div>
        <div className='school3'>
          <p className='input-title'>Student Age</p>
          <input className='input-field' name='age' type='text' required/>
          <img className='input-image' src={age} alt='school'/>
        </div>
        <div className='school4'>
          <p className='input-title'>Student Grade</p>
          <input className='input-field' name='grade' type='text' required/>
          <img className='input-image' src={gender} alt='school'/>
        </div>
        <div className='school5'>
          <p className='input-title'>Student Address</p>
          <input className='input-field' name='address' type='text' required/>
          <img className='input-image' src={summary} alt='school'/>
        </div>
        <div className='school6'>
          <p className='input-title'>City</p>
          <input className='input-field' name='city' type='text'/>
          <img className='input-image' src={detail} alt='school'/>
        </div>
        <div className='school5'>
          <p className='input-title'>Zip Code</p>
          <input className='input-field' name='zip' type='text' required/>
          <img className='input-image' src={summary} alt='school'/>
        </div>
        <div className='school5'>
          <p className='input-title'>Parent/Guardian Name</p>
          <input className='input-field' name='parent' type='text' required/>
          <img className='input-image' src={summary} alt='school'/>
        </div>
        <div className='school5'>
          <p className='input-title'>Email Address</p>
          <input className='input-field' name='email' type='text' required/>
          <img className='input-image' src={summary} alt='school'/>
        </div>
        <div className='school5'>
          <p className='input-title'>Phone Number</p>
          <input className='input-field' name='phone' type='text' required/>
          <img className='input-image' src={summary} alt='school'/>
        </div>
        <div className='school5'>
          <p className='input-title'>Reason For Referral</p>
          <input className='input-field' name='reason' type='text' required/>
          <img className='input-image' src={summary} alt='school'/>
        </div>
      </div>
      <button className='input-button'>Send!</button>
    </form>
  )
}

export default InputField2;