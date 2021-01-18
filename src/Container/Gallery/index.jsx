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
          totalSlides={6}
          visibleSlides={2.5}
          interval={2000}
          isPlaying={true}
        >
          
          <Slider>
            <Slide index={0}>
              <div className="largeImg">
                <img className="galleryImg" src="https://kreiva.tk/media/gallery/img1.jpg" alt="kreiva gallery" draggable="false" />
              </div>
            </Slide>
            <Slide index={1}>
              <div className="midContainer">
                <div className="upper">
                  <img className="galleryImg" src="https://kreiva.tk/media/gallery/img2.jpg" alt="kreiva gallery" draggable="false" />
                </div>
                <div className="subContainer">
                  <div className="lower1">
                    <img className="galleryImg" src="https://kreiva.tk/media/gallery/img3.jpg" alt="kreiva gallery" draggable="false" />
                  </div>
                  <div className="lower1">
                    <img className="galleryImg" src="https://kreiva.tk/media/gallery/img4.jpg" alt="kreiva gallery" draggable="false" />
                  </div>

                </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="largeImg">
                <img className="galleryImg" src="https://kreiva.tk/media/gallery/img5.jpg" alt="kreiva gallery" draggable="false" />
              </div>
            </Slide>
            <Slide index={3}>
              <div className="midContainer">
                <div className="upper">
                  <img className="galleryImg" src="https://kreiva.tk/media/gallery/img6.jpg" alt="kreiva gallery" draggable="false" />
                </div>
                <div className="subContainer">
                  <div className="lower1">
                    <img className="galleryImg" src="https://kreiva.tk/media/gallery/img7.jpg" alt="kreiva gallery" draggable="false" />
                  </div>
                  <div className="lower1">
                    <img className="galleryImg" src="https://kreiva.tk/media/gallery/img8.jpg" alt="kreiva gallery" draggable="false" />
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={4}>
              <div className="largeImg">
                <img className="galleryImg" src="https://kreiva.tk/media/gallery/img9.jpg" alt="kreiva gallery" draggable="false" />
              </div>
            </Slide>
            <Slide index={5}>
              <div className="midContainer">
                <div className="upper">
                  <img className="galleryImg" src="https://kreiva.tk/media/gallery/img10.jpg" alt="kreiva gallery" draggable="false" />
                </div>
                <div className="subContainer">
                  <div className="lower1">
                    <img className="galleryImg" src="https://kreiva.tk/media/gallery/img11.jpg" alt="kreiva gallery" draggable="false" />
                  </div>
                  <div className="lower1">
                    <img className="galleryImg" src="https://kreiva.tk/media/gallery/img12.jpg" alt="kreiva gallery" draggable="false" />
                  </div>
                </div>
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
            totalSlides={12}
            visibleSlides={1}
          >
          
          <Slider>
            <Slide index={0}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://kreiva.tk/media/gallery/img1.jpg" draggable="false"/>
              </div>
            </Slide>
            <Slide index={1}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://kreiva.tk/media/gallery/img2.jpg" draggable="false"/>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://kreiva.tk/media/gallery/img3.jpg" draggable="false"/>
              </div>
            </Slide>
            <Slide index={3}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://kreiva.tk/media/gallery/img4.jpg" draggable="false"/>
              </div>
            </Slide>
            <Slide index={4}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://kreiva.tk/media/gallery/img5.jpg" draggable="false"/>
              </div>
            </Slide>
            <Slide index={5}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://kreiva.tk/media/gallery/img6.jpg" draggable="false"/>
              </div>
            </Slide>
            <Slide index={6}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://kreiva.tk/media/gallery/img7.jpg" draggable="false"/>
              </div>
            </Slide>
            <Slide index={7}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://kreiva.tk/media/gallery/img8.jpg" draggable="false"/>
              </div>
            </Slide>
            <Slide index={8}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://kreiva.tk/media/gallery/img9.jpg" draggable="false"/>
              </div>
            </Slide>
            <Slide index={9}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://kreiva.tk/media/gallery/img10.jpg" draggable="false"/>
              </div>
            </Slide>
            <Slide index={10}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://kreiva.tk/media/gallery/img11.jpg" draggable="false"/>
              </div>
            </Slide>
            <Slide index={11}>
              <div className="mobileGallery__container">
                <img alt="img" className="mobileGallery__container__img" src="https://kreiva.tk/media/gallery/img12.jpg" draggable="false"/>
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
