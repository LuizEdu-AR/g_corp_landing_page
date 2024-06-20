import './styles.css'

import LogoHeader from '../../assets/img/g-header.png'

import { Link } from 'react-router-dom'

const Header = () => {

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='header-main-container'>
      <div className="logo-header-container">
        <img src={LogoHeader} alt="Logo do Git" />
        <Link to="/" style={{textDecoration:"none"}}><h3>- Corp <span className='blue-color'>Software</span> Solutions</h3></Link>
      </div>
      <div className="options-header-container">
        <ul>
          <li><a href="/#home-section" onClick={(e) => handleNavigation(e, 'home-section')}>Home</a></li>
          <li><a href="/#service-section" onClick={(e) => handleNavigation(e, 'service-section')}>Serviços</a></li>
          <li><a href="/#time-section" onClick={(e) => handleNavigation(e, 'time-section')}>Equipe</a></li>
          <li><a href="/#contact-section" onClick={(e) => handleNavigation(e, 'contact-section')}>Contato</a></li>
        </ul>
      </div>
      <div className="git-header-container">
        <button onClick={() => window.open('https://github.com', '_blank')}>GitHub</button>
      </div>
    </div >
  )
}

export default Header