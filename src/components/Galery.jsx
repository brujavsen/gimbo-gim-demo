import { useEffect } from 'react';
import useObserver from '../hooks/useObserver';
const Galery = () => {
    const [observer, setElements, entries] = useObserver({
        threshold: 0.25,
        root: null
    });

    useEffect(function() {
        const lazyLoad = document.querySelectorAll('.lazy');
        setElements(lazyLoad);
    }, [setElements]);

    useEffect(()=> {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const lazyDiv = entry.target;
                lazyDiv.classList.add('in-view');
                lazyDiv.classList.remove('lazy');
                observer.unobserve(lazyDiv);
            }
        });
    },[entries, observer]);
    
    return (
        <div className="gallery_cnt">
            <h2>Galeria</h2>
            <div className="column">
                <picture>
                    <source srcSet='/image-gimbo-1.webp' type='image/webp' />
                    <img loading='lazy' src="/image-gimbo-1.jpg" className="lazy image-1" alt="gallery images" />
                </picture>
                <picture>
                    <source srcSet='/image-gimbo-2.webp' type='image/webp' />
                    <img src="/image-gimbo-2.jpg" className="lazy image-2" alt="gallery images" />
                </picture>
                <picture>
                    <source srcSet='/image-gimbo-3.webp' type='image/webp' />
                    <img src="/image-gimbo-3.jpg" className="lazy image-3" alt="gallery images" />
                </picture>
                <picture>
                    <source srcSet='/image-gimbo-5.webp' type='image/webp' />
                    <img src="/image-gimbo-5.jpg" className="lazy image-5" alt="gallery images" />
                </picture>
                <picture>
                    <source srcSet='/image-gimbo-6.webp' type='image/webp' />
                    <img src="/image-gimbo-6.jpg" className="lazy image-6" alt="gallery images" />
                </picture>
                <picture>
                    <source srcSet='/image-gimbo-8.webp' type='image/webp' />
                    <img src="/image-gimbo-8.jpg" className="lazy image-8" alt="gallery images" />
                </picture>
            </div>
        </div>
    )
}

export default Galery