import LogoHome from '../../assets/img/logohome.png'

import './styles.css'

const HomePage = () => {

    const scrollToServices = () => {
        const servicesSection = document.getElementById('service-section');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='home-main-container' id='home-section'>
            <div className="information-home">
                <h1>Seu sonho vira <span className='blue-color'>código</span>!</h1>
                <h3>
                    Estamos prontos para transformar sua visão
                    em realidade com <span className='blue-color'>soluções tecnológicas
                        inovadoras</span>
                </h3>
                <button onClick={scrollToServices}>Nossos serviços</button>
            </div>
            <div className="logo-home">
                <img src={LogoHome} alt="Logo Home" />
                <span className='linha-home'></span>
            </div>
        </div>
    )
}

export default HomePage