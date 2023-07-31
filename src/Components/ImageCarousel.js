import React from 'react';
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ImageCarousel = () => {
    const images = [
      'https://media.istockphoto.com/id/1337232523/photo/high-angle-view-of-a-lake-and-forest.jpg?b=1&s=170667a&w=0&k=20&c=MMQAIpDombUQd_8FV9os3jLzza26-oqaOhO3AgUSt9k=',
      'https://media.istockphoto.com/id/541152916/photo/healthy-green-trees-in-forest-of-spruce-fir-and-pine.jpg?b=1&s=170667a&w=0&k=20&c=3WY8qHMHkISS-w0BimOKL947Hu41nJbyMmopgLVrrH4=',
      'https://media.istockphoto.com/id/1394440950/photo/natural-view-cosmos-filed-and-sunset-on-garden-background.jpg?b=1&s=170667a&w=0&k=20&c=kaVmrvvzBDZO5HdAoTP6jLNFSqx2ocPx66ySjF_j0OE=',
    ];
  
    return (
        <Card>
          <Carousel showStatus={false} showThumbs={false} autoPlay interval={2000} infiniteLoop>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </Card>
      );
    };
    
  
  
  export default ImageCarousel;
  