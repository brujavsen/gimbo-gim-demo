import { useState } from 'react';

const Carousel = ({ img }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <img loading='lazy' src={img[currentImageIndex]} alt="image carousel" />
            <div className='btns-arrow'>
                <button className='left-btn' onClick={previousImage}>⬅</button>
                <button className='right-btn' onClick={nextImage}>➡</button>
            </div>
        </div>
    );
};

export default Carousel;