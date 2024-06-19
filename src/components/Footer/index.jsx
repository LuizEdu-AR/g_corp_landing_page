import React from 'react'

import LogoHeader from '../../assets/img/g-header.png'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { Link } from 'react-router-dom'

import './styles.css'

const Footer = () => {
  return (
    <div className='footer-main-container'>
      <div className="informations-footer">
        <div className="logo-footer-container">
          <img src={LogoHeader} alt="Logo do Git" />
          <h3>- Corp <span className='blue-color'>Software</span> Solutions</h3>
        </div>
        <div className="socialmedia">
          <div className="socialmedia-info">
            <h3>Site</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Equipe</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
          <div className="socialmedia-info">
            <h3>Redes Sociais</h3>
            <ul>
              <li><Link to="/contacts">Facebook</Link></li>
              <li><a href="http://www.instagram.com/gcorp.softwaresolutions/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><Link to="/contacts">Twitter</Link></li>
              <li><Link to="/contacts">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <h3>Contato</h3>
          {/* <div className="cellphone">
            <LocalPhoneIcon />
            <p>Entrar em contato</p>
          </div> */}
          <div className="whatsapp">
            <WhatsAppIcon />
            <p><Link to="/contacts" style={{color:"#fff", textDecoration:"none"}}>Enviar Mensagem</Link></p>
          </div>
        </div>
      </div>
      <div className="copy-container">
        <p>Copyright &copy; 2024, Todos os direitos reservados à G-Corp Software Solutions</p>
      </div>
    </div>
  )
}

export default Footer