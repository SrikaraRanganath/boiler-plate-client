import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Login from './components/Login';
import Disclaimer from './components/Disclaimer';
import Disclosure from './components/Disclosure';
import PrivacyPolicy from './components/PrivacyPolicy';
import Kyc from './components/Kyc';

const App = () => {

    const [active, setActive] = useState('Home');

    const updateActiveTab = (newActiveTab) => {
        setActive(newActiveTab);
    };

    return (
        <div style={{backgroundColor:'rgb(252,252,252)'}}>
            <Navbar active={active} updateActiveTab={updateActiveTab} />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Main />} />
                    <Route path='/admin' element={ <Login />} />
                    <Route path='/disclaimer' element={<Disclaimer />} />
                    <Route path='/disclosure' element = {<Disclosure/>} />
                    <Route path='/privacy-policy' element = {<PrivacyPolicy/>} />
                    <Route path='/kyc' element = { <Kyc/>} />
                </Routes>
                <Footer updateActiveTab={updateActiveTab} />
            </BrowserRouter>
        </div>
    );
}

export default App;