import React from "react";
import Office1 from '../assets/images/about/office-1.jpg';
import Office2 from '../assets/images/about/office-2.jpg';
import Office3 from '../assets/images/about/office-3.jpg';
import Office4 from '../assets/images/about/office-4.jpg';
import Office5 from '../assets/images/about/office-5.jpg';
import Meenakshi from '../assets/images/about/Meenakshi.png';
import Rishabh from '../assets/images/about/Rishabh.png';
import '../assets/styles/about.css';

const About = () => {
    return (
    <div className="row about" id="about">
        <div className='row about-container'>
            <div className='col-5 line-container'><hr className='line'></hr></div>
            <div className='col-2 contact-header'><center><span>About</span></center></div>
            <div className='col-5 line-container'><hr className='line'></hr></div>
            <div className='row yellow-line'></div>
        </div>
        <div className="row" style={{marginTop: '2%'}}>
            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
                <div className='contact-header'><span>Mrs. Meenakshi Rajesh Sikchi</span></div>
                <p className="about-content">
                    Meenakshi Rajesh Sikchi is the founder of Rainbow Financial Services. She has an experience of over 17 years in the field of investment services. 
                    Her personal experience involving the sudden demise of her husband, Mr. Rajesh Vimalkishore Sikchi, in 2006 helped her realise the importance of 
                    insurance products like term plan and investments in one’s life. She wanted to use this experience to help families and the society in securing 
                    their financial future.She started Rainbow Financial Services with the motive to help every individual in attaining financial freedom, and to 
                    achieve their investment objectives. She strongly believes that one does not need to be wealthy to be an investor but an investor to be wealthy. 
                    Over the years, she has used her experience and intelligence to provide quality financial services to her clients.
                </p>  
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 founder-img-container">
                <img
                    src={Meenakshi}
                    alt="Mrs. Meenakshi Rajesh Sikchi"
                    className="founder-img"
                />
            </div>
        </div>
        <div className="row" style={{marginTop: '60px'}}>
            <div className="col-xl-4 col-lg-8 col-md-6 col-sm-12 col-xs-12">
                <div className="founder-img-container">
                    <img
                        src={Rishabh}
                        alt="Mr. Rishabh Sikchi"
                        className="founder-img"
                    />
                </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
                <div className='contact-header'><span>Mr. Rishabh Sikchi</span></div>
                <p className="about-content">
                    Rishab has been working with the Firm over the course of the last 8 years. He has passed all the three levels of the Chartered Financial Analyst Program, USA. 
                    Rishab joined Rainbow Financial Services with a vision to help investors in making investment choices based on their risk appetite, and 
                    wealth creation. Since his late teens, he has always had a keen interest in financial services.  He has developed his skills and gained trust of the firm’s clients due to his great insights, unique views, and passion for excellence. Rishab is quite passionate about teaching and guiding people. He holds 
                    weekly trainings and seminars for his staff on subjects ranging from what are mutual funds, concept of risk management, importance of compounding etc.
                </p>  
            </div>
        </div>
    </div>
    

    );
}

export default About;