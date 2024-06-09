import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import '../assets/styles/home.css';

const Home = () => {
    return (
        <div className='row home' id='home'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12  builders'>
                <div className='builder'><center><h1 style={{fontWeight: 800, fontSize: '3.4em'}}>Your <span className='builder-box'>Wealth Partner.</span></h1></center></div>
            </div>
            <div className='row why-content'>
                <div className='col-xl-3 col-lg-4 col-md-3 col-sm-12 col-xs-12 why-heading'>
                    <TypeWriterEffect textStyle={{fontFamily: 'Inter', fontWeight:800}} startDelay={100} cursorColor='#DADADA' text='Why Invest 💸?' typeSpeed={100} loop={true} />
                </div>
                <div className='col-xl-9 col-lg-8 col-md-9 col-sm-12 col-xs-12'>
                    <p className='why-text'>
                    <span style={{fontWeight: '800', fontSize: '23px'}}>“</span>Investing is not about predicting the Future; it’s about preparing for it. 
                    </p>
                    <p className='why-text'>
                    Focus on Risk Management and Long-term Value Creation.<span style={{fontWeight: '800', fontSize: '23px'}}>“</span>
                    </p>
                </div>
            </div>

        </div>
    );
} 

export default Home;