import React, {useState} from 'react';
import {MdOutlineLocalPhone, MdOutlineEmail} from 'react-icons/md';
import axios from 'axios';
import '../assets/styles/contact.css';
import ContactBg from '../assets/images/contact.jpg'

const Contact = () => {

    const [rMessage, setRMessage] = useState('');
    const [result, setResult] = useState('alert-success');
    const [show, setShow] = useState(true);
    const onSend = async () => {
    
        if(document.getElementById('exampleFormControlInput1').value.length===0 || document.getElementById('exampleFormControlInput2').value.length===0
            || document.getElementById('exampleFormControlInput1').value.length===0 || document.getElementById('exampleFormControlInput3').value.length===0) {
            alert('Please fill in the details before submitting the message');
        }
        
        else if(document.getElementById('exampleFormControlInput1').value.length <= 10) {
            alert('Please enter 10 digits for the Mobile Number.');
        }

        else {
            let formData = new FormData();
            formData.append("email", document.getElementById('exampleFormControlInput1').value);
            formData.append("fullname", document.getElementById('exampleFormControlInput2').value);
            formData.append("mobile", document.getElementById('exampleFormControlInput3').value);
            formData.append("message", document.getElementById('exampleFormControlTextarea1').value);

            const result = await axios.post('http://localhost/vilaash/api/contact.php', formData);
            if(result.status===200) {
                setShow(false);
                setRMessage('Your message has been sent successfully.');
                document.getElementById('contact-form').reset();
            }
            else {
                setShow(false);
                setResult('alert-error');
                setRMessage(`Request failed with code: ${result.status}`)
            }
        }

    }

    return (
        <div className='row contact' id='contact' style={{ '--contact-img': `url(${ContactBg})` }}>
            <div className='row contact-container'>
                <div className='col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4 line-container'><hr className='line'></hr></div>
                <div className='col-xl-2 col-lg-6 col-md-6 col-sm-6 col-xs-4 contact-header'><center><span>Contact Us</span></center></div>
                <div className='col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4 line-container'><hr className='line'></hr></div>
                <div className='row yellow-line'></div>
            </div>
            <div className='row' style={{marginTop: '2%', marginLeft: '3%'}}>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 contact-details'>
                    <span style={{fontSize: '2em', fontWeight: '700'}}>We are here for questions or consulting</span>
                    <hr></hr>
                    <div className='row' style={{marginTop: '5%', color:'white'}}>
                        <p className='contact-name'>Mrs. Meenkashi Rajesh Sikchi </p>
                        <a href="tel:+91937-015-4501" style={{textDecoration: 'none', color: 'white'}} > <p className='contact-phone'><MdOutlineLocalPhone size={25}/> &nbsp; +91-9370154501</p> </a>
                    </div>
                    <div className='row' style={{marginTop: '5%', color:'white'}}>
                        <p className='contact-name'>Mr. Rishab Rajesh Sikchi</p>
                        <a href="tel:+91902-837-3696" style={{textDecoration: 'none', color: 'white'}} > <p className='contact-phone'><MdOutlineLocalPhone size={25}/> &nbsp; +91-9028373696</p> </a>
                        <a href = "mailto:mrsikchi@gmail.com" style={{textDecoration: 'none', color: 'white'}}> <p className='contact-email'><MdOutlineEmail size={25}/> &nbsp; mrsikchi@gmail.com</p> </a>  
                    </div>
                </div>

                <div className='col-xl-8 col-lg-8 col-md-6 col-sm-6 col-xs-6 contact-box'>
                    <div style={{textAlign: 'center'}}><span style={{fontSize: '1.8em', fontWeight: '700'}}>Send us your query.</span></div>
                    <div style={{textAlign: 'center'}}><span style={{fontSize: '1em', fontWeight: '400'}}>Our team will contact you within 24 hours</span></div>
                    <center><div className={`alert ${result}`} style={{width: '60%'}} hidden={show} > {rMessage} </div></center>

                    <form className='contact-form' id='contact-form' onSubmit={(event) => event.preventDefault()}>
                        <div className="form-group">
                            <label className='contact-label'>Email address <span style={{color: 'red'}}>*</span></label>
                            <input type="email" className="form-control contact-input" id="exampleFormControlInput1" placeholder="akhil@gmail.com" />
                        </div>
                       <div className='form-group'>
                            <label className='contact-label'>Full Name <span style={{color: 'red'}}>*</span></label>
                            <input type="text" className='form-control contact-input' id="exampleFormControlInput2" placeholder='Akhil' />
                       </div>
                       <div className='form-group'>
                            <label className='contact-label'>Mobile Number <span style={{color: 'red'}}>*</span></label>
                            <input type="tel" className='form-control contact-input' id="exampleFormControlInput3" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='+91 9370154501' />
                       </div>
                        <div className="form-group">
                            <label className='contact-label' htmlFor="exampleFormControlTextarea1">Enter your message <span style={{color: 'red'}}>*</span></label>
                            <textarea className="form-control contact-input" id="exampleFormControlTextarea1" ></textarea>
                        </div>
                        <center><button className='contact-submit btn btn-primary md-2' type='submit' onClick={onSend}> Submit </button></center>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;