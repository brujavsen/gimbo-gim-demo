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
                <img src="/image-gimbo-1.jpg" className="lazy image-1" alt="gallery images" />
                <img src="/image-gimbo-2.jpg" className="lazy image-2" alt="gallery images" />
                <img src="/image-gimbo-3.jpg" className="lazy image-3" alt="gallery images" />
                <img src="/image-gimbo-5.jpg" className="lazy image-5" alt="gallery images" />
                <img src="/image-gimbo-6.jpg" className="lazy image-6" alt="gallery images" />
                <img src="/image-gimbo-8.jpg" className="lazy image-7" alt="gallery images" />
            </div>
        </div>
    )
}

export default Galery