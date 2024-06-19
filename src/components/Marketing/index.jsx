import React from 'react'

import './styles.css'

const Marketing = () => {
  return (
    <div className='marketing-main-container'>
      <div className="marketing-container">
        <div className="info-marketing">
          <h2>Nome: Orlando da Silva &#40;Rooy&#41;</h2>
          <p>Cargo: Designer Gráfico</p>
          <p>Descrição: Designer gráfico com habilidades na criação de designs atraentes e funcionais. Utilizo o Photoshop para produzir trabalhos detalhados e de alta qualidade, focando em elementos visuais que captam a atenção e comunicam eficazmente.</p>
        </div>
        <div className="img-marketing">
          <div className="img rooy"></div>
        </div>
      </div>
      <div className="marketing-container">
        <div className="info-marketing">
          <h2>Nome: Luiz Eduardo</h2>
          <p>Cargo: UI/UX Designer</p>
          <p>Descrição: UI/UX Design com experiência em criação de interfaces intuitivas e agradáveis para o usuário. Utilizo ferramentas como Figma para prototipagem e design de interfaces responsivas</p>
        </div>
        <div className="img-marketing">
          <div className="img luiz"></div>
        </div>
      </div>
    </div>
  )
}

export default Marketing