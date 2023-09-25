import { useEffect } from 'react';
import useObserver from '../hooks/useObserver';

const Offered = () => {

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
        <>
            <div className="offered" id='offered'>
                <div className="offered__cnt">
                    <h2>Qué ofrecemos</h2>
                    <div className="offered__flex lazy">
                        <div className="flex__child">
                            <h3>Ambiente Climatizado</h3>
                            <p>Disfruta de la comodidad en nuestro espacio con ambiente climatizado.</p>
                        </div>
                        <div className="flex__child">
                            <h3>Amplio Horario</h3>
                            <p>Ofrecemos un amplio horario para adaptarse a tu agenda ocupada. Ya sea temprano en la mañana o tarde en la noche.</p>
                        </div>
                        <div className="flex__child">
                            <h3>Super Equipado</h3>
                            <p>Te invitamos a descubrir un espacio totalmente equipado para cualquier tipo de ejercicio.</p>
                        </div>
                    </div>

                    <hr />

                    <div className="offered_service">
                        <h2>Actividades</h2>
                        <section className="activity-flex">
                            <div className="section activity-one">
                                <picture>
                                    <source srcSet='/fitness.webp' type='image/webp' />
                                    <img loading='lazy' src="/fitness.jpg" className="lazy" alt="sala-de-aparatos image" />
                                </picture>
                                <h3>Sala de Aparatos</h3>
                                <ul>
                                    <li><span>Lunes</span> de 8:00 a 13 y de 14:30 a 22 hs</li>
                                    <li><span>Martes</span> de 8:00 a 13 y de 14:30 a 19 hs</li>
                                    <li><span>Miércoles</span> de 8:00 a 13 y de 14:30 a 22 hs </li>
                                    <li><span>Jueves</span> de 8:00 a 13 y de 14:30 a 19 hs </li>
                                    <li><span>Viernes</span> de 8:00 a 13 y de 14:30 a 22 hs</li>
                                    <li><span>Sábado</span> de 8:00 a 13:00 hs</li>
                                </ul>
                                
                                <div className="card one">
                                    <a href="#contacto" className="card__front"><span>Entrenamiento Personalizado</span></a>
                                </div>
                            </div>
                            <div className="section activity-two">
                                <picture>
                                    <source srcSet='/karate.webp' type='image/webp' />
                                    <img loading='lazy' src="/karate.png" className="lazy" alt="karate image" />
                                </picture>
                                <h3>Clases de Karate</h3>
                                <ul>
                                    <li className='dias'>Martes y Jueves</li>
                                    <li>19:00 hs <span>(Niños/as)</span></li>
                                    <li>20:00 hs <span>(Adolescentes y adultos)</span></li>
                                </ul>
                                <div className="card two">
                                    <a href="#contacto" className="card__front"><span>Clases de Defensa Personal</span></a>
                                </div>
                            </div>
                        </section>
                        <hr />
                        <section className="section activity-three lazy">
                            <div className="card three">
                                <a href="#contacto" className="card__front"><span>Recuperación de Lesiones</span></a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offered