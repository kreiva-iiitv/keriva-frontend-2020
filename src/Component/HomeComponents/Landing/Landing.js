import React, {Component} from 'react';
import Handels from '../../Handels/Handels.js';

import wave from '../../../Assets/Images/waves.png'


import classes from './Landing.css';

class Landing extends Component {
    render() {
        return(
            
            <div className="landing">

<div>
            <img className="wave" src={wave} />
           </div>

           <div className="parent">
               <span  className="kreiva">KREIVA</span>
               <span className="kreiva a">2020</span>
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