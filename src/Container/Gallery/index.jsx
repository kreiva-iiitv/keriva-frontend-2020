import React, { Component } from 'react'
import { createRef } from 'react'
import gallery1 from '../../Assets/Images/gallery1.jpg'
import gallery2 from '../../Assets/Images/gallery2.jpg'
import gallery3 from '../../Assets/Images/gallery3.jpeg'
import gallery4 from '../../Assets/Images/gallery4.jpg'
import gallery5 from '../../Assets/Images/gallery5.jpg'
import gallery6 from '../../Assets/Images/gallery6.jpg'
import './gallery.css'
class Gallery extends Component {

    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }

    onScrollClick = (offset) => {
        this.myRef.current.scrollLeft = this.myRef.current.scrollLeft + offset
        console.log(this.myRef)
    }

    render() {
        return (
            <div  className="galleryContainer">
                <div>
                    <h1 className="GalleryHead">Gallery</h1>

                </div>
                <a href="#0" className="prev" onClick={()=>this.onScrollClick(-60)}>&#10094;</a>
                <div ref={this.myRef} className="gallery">
                    <div className="coloumn">
                        <img alt="img" className="largeImg" src={gallery6}/>
                    </div>
                    <div className="coloumn">
                        <img alt="img" className="midImg" src={gallery3}/>
                        <img alt="img" className="smallImg" src={gallery4}/>
                        <img alt="img" className="smallImg" src={gallery5}/>
                    </div>
                    <div className="coloumn">
                        <img alt="img" className="largeImg" src={gallery6}/>
                    </div>
                    <div className="coloumn">
                        <img alt="img" className="largeImg" src={gallery6}/>
                    </div> 
                    <div className="coloumn">
                        <img alt="img" className="largeImg" src={gallery6}/>
                    </div>                
                </div>
                
                <a href="#0" className="next" onClick={()=>this.onScrollClick(60)}>&#10095;</a>
            </div>
            
        )
    }
}

export default Gallery
