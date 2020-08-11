import React from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';
//import Navbar from './navbar';
import Footer from './footer';
import './css/table.css';
class Filers extends React.Component {
    render() {
        return (
            <div>
             
                <div>
                    <h3 style={{ textAlign: 'center', marginTop: '2%' }}>Customers</h3>
                    <div className="col-lg-8 col-md-4 col-xs-6 table100 ver1 m-b-110">
                        <div className="table100-head">
                            <table>
                                <thead>
                                    <tr className="row100 head">
                                        <th className="cell100 column1">Customer ID</th>
                                        <th className="cell100 column2">Name</th>
                                        <th className="cell100 column3">Mobile Number</th>
                                        <th className="cell100 column4">Email Address</th>
                                        {/*th class="cell100 column5">Spots</th*/}
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="table100-body js-pscroll">
                            <table>
                                <tbody>
                                    <tr className="row100 body">
                                        <td className="cell100 column1">0001</td>
                                        <td className="cell100 column2">Ali Ahmed</td>
                                        <td className="cell100 column3">0331-2266534</td>
                                        <td className="cell100 column4">cust1@gmail.com</td>
                                    </tr>
                                    <tr className="row100 body">
                                        <td className="cell100 column1">0002</td>
                                        <td className="cell100 column2">Bilal Mukhtar</td>
                                        <td className="cell100 column3">0345-0987622</td>
                                        <td className="cell100 column4">cust2@gmail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <hr />
                <Footer />
            </div>
        );
    }
}
export default Filers;