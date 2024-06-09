import React from 'react';
import Logo from '../assets/images/logo.gif';
import '../assets/styles/navigation.css';

const Navigation = ({active, updateActiveTab}) => {

    const hostPath = window.location.pathname;

    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <a href='/'>
                    <img className='logo img-fluid' src={Logo} alt='Rainbow Financial Services' />
                </a>
            </div>
            <div className='navbar-links'>
                {
                    hostPath === '/' ?
                        <ul className='nav-links'>
                            <li href='#home' className={`nav-item ${active==='Home'?'active':null}`} onClick={() => updateActiveTab('Home')}>
                                <a href='#home' style={{textDecoration: 'none', color: 'whitesmoke'}}> Home</a>
                            </li>
                            <li className={`nav-item ${active==='Projects'?'active':null}`} onClick={() => updateActiveTab('Projects')}>
                                <a href='#projects' style={{textDecoration: 'none', color: 'whitesmoke'}}> Services </a>
                            </li>
                            <li className={`nav-item ${active==='About'?'active':null}`} onClick={() => updateActiveTab('About')}>
                                <a href='#about' style={{textDecoration: 'none', color: 'whitesmoke'}}>About</a>
                            </li>
                            <li href='#contact' className={`nav-item ${active==='Contact'?'active':null}`} onClick={() => updateActiveTab('Contact')}>
                                <a href='#contact' style={{textDecoration: 'none', color: 'whitesmoke'}}>Contact</a>
                            </li>
                        </ul>
                    :
                        <ul className='nav-links'>
                            <li href='#home' className={`nav-item ${active==='Home'?'active':null}`} onClick={() => updateActiveTab('Home')}>
                                <a href='../#home' style={{textDecoration: 'none', color: 'whitesmoke'}}> Home</a>
                            </li>
                            <li className={`nav-item ${active==='Projects'?'active':null}`} onClick={() => updateActiveTab('Projects')}>
                                <a href='../#projects' style={{textDecoration: 'none', color: 'whitesmoke'}}> Services </a>
                            </li>
                            <li className={`nav-item ${active==='About'?'active':null}`} onClick={() => updateActiveTab('About')}>
                                <a href='../#about' style={{textDecoration: 'none', color: 'whitesmoke'}}>About</a>
                            </li>
                            <li href='#contact' className={`nav-item ${active==='Contact'?'active':null}`} onClick={() => updateActiveTab('Contact')}>
                                <a href='../#contact' style={{textDecoration: 'none', color: 'whitesmoke'}}>Contact</a>
                            </li>
                        </ul>
                }
            </div>
            <div className="button-container">
                <a href="https://wealthelite.in/client-login" target='_blank' rel="noreferrer"><button className = "client-button">Client Login</button></a>
            </div> 
        </nav>
    );
}

export default Navigation;