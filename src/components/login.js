import React from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';
//import Navbar from './navbar';
import Footer from './footer';
import './css/form.css';
import { Link } from 'react-router-dom';
//import { Redirect} from "react-router";
import CustomButton from './custom-button';
//import useForm from 'react-hook-form';
import { auth, signInWithGoogle } from '../config/fbconfig';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password}=this.state
        try{
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: '' })
            this.props.history.push("/")
        }
        catch(error){
            console.log();
        }
        
    }
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <h2>Login</h2>
                    </div>
                    <div className="row">
                        <div className="column">
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="Email" required
                                />
                                <input
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="Password" required
                                />
                                <CustomButton type="submit" >Sign In
                                    </CustomButton>
                                {<CustomButton onClick={signInWithGoogle} >Sign in with Google
                                    </CustomButton>}
                            </form>
                        </div>
                        <div className="column" style={{ textAlign: 'center' }}>
                            <p>Create new account?</p>
                            <Link to="/signup">
                                <button className="w3-button w3-green w3-padding-large w3-large w3-margin-top" style={{ borderRadius: '40px' }}>
                                    SignUp</button>
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
export default Login;