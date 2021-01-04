import React, {Component} from 'react'; 

import Landing from '../../Component/HomeComponents/Landing/Landing';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import About from '../../Component/HomeComponents/About/About';
import classes from './Home.css';
import Gallery from '../Gallery/Gallery';
import Events from '../../Component/HomeComponents/Events/Events';

class Home extends Component {

	// temporary events array
	events = [{title: `Mask Decoration`, prize: 5},{title: `Mask Decoration 2`, prize: 4.3},{title: `Mask Decoration 3`, prize: 6},{title: `Mask Decoration 4`, prize: 5},{title: `Mask Decoration 5`, prize: 5},{title: `Mask Decoration 6`, prize: 5}];

    render() {
        return(
            
		    <React.Fragment>
		      <Header />
		      	<Landing/>
				 <About/>
				 <Events events = {this.events}/>
				 <Gallery/> 	
		      <Footer />
		    </React.Fragment>
            
        )
    }
}

export default Home;