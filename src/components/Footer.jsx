import swal from "sweetalert";

const Footer = () => {

    let date = new Date;
    let year = date.getFullYear();
    let wppUrl = "https://api.whatsapp.com/send?phone=59896105664";
    let fbUrl = "https://www.facebook.com/gymbogym.gym/?locale=es_LA";

    const handleClick = (e, url, site) => {
        e.preventDefault();
        swal({
            title: "¿Deseas continuar?",
            text: "Vas a ser redireccionado a " + site,
            icon: "warning",
            buttons: true,
        }).then((willRedirect) => {
            if (willRedirect) {
                window.location.href = url;
            } else {
                swal("Cancelaste la acción");
            }
        });
    };

    return (
        <div className="footer">
            <div className="footer__flex">
                <h2 id="contacto">Contacto</h2>
                <div className="footer__contact">
                    <div className="footer__icons">
                        <a href="https://www.facebook.com/gymbogym.gym/?locale=es_LA" rel="noreferrer" onClick={ e => handleClick(e, fbUrl, 'Facebook')}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                        </a>
                        <a href={wppUrl} rel="noreferrer" onClick={ e => handleClick(e, wppUrl, 'WhatsApp')}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                            </svg>
                        </a>
                    </div>
                    <p>Teléfono: 22965274</p>
                    <p className="rights">&copy; {year} Derechos Reservados a Gimnasio Gimbo</p>
                </div>
            </div>
        </div>
    )
}

export default Footer