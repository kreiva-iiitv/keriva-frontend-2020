import React, {Component} from 'react';
import Handels from '../../Handels/Handels.js';

import wave from '../../../Assets/Images/waves.png'


import classes from './Landing.css';

class Landing extends Component {
    render() {
        return(
            
            <div className="landing">

                <img className="wave" src={wave} />

               <div className="parent">
                   <p  className="kreiva">KREIVA</p>
                   <p className="kreiva a">2020</p>
               </div>

               <div className="virtual">
                   <p>A Virtual Fest</p>
               </div>

                <Handels/> 

            </div>
            
        )
    }
}

export default Landing;