import React from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';
import {Link} from 'react-router-dom';
class ThirdSection extends React.Component {
    render() {
        return (
            <section className="w3-container w3-center w3-white" id="services" style={{ padding: '18px 16px' }}>
                <h3><b>Our Services</b></h3>
                <p className="w3-large">Choose a service that fits your needs.</p>
                <div className="w3-row-padding" style={{ marginTop: '44px' }}>
                    <div className="w3-third w3-section">
                        <ul className="w3-ul w3-white w3-hover-shadow">
                            <li className="w3-light-green w3-text-black w3-xlarge w3-padding-32">File Tax Through an Agent</li>
                            <li className="w3-padding-16"><b>Contact</b> Agent</li>
                            <li className="w3-padding-16"><b>Agent</b> Fills your Form</li>
                            <li className="w3-padding-16"><b>Confidentiality</b> of Data Maintained</li>
                            <li className="w3-padding-16"><b>Endless</b> Customer Support</li>
                            <li className="w3-padding-16">
                                <h2 className="w3-wide">PKR 2,500</h2>
                                <span className="w3-opacity">+2,500 Agent Fee</span>
                            </li>
                            <Link to="/viewagents">
                            <li className="w3-light-grey w3-padding-24">
                                <button className="w3-button w3-green w3-padding-large" style={{ borderRadius: '40px' }}>
                                Find Agent</button>
                            </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="w3-third">
                        <ul className="w3-ul w3-white w3-hover-shadow">
                            <li className="w3-green w3-xlarge w3-padding-48">File Tax Online</li>
                            <li className="w3-padding-16"><b>Visit</b> Website</li>
                            <li className="w3-padding-16"><b>You</b> Fill you Form</li>
                            <li className="w3-padding-16"><b>Risk</b> of wrong information <b>eliminated</b></li>
                            <li className="w3-padding-16"><b>Endless</b> Customer Support</li>
                            <li className="w3-padding-16">
                                <h2 className="w3-wide">PKR 5,000</h2>
                                {/*span class="w3-opacity">per month</span*/}
                            </li>
                            <Link to="/signup">
                            <li className="w3-light-grey w3-padding-24">
                                <button className="w3-button w3-green w3-padding-large" style={{ borderRadius: '40px' }}>Sign Up</button>
                            </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="w3-third w3-section">
                        <ul className="w3-ul w3-white w3-hover-shadow">
                            <li className="w3-light-green w3-text-black w3-xlarge w3-padding-32">Tax Calculator</li>
                            <li className="w3-padding-16"><b>Visit</b> Website</li>
                            <li className="w3-padding-16"><b>Answer</b> Questions</li>
                            <li className="w3-padding-16"><b>-</b></li>
                            <li className="w3-padding-16"><b>Endless</b> Customer Support</li>
                            <li className="w3-padding-16">
                                <h2 className="w3-wide">Free</h2>
                                {/*span class="w3-opacity">per month</span*/}
                            </li>
                            <li className="w3-light-grey w3-padding-24">
                                <button disabled className="w3-button w3-green w3-padding-large" style={{ borderRadius: '40px' }}>Tax Calculator</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        );
    }
}
export default ThirdSection;