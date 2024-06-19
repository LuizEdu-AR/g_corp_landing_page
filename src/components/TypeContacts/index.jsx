import { Link } from 'react-router-dom'

import GithubLogo from '../../assets/svg/github.svg'
import WppLogo from '../../assets/svg/wpp.svg'
import Instalogo from '../../assets/svg/insta.svg'
import GmailLogo from '../../assets/svg/gmail.svg'
import GitQr from '../../assets/img/gitqr.png'
import WppQr from '../../assets/img/wppqr.png'
import InstaQr from '../../assets/img/instaqr.png'
import GmailQr from '../../assets/img/gmailqr.png'

import './styles.css'

const TypeContacts = () => {
    return (
        <div className='typecontacts-main-container'>
            <div className="typecontacts-container">
                <div className="typecontacts-logo">
                    <img src={GithubLogo} alt="Github Logo" />
                </div>
                <div className="typecontacts-link">
                    <p><a href="http://www.github.com/" target="_blank" rel="noopener noreferrer">Nosso Github</a></p>
                </div>
                <div className="typecontacts-qrcode">
                    <img src={GitQr} alt="Github QR Code" />
                </div>
            </div>
            <div className="typecontacts-container">
                <div className="typecontacts-logo">
                    <img src={WppLogo} alt="Whatsapp Logo" />
                </div>
                <div className="typecontacts-link">
                    <p>&#40;62&#41; 98244-3568</p>
                </div>
                <div className="typecontacts-qrcode">
                    <img src={WppQr} alt="Whatsapp QR Code" />
                </div>
            </div>
            <div className="typecontacts-container">
                <div className="typecontacts-logo">
                    <img src={Instalogo} alt="Instagram Logo" />
                </div>
                <div className="typecontacts-link">
                    <p>
                        <a href="http://www.instagram.com/gcorp.softwaresolutions/" target="_blank" rel="noopener noreferrer">Nosso Instagram</a>
                    </p>
                </div>
                <div className="typecontacts-qrcode">
                    <img src={InstaQr} alt="Instagram QR Code" />
                </div>
            </div>
            <div className="typecontacts-container">
                <div className="typecontacts-logo">
                    <img src={GmailLogo} alt="Gmail Logo" />
                </div>
                <div className="typecontacts-link">
                    <p>
                        <a href="mailto:gcorp.softwaresolutions@gmail.com" target="_blank" rel="noopener noreferrer">Nosso Email</a>
                    </p>
                </div>
                <div className="typecontacts-qrcode">
                    <img src={GmailQr} alt="Gmail QR Code" />
                </div>
            </div>
            <button className='back-button'><Link to="/" className='link-back'>Voltar</Link></button>
        </div>
    )
}

export default TypeContacts