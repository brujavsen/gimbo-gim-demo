import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselImages = () => {

    return (
        <div className='carousel'>
            <Carousel>
            <Carousel.Item interval={3000}>
                <img loading='lazy' src='/image-gimbo-1.jpg' alt='image gimnasio'></img>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img loading='lazy' src='/image-gimbo-2.jpg' alt='image gimnasio'></img>
            </Carousel.Item>
            <Carousel.Item>
                <img loading='lazy' src='/image-gimbo-3.jpg' alt='image gimnasio'></img>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselImages;