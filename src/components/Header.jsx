const Header = () => {
    return (
        <div className="header">
            <div className="header__cnt">
                <div className="header__image">
                    <img src="/logo.png" alt="logotipo" />
                </div>
                <div className="header__title">
                    <h1>Gimnasio Gimbo</h1>
                    <div className="wrapper">
                        <span className="first-text shake-horizontal">&#128170; <em>¡Consulten Promos!</em></span>
                    </div>
                    <a href="#contacto">Contacto</a>
                </div>
            </div>
        </div>
    )
}

export default Header