import React from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';
//import Navbar from './navbar';
import Footer from './footer';
import './css/contactstyle.css';
import CustomButton from './custom-button';
import { firestore } from 'firebase';

class Contact extends React.Component {
    constructor() {
        super();
        this.ref = firestore().collection('contactus');
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = this.state;
        const createdAt= new Date();
        this.ref.add({
            name,
            email,
            message,
            createdAt
        }).then((docRef) => {
            this.setState({
                name: '',
                email: '',
                message: ''
            });
            //this.props.history.push("/")
            alert("Message sent");
            window.location.reload(false);
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    handleChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render() {
        const { name, email, message } = this.state;
        return (
            <div>
                <div style={{ margin: '5% 5% 5% 5%' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center' }}>
                            <h2>Contact Us</h2>
                            {/*p>Swing by for a cup of coffee, or leave us a message:</p*/}
                        </div>
                        <div className="row">
                            <div className="column">
                                {/*img src="/w3images/map.jpg" style="width:100%"*/}
                                <h3>Don't be a stranger</h3>
                                <h3>just say Hello!</h3>
                                <p>Feel free to contact us. We are always open for your queries.</p><br /><br />
                                <h3>Getting in touch is now easy</h3><br />
                                <p>Need help?<br /><b>efile@tasdeeq.com</b></p>
                                <p>Feel like talking?<br /><b>0211234567</b></p>
                            </div>
                            <div className="column">
                                <form onSubmit={this.handleSubmit} >
                                    <label >Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Full name"
                                        Value={name}
                                        onChange={this.handleChange}
                                    />
                                    <label>Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        Value={email}
                                        onChange={this.handleChange}
                                    />
                                    <label >Message</label>
                                    <input
                                        name="message" style={{ height: '170px' }}
                                        type="text"
                                        placeholder="Write something.."
                                        Value={message}
                                        onChange={this.handleChange}
                                    />
                                    {/*<input type="submit" defaultValue="Submit" />*/}
                                    <CustomButton type="submit">Submit</CustomButton>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* End page content */}
                </div>
                <Footer />
            </div>
        );
    }
}
export default Contact;