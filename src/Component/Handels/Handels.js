import React, {Component} from 'react'; 

import 'font-awesome/css/font-awesome.min.css';


import classes from './Handels.css';

class Handels extends Component {
    render() {
        return(
            
            <div className="social">
                <i class="fa fa-facebook-square s"></i>
                <i class="fa fa-instagram s"></i>
                <i class="fa fa-linkedin s"></i>
                <i class="fa fa-twitter s"></i>
            </div>
            
        )
    }
}

export default Handels;