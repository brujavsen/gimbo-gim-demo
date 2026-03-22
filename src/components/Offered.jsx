import { WiFire, WiTime3 } from "react-icons/wi";
import { BiDumbbell } from "react-icons/bi";

const Offered = () => {
    return (
        <section className="offered" id='offered'>
            <div className="offered__cnt">
                
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><WiFire/></div>
                        <h3>Ambiente Climatizado</h3>
                        <p>Disfruta de la comodidad en nuestro espacio con ambiente perfectamente aclimatado.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><WiTime3/></div>
                        <h3>Amplio Horario</h3>
                        <p>Nos adaptamos a tu agenda. Entrena temprano en la mañana o tarde en la noche.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><BiDumbbell/></div>
                        <h3>Súper Equipado</h3>
                        <p>Descubre un espacio equipado con maquinaria de última generación para lograr tu mejor versión.</p>
                    </div>
                </div>

                <div className="activities-section" id='actividades'>
                    <div className="section-header">
                        <h2>Nuestras Actividades</h2>
                        <p>Descubre todo lo que Gimbo tiene para ofrecerte</p>
                    </div>

                    <div className="activities-grid">
                        <article className="activity-card">
                            <div className="activity-card__image">
                                <picture>
                                    <source srcSet='/fitness.webp' type='image/webp' />
                                    <img loading='lazy' src="/fitness.jpg" alt="Sala de aparatos" />
                                </picture>
                            </div>
                            <div className="activity-card__content">
                                <h3>Sala de Aparatos</h3>
                                <div className="schedule-info">
                                    <div className="schedule-col">
                                        <p><strong>Lunes, Miércoles, Viernes</strong></p>
                                        <p>8:00 a 13:00 y 15:00 a 22:00</p>
                                    </div>
                                    <div className="schedule-col">
                                        <p><strong>Martes y Jueves</strong></p>
                                        <p>8:00 a 13:00 y 15:00 a 19:00</p>
                                        <p className="weekend"><strong>Sábado:</strong> 8:00 a 13:00</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="activity-card">
                            <div className="activity-card__image">
                                <picture>
                                    <source srcSet='/karate.webp' type='image/webp' />
                                    <img loading='lazy' src="/karate.png" alt="Clases de Karate" />
                                </picture>
                            </div>
                            <div className="activity-card__content">
                                <h3>Clases de Karate</h3>
                                <div className="schedule-info">
                                    <div className="schedule-col">
                                        <p><strong>Martes y Jueves</strong></p>
                                        <p>19:00 hs (Niños/as)</p>
                                        <p>20:00 hs (Adolescentes y adultos)</p>
                                    </div>
                                </div>
                                <div className="activity-card__action">
                                    <a href="https://karate-tai-jitsu-web.vercel.app/" target="_blank" rel="noreferrer" className="btn-text">
                                        Explorar Propuesta Integral <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="special-services">
                        <div className="service-tag">
                            <BiDumbbell /> Entrenamiento Personalizado
                        </div>
                        <div className="service-tag">
                            <WiFire /> Clases de Defensa Personal
                        </div>
                        <div className="service-tag">
                            <WiTime3 /> Recuperación de Lesiones
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offered;