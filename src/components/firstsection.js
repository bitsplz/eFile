import React from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';
import { Link } from 'react-router-dom';

const FirstSection = ({ currentUser }) => {

    return (
        <section className="w3-container w3-center" id="first" style={{ padding: '128px 16px', backgroundAttachment: 'fixed' }}>
            <h1 className="w3-margin w3-text-dark-green w3-jumbo">eFile.pk</h1>
            <h3 className="w3-xlarge w3-text-black">File Your Tax Online Efficiently</h3>
            {
                currentUser ?
                    <Link to="/signup"><button className="w3-button w3-green w3-padding-large w3-large w3-margin-top" style={{ borderRadius: '40px' }}>
                        File Online</button></Link>
                    :
                    <Link to="/signup"><button className="w3-button w3-green w3-padding-large w3-large w3-margin-top" style={{ borderRadius: '40px' }}>
                        Get Started</button></Link>
            }
        </section>

    );

}
export default FirstSection;