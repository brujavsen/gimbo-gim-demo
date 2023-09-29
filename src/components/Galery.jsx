import Carousel from 'react-bootstrap/Carousel';

const Galery = () => {
    
    return (
        <div className="gallery_cnt">
            <h2>Galeria</h2>
            <Carousel>
                <Carousel.Item>
                    <picture>
                        <source srcSet='/image-gimbo-1.webp' type='image/webp' />
                        <img loading='lazy' src="/image-gimbo-1.jpg" className="image-1" alt="gallery images" />
                    </picture>
                </Carousel.Item>
                <Carousel.Item>
                    <picture>
                        <source srcSet='/image-gimbo-2.webp' type='image/webp' />
                        <img loading='lazy' src="/image-gimbo-2.jpg" className="image-2" alt="gallery images" />
                    </picture>
                </Carousel.Item>
                <Carousel.Item>
                    <picture>
                        <source srcSet='/image-gimbo-3.webp' type='image/webp' />
                        <img loading='lazy' src="/image-gimbo-3.jpg" className="image-3" alt="gallery images" />
                    </picture>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Galery