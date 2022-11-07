import Carousel from 'react-bootstrap/Carousel';
import React from 'react';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.hs-data.com/bilder/teamfotos/640x360/550.jpg"
          alt="First slide"
        />
        
        <Carousel.Caption>
          <h3>Liverpool Best Squad</h3>
          <p>The Ultimate team that won the UEFA Champions League and Premier League</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://cdn.sillyseason.com/wp-content/uploads/2020/09/Liverpool-FC-Squad-2020-Liverpool-First-Team-All-Players-202021.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Celebration!</h3>
          <p>Celebration after the winning goal by Divock Origi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.laureus.com/getmedia/7bc2d56b-bc26-431d-ad2f-04c609644b80/liverpool_1.jpeg?width=1440"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Champions League Champion 2020</h3>
          <p>
            6 Times European Champion
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
  );
}


export default CarouselFadeExample;

//https://getbootstrap.com/docs/4.0/utilities/sizing/