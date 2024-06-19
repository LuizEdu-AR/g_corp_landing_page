import React from 'react'

import './styles.css'

const Developers = () => {
  return (
    <div className='developer-main-container'>
      <div className="developer-container">
        <div className="info-developer">
          <h2>Nome: Letícia Gonçalves</h2>
          <p>Cargo: Dev BackEnd</p>
          <p>Descrição: Desenvolvedora BackEnd, domínio em python com o framework django, data science e desenvolvimento de IAs</p>
        </div>
        <div className="img-developer">
          <div className="img let"></div>
        </div>
      </div>
      <div className="developer-container">
        <div className="info-developer">
          <h2>Nome: Luiz Eduardo</h2>
          <p>Cargo: Dev FrontEnd</p>
          <p>Descrição: Desenvolvedor FrontEnd, domínio em React com linguagem Javascrit, desenvolvimento web e integração com APIs DRF</p>
        </div>
        <div className="img-developer">
          <div className="img luiz"></div>
        </div>
      </div>
    </div>
  )
}

export default Developers