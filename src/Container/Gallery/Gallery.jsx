import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom } from 'pure-react-carousel';
import gallery from '../../Assets/Images/gallery4.jpg'
import 'pure-react-carousel/dist/react-carousel.es.css';
import './gallery.css'

function Gallery() {
    return (
        <div className="gallery">
            <CarouselProvider
                naturalSlideWidth={20}
                naturalSlideHeight={20}
                totalSlides={5}
                visibleSlides={2.5}
                interval={2000}
                isPlaying={true}
                >
                <h1 className="GalleryHead">Gallery</h1>
                <Slider>
                    <Slide index={0}>
                        <img className="largeImg" src={gallery}/>
                    </Slide>
                    <Slide index={1}>
                        <div className="midContainer center">
                            <img src={gallery} className="midImg" />
                            <div className="subContainer">
                                <div className="center">
                                    <img src={gallery} className="smallImg" /> 
                                </div>
                                <div className="center">
                                    <img src={gallery} className="smallImg" />
                                </div>  
                                    
                            </div>        
                        </div>
                    </Slide>
                    <Slide index={2}><img className="largeImg" src={gallery}/></Slide>
                    <Slide index={3}>
                        <div className="midContainer center">
                            <img src={gallery} className="midImg" />
                            <div className="subContainer">
                                <div className="center">
                                    <img src={gallery} className="smallImg" /> 
                                </div>
                                <div className="center">
                                    <img src={gallery} className="smallImg" />
                                </div>  
                                    
                            </div>        
                        </div>
                    </Slide>
                    <Slide index={2}><img className="largeImg" src={gallery}/></Slide>
                </Slider>
                <ButtonBack className="prev">&#10094;</ButtonBack>
                <ButtonNext className="next">&#10095;</ButtonNext>
            </CarouselProvider>
        </div>
    )
}

export default Gallery
