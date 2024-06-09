import '../assets/styles/disclosure.css';
import React, { useEffect } from 'react'; 
const Disclosure = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return(
        <>
            <div className="disclosure-container">
                <h2 className='disclosure-header'>DISCLOSURE</h2>
                <div className='disclosure-text-content'>
                    <p className='text'>
                        By accessing this website, you have read, understood and agreed to be legally bound by the terms of the following disclaimer.
                        This website is created for informational purposes only. Nothing contained in this website should be construed as investment advice or personal recommendation to buy / sell / hold any investment product. We make no representation or warranty (expressed or implied) to any investor on advisability of investing in any investment product or its future performance.
                        All Mutual Funds are subject to market risks. Please read all Scheme related documents carefully before investing. We advise investors to read data and risk factors of various mutual fund schemes available in the Scheme Information Document (SID), Statement of Additional Information (SAI), Key Information Memorandum (KIM), etc. The value of any investment may rise and/or fall as a result of market changes and this website is not intended to predict actual performance and/or success of any scheme or other investment product and no assurances are given with respect thereto. Past performance is not indicative of future returns.
                        We are under no obligation to provide investment advice concerning, any investment product for you. However, with respect to mutual fund schemes, we endeavour to distribute only such mutual fund products which are suitable and appropriate for you, as allowed under the AMFI Guidelines, or the various circulars issued thereunder. You must determine on your own behalf or through investment adviser, as the case may be, the merits and risks of any mutual fund schemes or any other investment product as well as its suitability for you. We do not make any warranty (express or implied) of any investment product and do not assume any responsibility for, and shall not be liable for any losses or damages of any kind resulting from investment in any investment product arising due to market loss of the investment product. Please note that we are not registered investment advisers and do not provide investment advice on any investment product.
                        We receive commission from Asset Management Companies for investments made by our clients under our ARN Code. The commission receivable is subject to and as per the guidelines laid down by SEBI and the Asset Management Companies.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Disclosure;