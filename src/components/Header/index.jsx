import './styles.css'

import LogoHeader from '../../assets/img/g-header.png'

const Header = () => {
  return (
    <div className='header-main-container'>
      <div className="logo-header-container">
        <img src={LogoHeader} alt="Logo do Git" />
        <h3>- Corp <span className='blue-color'>Software</span> Solutions</h3>
      </div>
      <div className="options-header-container">
        <ul>
          <li><a href="/#home-section">Home</a></li>
          <li><a href="/#service-section">Serviços</a></li>
          <li><a href="/#time-section">Equipe</a></li>
          <li><a href="/#contact-section">Contato</a></li>
        </ul>
      </div>
      <div className="git-header-container">
        <button onClick={() => window.open('https://github.com', '_blank')}>GitHub</button>
      </div>
    </div>
  )
}

export default Header