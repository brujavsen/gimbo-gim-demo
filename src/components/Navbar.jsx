import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		let timeoutId;
		const handleScroll = () => {
			if (timeoutId) return;
			timeoutId = setTimeout(() => {
				setScrolled(window.scrollY > 50);
				timeoutId = null;
			}, 100);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, []);

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
				<div className="navbar__container">
					<div className="navbar__logo" onClick={scrollToTop}>
						<picture>
							<source srcSet="/logo.webp" type="image/webp" />
							<img loading="lazy" src="/logo.png" alt="Logotipo Gimbo" />
						</picture>
						<span className="navbar__brand">Gimbo</span>
					</div>
					<div className="navbar__links">
						<Link to="offered" spy={true} smooth={true} offset={-80} duration={800}>Servicios</Link>
						<Link to="actividades" spy={true} smooth={true} offset={-80} duration={800}>Actividades</Link>
						<Link to="location" spy={true} smooth={true} offset={-80} duration={800}>Ubicación</Link>
					</div>
					<a href="#contacto" className="navbar__cta btn-primary">¡Empezá hoy!</a>
				</div>
			</nav>

			{scrolled && (
				<button onClick={scrollToTop} className="scroll-to-top" aria-label="Volver arriba">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
					</svg>
				</button>
			)}
		</>
	);
};

export default Navbar;
