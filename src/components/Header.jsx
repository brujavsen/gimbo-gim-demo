import { useEffect } from 'react';
import { useState } from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import { BiDumbbell} from "react-icons/bi";

const Header = () => {
    const [activeBtn, setActiveBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setActiveBtn(true);
            } else {
                setActiveBtn(false);
            }
        };

        // Agregar un event listener para el evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Eliminar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <div className="header">
            <div id="sectionToScrollTo" className="header__cnt">
                <div className="header__image">
                    <picture>
                        <source srcSet='/logo.webp' type='image/webp' />
                        <img loading='lazy' src="/logo.png" alt="logotipo" />
                    </picture>
                </div>
                <div className="header__title">
                    <h1>Gimnasio Gimbo</h1>
                    <div className="wrapper">
                        <span className="first-text shake-horizontal"><BiDumbbell/> Promo: <em>Mayo 2 x 1</em></span>
                    </div>
                    <p className='promo'>3 meses con 25% de descuento</p>
                    <a href="#contacto">Contacto</a>
                </div>
                <div className='navidad'></div>
            </div>
            <Link activeClass="arrow-down-cnt" to="offered" spy={true} smooth={true} offset={-10} duration={800}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="arrow-down">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
            </Link>
            {activeBtn ? (
                <Link onClick={scrollToTop} className="scroll-to-top" to='#' spy={true} type='button' smooth={true} offset={0} duration={500}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                    </svg>
                </Link>
            ): ''}
        </div>
    )
}

export default Header