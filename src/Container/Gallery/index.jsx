import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './gallery.css'

function Gallery() {
  return (
    <>
      <div className="gallery">
      <h1 className="GalleryHead">Gallery</h1>
      <div className="galleryCarousel">
      <CarouselProvider
          naturalSlideWidth={500}
          naturalSlideHeight={400}
          totalSlides={5}
          visibleSlides={2.5}
          interval={2000}
          isPlaying={true}
        >
          
          <Slider>
            <Slide index={0}>
              <div className="largeImg">
                <img src="https://dummyimage.com/500x500/37053b/000000.png&text=+" alt="kreiva gallery" draggable="false" />
              </div>
            </Slide>
            <Slide index={1}>
              <div className="midContainer">
                <div className="upper">
                  <img src="https://dummyimage.com/500x500/37053b/000000.png&text=+" alt="kreiva gallery" draggable="false" />
                </div>
                <div className="subContainer">
                  <div className="lower1">
                    <img src="https://dummyimage.com/500x500/37053b/000000.png&text=+" alt="kreiva gallery" draggable="false" />
                  </div>
                  <div className="lower1">
                    <img src="https://dummyimage.com/500x500/37053b/000000.png&text=+" alt="kreiva gallery" draggable="false" />
                  </div>

                </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="largeImg">
                <img src="https://dummyimage.com/500x500/37053b/000000.png&text=+" alt="kreiva gallery" draggable="false" />
              </div>
            </Slide>
            <Slide index={3}>
              <div className="midContainer">
                <div className="upper">
                  <img src="https://dummyimage.com/500x500/37053b/000000.png&text=+" alt="kreiva gallery" draggable="false" />
                </div>
                <div className="subContainer">
                  <div className="lower1">
                    <img src="https://dummyimage.com/500x500/37053b/000000.png&text=+" alt="kreiva gallery" draggable="false" />
                  </div>
                  <div className="lower1">
                    <img src="https://dummyimage.com/500x500/37053b/000000.png&text=+" alt="kreiva gallery" draggable="false" />
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={4}>
              <div className="largeImg">
                <img src="https://dummyimage.com/500x500/37053b/000000.png&text=+" alt="kreiva gallery" draggable="false" />
              </div>
            </Slide>
          </Slider>
          <ButtonBack className="prev">&#10094;</ButtonBack>
          <ButtonNext className="next">&#10095;</ButtonNext>
        </CarouselProvider>
      </div>
      </div>







      
      <div  className="mobileGallery">
        <div className="headContainer">
          <h1 className="mobileGallery__head">Gallery</h1>
        </div>
        
        <div className="mobileGallery__carousel">
          <CarouselProvider 
            naturalSlideWidth={500}
            naturalSlideHeight={400}
            totalSlides={2}
            visibleSlides={1}
          >
          
          <Slider>
            <Slide index={0}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://dummyimage.com/500x500/37053b/000000.png&text=+" draggable="false"/>
              </div>
            </Slide>
            <Slide index={1}>
              <div className="mobileGallery__container">
              <img alt="img" className="mobileGallery__container__img" src="https://dummyimage.com/500x500/37053b/000000.png&text=+" draggable="false"/>
              </div>
            </Slide>
          </Slider>
          <ButtonBack className="prevMobile">&#10094;</ButtonBack>
          <ButtonNext className="nextMobile">&#10095;</ButtonNext>
          </CarouselProvider> 
        </div>
        
        
            
      </div>
    </>
  )
}

export default Gallery;
