import Landingimg from '../../assets/img/landingpage.webp'

import './styles.css'

const Landing = () => {
  return (
    <div className='landing-main-container'>
      <div className="landing-info-container">
        <h1>Landing Page</h1>
        <p>É uma página focada em conversão, projetada para campanhas de marketing específicas. Ela captura leads e incentiva ações como inscrições, downloads ou compras, com um design minimalista e uma chamada para ação clara.</p>
      </div>
      <div className="image-landing-container"></div>
    </div>
  )
}

export default Landing