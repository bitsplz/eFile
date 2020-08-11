import React from 'react';
//import Navbar from './navbar';
import Footer from './footer';
import FirstSection from './firstsection';
import SecondSection from './secondsection';
import ThirdSection from './thirdsection';

class Home extends React.Component{
    render(){
        return (
            <div>
                
                <FirstSection/>
                <SecondSection />
                <hr />
                <ThirdSection />
                <hr />
                <Footer />
            </div>
        );
    }
   
}
export default Home;