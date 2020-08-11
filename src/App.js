import React from 'react';
import About from './components/aboutus';
import Home from './components/home';
import Contact from './components/contactus';
import ThirdSection from './components/thirdsection';
import Signup from './components/signup';
import Agents from './components/viewagents';
import Login from './components/login';
import Agenthome from './components/agenthome';
import Filers from './components/viewcustomers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import './App.css';
import { auth, createUserProfileDocument } from './config/fbconfig';
import Navbar from './components/navbar';
import MasterForm from './components/fileonline';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      else{
        this.setState({currentUser:userAuth});
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar currentUser={this.state.currentUser}/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/aboutus" exact component={About} />
            <Route path="/contactus" exact component={Contact} />
            <Route path="/services" exact component={Home} />
            <Route path="/thirdsection" exact component={ThirdSection} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/viewagents" exact component={Agents} />
            <Route path="/login" exact component={Login} />
            <Route path="/agenthome" exact component={Agenthome} />
            <Route path="/viewcustomers" exact component={Filers} />
            <Route path="/fileonline" exact component={MasterForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
