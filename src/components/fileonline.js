import React from 'react';
import './css/multistep.css';
import './css/styles.css';
import './css/bootstrap.min.css';
import './css/w3.css';
import { firestore, storage } from 'firebase';
import CustomButton from './custom-button';



class MasterForm extends React.Component {
    constructor(props) {
        super(props);
        this.ref = firestore().collection('tax_table');
        this.storageRef = storage().ref();
        this.state = {
            currentStep: 1,
            fname: '',
            lname: '',
            dob: '',
            email: '',
            number: '',
            ntn: '',
            monthlyinc: '',
            cardname: '',
            cardnum: '',
            cardexpiry: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        const {
            fname,
            lname,
            dob,
            email,
            number,
            ntn,
            monthlyinc,
            homeexpense,
            cardname,
            cardnum,
            cardexpiry } = this.state
        this.ref.add({
            fname,
            lname,
            dob,
            email,
            number,
            ntn,
            monthlyinc,
            homeexpense,
            cardname,
            cardnum,
            cardexpiry
        }).then((docRef) => {
            this.setState({
                currentStep: 1,
                fname: '',
                lname: '',
                dob: '',
                email: '',
                number: '',
                ntn: '',
                monthlyinc: '',
                homeexpense: '',
                cardname: '',
                cardnum: '',
                cardexpiry: ''
            });
            //this.props.history.push("/")
            alert("Form Submitted!");
            window.location.reload(false);
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    /*
    * the functions for our button
    */
    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    id="prevBtn"
                    type="button" onClick={this._prev}>
                    Previous
                </button>
            )
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 3) {
            return (
                <button
                    type="button" onClick={this._next}>
                    Next
                </button>
            )
        }
        return null;
    }

    render() {
        return (
            <React.Fragment>
                <form id="regForm" onSubmit={this.handleSubmit}>
                    <b><h1>File Tax Online</h1></b>
                    {/*<p>Step {this.state.currentStep} </p>*/}
                    {/*render the form steps and pass required props in*/}
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        fname={this.state.fname}
                        lname={this.state.lname}
                        dob={this.state.dob}
                        email={this.state.email}
                        number={this.state.number}
                        ntn={this.state.ntn}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        monthlyinc={this.state.monthlyinc}
                        homeexpense={this.state.homeexpense}

                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        cardname={this.state.cardname}
                        cardnum={this.state.cardnum}
                        cardexpiry={this.state.cardexpiry}
                    />
                    <div id="buttona">
                        <div id="buttonb">
                            {this.previousButton()}
                            {this.nextButton()}
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <p>Step {this.state.currentStep} </p>
                        <span className="step" />
                        <span className="step" />
                        <span className="step" />
                        {/*<span className="step" />*/}
                    </div>

                </form>
            </React.Fragment>
        );
    }
}

function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    }
    return (
        <div className="form-group">
            <b><label>Personal Information</label></b>
            <input
                className="form-control"
                //id="email"
                name="fname"
                type="text"
                placeholder="Enter First Name"
                value={props.fname}
                onChange={props.handleChange}
            />
            <input
                className="form-control"
                //id="email"
                name="lname"
                type="text"
                placeholder="Enter Last Name"
                value={props.lname}
                onChange={props.handleChange}
            />
            <input
                className="form-control"
                //id="email"
                name="dob"
                type="date"
                value={props.dob}
                onChange={props.handleChange}
            />
            <input
                className="form-control"
                //id="email"
                name="email"
                type="text"
                placeholder="Enter email"
                value={props.email}
                onChange={props.handleChange}
            />
            <input
                className="form-control"
                //id="email"
                name="number"
                type="text"
                placeholder="Enter Contact Number"
                value={props.number}
                onChange={props.handleChange}
            />
            <input
                className="form-control"
                //id="email"
                name="ntn"
                type="text"
                pattern=".{7,}"
                placeholder="Enter NTN"
                value={props.ntn}
                onChange={props.handleChange}
            />
        </div>
    );
}

function Step2(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return (
        <div className="form-group">
            <b><label>Earning Information:</label></b>
            <input
                className="form-control"
                //id="username"
                name="monthlyinc"
                type="text"
                placeholder="Enter Monthly Income"
                value={props.monthlyinc}
                onChange={props.handleChange}
            />
            <input
                className="form-control"
                //id="username"
                name="homeexpense"
                type="text"
                placeholder="Enter Yearly Home Expense"
                value={props.homeexpense}
                onChange={props.handleChange}
            />
        </div>
    );
}

function Step3(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <React.Fragment>
            <div className="form-group">
                <b><label>Billing Information</label></b>
                <input
                    className="form-control"
                    //id="username"
                    name="cardname"
                    type="text"
                    placeholder="Enter Name on Card"
                    value={props.cardname}
                    onChange={props.handleChange}
                />
                <input
                    className="form-control"
                    //id="password"
                    name="cardnum"
                    type="text"
                    placeholder="Enter Card Number"
                    value={props.cardnum}
                    onChange={props.handleChange}
                />
                <input
                    className="form-control"
                    //id="username"
                    name="cardexpiry"
                    type="date"
                    placeholder="Enter Card Expiry Date"
                    value={props.cardexpiry}
                    onChange={props.handleChange}
                />
            </div>
            <CustomButton type="submit">Submit</CustomButton>
            {/*<button className="btn btn-success btn-block">Sign up</button>*/}
        </React.Fragment>
    );
}
export default MasterForm;