import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
} from "pure-react-carousel";
import gallery from "../../Assets/Images/gallery4.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./gallery.css";

function Gallery() {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={500}
        naturalSlideHeight={400}
        totalSlides={5}
        visibleSlides={2.5}
        interval={2000}
        isPlaying={true}
        className="gallery">
        <h1 className="GalleryHead">Gallery</h1>
        <Slider>
          <Slide index={0}>
            <div className="largeImg">
              <img src={gallery} />
            </div>
          </Slide>
          <Slide index={1}>
            <div className="midContainer">
              <div className="upper">
                <img src={gallery} />
              </div>
              <div className="subContainer">
                <div className="lower1">
                  <img src={gallery} />
                </div>
                <div className="lower1">
                  <img src={gallery} />
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="largeImg">
              <img src={gallery} />
            </div>
          </Slide>
          <Slide index={3}>
            <div className="midContainer">
              <div className="upper">
                <img src={gallery} />
              </div>
              <div className="subContainer">
                <div className="lower1">
                  <img src={gallery} />
                </div>
                <div className="lower1">
                  <img src={gallery} />
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={4}>
            <div className="largeImg">
              <img src={gallery} />
            </div>
          </Slide>
        </Slider>
        <ButtonBack className="prev">&#10094;</ButtonBack>
        <ButtonNext className="next">&#10095;</ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default Gallery;
