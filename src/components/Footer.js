import React from "react";
import Amfi from "../assets/images/Amfi.jpg"
import {TfiLocationPin} from 'react-icons/tfi';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import { Link } from "react-router-dom";
import "../assets/styles/footer.css";

const Footer = () => {
    return (
        <div className="footer">
        <div className="row" style={{marginTop: '3%', width: '100%'}}>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 footer-infos">
                <div className="row footer-info">
                    <div className="footer-image-container">
                        <img  className="footer-image" src={Amfi} alt="AMFI"/>
                    </div>
                    <div className="footer-heading">
                        <h4>Rainbow Financial Services</h4>
                        <h5>Meenakshi Rajesh Sikchi</h5>
                    </div>
                    <div className="footer-subheading">
                        <p style={{marginBottom: '2px'}}><strong>ARN:</strong>52978</p>
                        <p><strong>EUIN:</strong>E054631</p>
                    </div>
                </div>
                <div className="row footer-info parent-about">
                    <p className="footer-about" style={{marginBottom: '0px'}}><strong>Since:</strong> August 31,2007</p>
                    <p className="footer-about"><strong>Current Validity:</strong> August 29, 2024</p>
                    <p style={{fontSize: '14px  '}}><strong>AMFI REGISTERED MUTUAL FUND DISTRIBUTOR </strong></p>
                </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-infos" >
                <h4>Contact</h4>
                <div className="row footer-info" >
                    <div className="left-div">
                        <span><TfiLocationPin size={35} className='rounded-icons'/> &nbsp;</span> 
                    </div>
                    <div  className="right-div">
                        <p style={{justifyContent:'center'}}><strong> Rainbow Financial Services C/o TV House, Siddharth  Bhuvan, Opp.Sahakar Bhavan,  Morsh Road Amravati – 444601.</strong> </p>
                    </div>
                </div>
                <div className="row footer-info">
                    <span><BsTelephone size={35} className='rounded-icons'/> <a href="tel:+91984-599-5815" style={{textDecoration: 'none', color: 'whitesmoke'}} > &nbsp; <strong>+080 26793240</strong> </a></span>
                </div>
                <div className="row footer-info">
                    <span><AiOutlineMail size={35} className='rounded-icons'/> <a href="mailto:vilaashcorp@gmail.com" style={{textDecoration: 'none',color: '#2596be'}} > &nbsp; <strong>rainbowfinserv@gmail.com</strong></a></span>
                </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12 col-xs-12 footer-infos footer-links">
                <h4>Links</h4>
                <div className="row footer-info">
                    <a className='footer-link' href='#home'>Home</a>
                </div>
                <div className="row footer-info">
                    <a className='footer-link' href='#projects'>Projects</a>
                </div>
                <div className="row footer-info">
                    <a className='footer-link' href='#about'>About</a>
                </div>
                <div className="row footer-info">
                    <a className='footer-link' href='#contact'>Contact</a>
                </div>
                <div className="row footer-info">
                   
                </div>
            </div>
        </div>
        <hr/>
        <div className="row footer-plug" style={{ paddingRight: '10px', width: '100%' }}>
            <div className="footer-copyright">
                <span style={{ whiteSpace: 'nowrap' }}>Copyright © {new Date().getFullYear()} rainbowfinserv. All rights reserved.</span>
            </div>
            <div className="redirect-container">
                <Link to='/disclaimer' className="redirect-link">Disclaimer</Link>
                <Link to='/disclosure' className="redirect-link">Disclosure</Link>
                <Link to='/privacy-policy' className="redirect-link">Privacy Policy</Link>
            </div>
        </div>
    </div>
    );
}

export default Footer;