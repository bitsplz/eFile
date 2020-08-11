import React from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';
//import Navbar from './navbar';
import Footer from './footer';
import Tasdeeq from './tasdeeq.png';

class About extends React.Component {
    render() {
        return (
            <div>
               
                <div style={{margin: '0 5% 0 5%' }}>
                    {/* About Section */}
                    <div className="w3-row w3-white w3-padding-64" id="about">
                        <div id="tasdeeq" className="w3-col m6 w3-padding-large">
                            <img src={Tasdeeq} width={600} height={750} className="w3-round w3-image w3-opacity-min" alt="Table Setting"/>
                        </div>
                        <div className="container w3-col m6 w3-padding-large">
                            <h1 className="w3-center">About eFile.pk</h1><br />
                            <p className="w3-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p className="w3-large w3-text-grey w3-hide-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</p>
                        </div>

                    </div>
                    <div className="w3-row w3-white w3-padding-64" id="about">
                        <div id="tasdeeq" className="w3-col m6 w3-padding-large w3-hide-small">
                            <img src={Tasdeeq} width={600} height={750} className="w3-round w3-image w3-opacity-min" alt="Table Setting" />
                        </div>
                        <div className="container w3-col m6 w3-padding-large">
                            <h1 className="w3-center">Message from the Director</h1><br />
                            <p className="w3-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p className="w3-large w3-text-grey w3-hide-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    {/* End page content */}
                </div>
                <Footer />
            </div>
        );
    }
}
export default About;