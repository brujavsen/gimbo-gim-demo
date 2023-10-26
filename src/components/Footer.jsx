import swal from "sweetalert";
import { BiLogoFacebookCircle, BiLogoWhatsapp, BiPhone } from "react-icons/bi";

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
                            <i><BiLogoFacebookCircle/></i>
                            <span>Facebook</span>
                        </a>
                        <a href={wppUrl} rel="noreferrer" onClick={ e => handleClick(e, wppUrl, 'WhatsApp')}>
                            <i><BiLogoWhatsapp/></i>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                    <p><i><BiPhone/></i> 22965274</p>
                    <p className="rights">&copy; {year} Derechos Reservados a Gimnasio Gimbo</p>
                </div>
            </div>
        </div>
    )
}

export default Footer