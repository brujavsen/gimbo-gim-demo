import { Link } from "react-scroll";
import { BiDumbbell } from "react-icons/bi";

const Hero = () => {
	return (
		<header className="hero-main" id="hero">
			<div className="hero-main__content">
				<h1>Gimnasio Gimbo</h1>
				<div className="hero-main__promo">
					<span className="promo-badge shake-horizontal">
						<BiDumbbell /> Promo: <em>Mayo 2 x 1</em>
					</span>
				</div>
				<p className="hero-main__subtitle">Transforma tu cuerpo, supera tus límites en un ambiente de primer nivel.</p>
				<div className="hero-main__actions">
					<Link to="offered" spy={true} smooth={true} offset={-80} duration={800} className="btn-primary">Descubrir más</Link>
					<a href="#contacto" className="btn-secondary">Contactarnos</a>
				</div>
			</div>
			
			<Link
				className="arrow-down-btn"
				to="offered"
				spy={true}
				smooth={true}
				offset={-80}
				duration={800}
				aria-label="Ver servicios"
			>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
				</svg>
			</Link>
		</header>
	);
};

export default Hero;