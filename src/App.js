import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Login from './components/Login';
import Disclaimer from './components/Disclaimer';
import Disclosure from './components/Disclosure';
import PrivacyPolicy from './components/PrivacyPolicy';
const App = () => {
    return (
        <div style={{backgroundColor:'rgb(252,252,252)'}}>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Main />} />
                    <Route path='/admin' element={ <Login />} />
                    <Route path='/disclaimer' element={<Disclaimer />} />
                    <Route path='/disclosure' element = {<Disclosure/>} />
                    <Route path='/privacy-policy' element = {<PrivacyPolicy/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;