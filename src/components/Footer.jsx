import { BiLogoFacebookCircle, BiLogoWhatsapp, BiPhone } from "react-icons/bi";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    const wppUrl = "https://api.whatsapp.com/send?phone=59896105664";
    const fbUrl = "https://www.facebook.com/gymbogym.gym/?locale=es_LA";

    return (
        <footer className="footer" id="contacto">
            <div className="footer__flex">
                <h2>Contacto</h2>
                <div className="footer__contact">
                    <div className="footer__icons">
                        <a href={fbUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
                            <i><BiLogoFacebookCircle/></i>
                            <span>Facebook</span>
                        </a>
                        <a href={wppUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                            <i><BiLogoWhatsapp/></i>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                    <p><i><BiPhone/></i> 22965274</p>
                    <p className="rights">&copy; {year} Gimnasio Gimbo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer