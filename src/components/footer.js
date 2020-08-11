import React from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="w3-center">
                <div className="w3-xlarge">
                    <i className="fa fa-facebook-official w3-hover-opacity" />
                    <i className="fa fa-instagram w3-hover-opacity" />
                    <i className="fa fa-snapchat w3-hover-opacity" />
                    <i className="fa fa-pinterest-p w3-hover-opacity" />
                    <i className="fa fa-twitter w3-hover-opacity" />
                    <i className="fa fa-linkedin w3-hover-opacity" />
                </div>
                <p>Powered by <a title="Tasdeeq" className="w3-hover-text-black" style={{ color: 'white' }} href="https://www.tasdeeq.org/">TASDEEQ</a></p>
            </footer>

        );
    }
}
export default Footer;