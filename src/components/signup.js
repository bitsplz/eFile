import React from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';
//import Navbar from './navbar';
import Footer from './footer';
import './css/form.css';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';
import { Link } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../config/fbconfig';
import CustomButton from './custom-button';



class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            contact:'',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, contact, password, confirmPassword } = this.state;

        /*if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }*/

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName,contact });
            alert("User Created");
            this.setState({
                displayName: '',
                email: '',
                contact:'',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, contact, password, confirmPassword } = this.state;
        return (
            <div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <div style={{ textAlign: 'center' }}>
                                <h2>Sign Up</h2>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    name="name"
                                    required
                                    type="text"
                                    placeholder="Full name"
                                    Value={displayName}
                                    onChange={this.handleChange}
                                />
                                <input
                                    name="email"
                                    required
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={this.handleChange}
                                />
                                <input
                                    name="contact"
                                    required
                                    type="tel"
                                    placeholder="Contact Number"
                                    value={contact}
                                    onChange={this.handleChange}
                                />
                                <input
                                    name="password"
                                    title="Eight or more characters"
                                    required
                                    type="password"
                                    placeholder="Password"
                                    pattern=".{8,}"
                                    value={password}
                                    onChange={this.handleChange}
                                />
                                {/*<input
                                    name="confirm_password"
                                    required
                                    type="password"
                                    placeholder="Confirm Password"
                                    Value={confirmPassword}
                                    onChange={this.handleChange}
                                />*/}
                                {/*<input type="submit" defaultValue="Submit" />*/}
                                <CustomButton type='submit'>SIGN UP</CustomButton>

                            </form>
                        </div>
                        <div className="column" style={{ textAlign: 'center' }}>
                            <p>Already have an account?</p>
                            <Link to="/login">
                                <button className="w3-button w3-green w3-padding-large w3-large w3-margin-top" style={{ borderRadius: '40px' }}>
                                    Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <br />
                <Footer />
            </div>
        );
    }
}
export default Signup;