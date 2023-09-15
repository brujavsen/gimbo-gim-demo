const Hero = () => {

    return (
        <div className="hero">
            <div className="hero__flex">
                <div className="hero__info">
                    <h2>¿Dónde nos encontramos?</h2>
                    <p>Ruta 84, 15700 Empalme Sauce, Canelones, Uruguay</p>
                </div>
                <div className="hero__maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.3997220896945!2d-56.06083822335573!3d-34.74552236500247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02f32a11fc93d%3A0xeadef3cd032206fb!2sGimnasio%20Gimbo!5e0!3m2!1ses-419!2suy!4v1694811460212!5m2!1ses-419!2suy" width="300" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Hero