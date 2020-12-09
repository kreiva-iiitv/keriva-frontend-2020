import React, {Component} from 'react'; 

import Landing from '../../Component/HomeComponents/Landing/Landing';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import About from '../../Component/HomeComponents/About/About';
import classes from './Home.css';

class Home extends Component {
    render() {
        return(
            
		    <React.Fragment>
		      <Header />
		      	<Landing/>
				 <About/> 	
		      <Footer />
		    </React.Fragment>
            
        )
    }
}

export default Home;