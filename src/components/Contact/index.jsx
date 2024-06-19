import './styles.css'

import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='contact-main-container' id="contact-section">
            <div className="contact-container">
                <div className="info-contact">
                    <h4>Contato</h4>
                    <h2>E então, vamos trazer sua ideia à tona?
                        Entre em contato conosco!
                    </h2>
                </div>
                <div className="button-contact">
                    <button><Link to="/contacts" style={{textDecoration:"none", color:"#fff"}}>Entrar em contato</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Contact