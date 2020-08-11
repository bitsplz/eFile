import React from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';
//import Navbar from './navbar';
import Footer from './footer';
import './css/table.css';
import { firestore } from 'firebase';

class Filers extends React.Component {

    constructor(props) {
        super(props);
        this.ref = firestore().collection('user');
        this.unsubscribe = null;
        this.state = {
            users: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
            const { displayName, contact, email } = doc.data();
            users.push({
                key: doc.id,
                doc, // DocumentSnapshot
                displayName,
                contact,
                email,
            });
        });
        this.setState({
            users
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
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
                                        <th className="cell100 column2">Name</th>
                                        <th className="cell100 column4">Email Address</th>
                                        <th className="cell100 column3">Mobile Number</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="table100-body js-pscroll">
                            <table>
                                <tbody>
                                    {this.state.users.map(users =>
                                        <tr>
                                            <td className="column5">{users.displayName}</td>
                                            <td className="column5">{users.email}</td>
                                            <td className="column5">{users.contact}</td>
                                        </tr>
                                    )}
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