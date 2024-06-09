import '../assets/styles/disclaimer.css';
import React, { useEffect } from 'react'; 
const Disclaimer = () =>
{
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return( 
        <>
            <div className="disclaimer-container">
                <h2 className='disclaimer-header'>DISCLAIMER</h2>
                <div className='disclaimer-text-content'>
                    <p className='text'>We receive commission from Asset Management Companies for investments made by our clients under our ARN Code. The commission receivable is subject to and as per the guidelines laid down by SEBI and the Asset Management Companies. The disclosure of commissions payable to us for the different schemes of various mutual funds as per clause 4(d) of the SEBI Circular No. SEBI/IMD/CIR No. 4/168230 dated June 30, 2009 is provided (hereinbelow table).</p>
                    <p className='text'>Details of Scheme level commission on Mutual funds are available with the Relationship Managers and would be produced on demand. This is on a best effort basis and rates are updated as and when actual rates are received from AMCs.</p>
                </div>
            </div>
        </>
    );
};

export default Disclaimer;