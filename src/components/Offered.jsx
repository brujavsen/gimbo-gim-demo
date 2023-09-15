
const Offered = () => {
    return (
        <div className="offered">
            <div className="offered__cnt">
                <h2>Qué ofrecemos</h2>
                <div className="offered__flex">
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
                    <div className="section">
                        <h3>Sala de Aparatos</h3>
                        <ul>
                            <li><span>Lunes</span> de 8:00 a 13 y de 14:30 a 22 hs</li>
                            <li><span>Martes</span> de 8:00 a 13 y de 14:30 a 19 hs</li>
                            <li><span>Miércoles</span> de 8:00 a 13 y de 14:30 a 22 hs </li>
                            <li><span>Jueves</span> de 8:00 a 13 y de 14:30 a 19 hs </li>
                            <li><span>Viernes</span> de 8:00 a 13 y de 14:30 a 22 hs</li>
                            <li><span>Sábado</span> de 8:00 a 13:00 hs</li>
                        </ul>
                        <img src="/fitness.jpg" alt="sala-de-aparatos image" />
                    </div>
                    <div className="section">
                        <h3>Clases de Karate</h3>
                        <p>Martes y Jueves</p>
                        <ul>
                            <li>19:00 hs (Niños/as)</li>
                            <li>20:00 hs (Adolescentes y adultos)</li>
                        </ul>
                        <img src="/karate.jpg" alt="sala-de-aparatos image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offered