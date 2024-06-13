import '../assets/styles/kyc.css';

const Kyc = () => {
    return(
        <>
        <div className="kyc">
            <h2 className='kyc-header'>KYC Validation</h2>
            <div class="validation-section">
            <h2>KYC Mobile / Email Validation Links:</h2>
            <div class="button-row">
                <div class="button-container">
                    <a href="https://camskra.com/PanDetailsUpdate.aspx" target="_blank" rel="noreferrer">
                        <button class="button">CAMS KRA <span class="external-link-icon">🔗</span></button>
                    </a>
                </div>
                <div class="button-container">
                    <a href="https://validate.cvlindia.com/CVLKRAVerification_V1/" target="_blank" rel="noreferrer">
                        <button class="button">CVL KRA <span class="external-link-icon">🔗</span></button>
                    </a>
                </div>
            </div>
            <div class="button-row">
                <div class="button-container">
                    <a href="https://www.karvykra.com/KYC_Validation/Default.aspx" target="_blank" rel="noreferrer">
                        <button class="button">KARVY KRA <span class="external-link-icon">🔗</span></button>
                    </a>
                </div>
                <div class="button-container">
                    <a href="https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientinitiatedKYC" target="_blank" rel="noreferrer">
                        <button class="button">NDML KRA <span class="external-link-icon">🔗</span></button>
                    </a>
                </div>
            </div>
        </div>

        <div class="validation-section">
            <h2>PAN - Aadhaar Validation Links:</h2>
            <div class="button-row">
                <div class="button-container">
                    <a href="https://camskra.com/pan_aadhaarlink.aspx" target="_blank" rel="noreferrer">
                        <button class="button">CAMS KRA <span class="external-link-icon">🔗</span></button>
                    </a>
                </div>
                <div class="button-container">
                    <a href="https://validate.cvlindia.com/CVLKRAVerification_V1/" target="_blank" rel="noreferrer">
                        <button class="button">CVL KRA <span class="external-link-icon">🔗</span></button>
                    </a>
                </div>
            </div>
            <div class="button-row">
                <div class="button-container">
                    <a href="https://www.karvykra.com/KYC_Validation/Default.aspx" target="_blank" rel="noreferrer">
                        <button class="button">KARVY KRA <span class="external-link-icon">🔗</span></button>
                    </a>
                </div>
                <div class="button-container">
                    <a href="https://kra.ndml.in/ClientInitiatedKYC-webApp/#/ClientinitiatedKYC" target="_blank" rel="noreferrer">
                        <button class="button">NDML KRA <span class="external-link-icon">🔗</span></button>
                    </a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Kyc;