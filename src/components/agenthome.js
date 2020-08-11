import React from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';
//import Navbar from './navbar';
import Footer from './footer';
import {Link} from 'react-router-dom';
import './css/agent.css';
class Agenthome extends React.Component {
    render() {
        return (
            <div>
                
                <br />
                <div className="col-md-4 col-xs-9" id="agent-home">
                    <div className="box">
                        <h2 style={{ textAlign: 'center', paddingBottom: '10%' }}>AGENT HOME</h2>
                        <div className="col-md-15" style={{ marginBottom: '4%' }}>
                            <Link to="/">
                            <input className="btn btn-primary col-md-9 col-sm-8 col-xs-8" type="submit" Value="File Tax For Customer" />
                            </Link>
                        </div>
                        <div className="col-md-15" style={{ marginBottom: '4%' }}>
                        <Link to="/viewcustomers">
                            <input className="btn btn-primary col-md-9 col-sm-8 col-xs-8" type="submit" Value="View Customers" />
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Agenthome;