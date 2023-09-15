const Header = () => {
    return (
        <div className="header">
            <div className="header__cnt">
                <div className="header__image">
                    <img src="/logo.png" alt="logotipo" />
                </div>
                <div className="header__title">
                    <h1>Gimnasio Gimbo</h1>
                    <p>Con profesionales a cargo</p>
                    <a href="#contacto">Contacto</a>
                </div>
            </div>
        </div>
    )
}

export default Header