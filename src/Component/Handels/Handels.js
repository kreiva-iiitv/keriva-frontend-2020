import React, {Component} from 'react'; 

import 'font-awesome/css/font-awesome.min.css';

import classes from './Handels.css';

class Handels extends Component {
    render() {
        return(
            
            <div className="social">
                <div><i class="fa fa-facebook-square s"></i></div>
                <div><i class="fa fa-instagram s"></i></div>
                <div><i class="fa fa-linkedin s"></i></div>
                <div><i class="fa fa-twitter s"></i></div>
            </div>
            
        )
    }
}

export default Handels;