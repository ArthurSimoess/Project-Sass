import React from 'react'

function Services() {
  return (
    <main className="services-container">
      <h2>O que fazemos</h2>
      <div className="services-card-container">
        <div className="services-card">
          <i class="fab fa-buffer"></i>
          <h3>Desenvolvimento full Stack</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia doloribus hic accusantium nesciunt unde beatae vel doloremque maiores possimus quam expedita culpa aliquid velit, nobis, eaque corrupti consectetur excepturi.</p>
        </div>
        <div className="services-card">
        <i class="fas fa-bolt"></i>
          <h3>Sites leves e rápidos</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia doloribus hic accusantium nesciunt unde beatae vel doloremque maiores possimus quam expedita culpa aliquid velit, nobis, eaque corrupti consectetur excepturi.</p>
        </div>
        <div className="services-card">
        <i class="fas fa-cart-plus"></i>
          <h3>E-comerces</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia doloribus hic accusantium nesciunt unde beatae vel doloremque maiores possimus quam expedita culpa aliquid velit, nobis, eaque corrupti consectetur excepturi.</p>
        </div>
        <div className="services-card">
        <i class="fas fa-chart-line"></i>
          <h3>SEo</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia doloribus hic accusantium nesciunt unde beatae vel doloremque maiores possimus quam expedita culpa aliquid velit, nobis, eaque corrupti consectetur excepturi.</p>
        </div>
        <div className="services-card">
          <i class="fas fa-chess-pawn"></i>
          <h3>Estratégia de marketing</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia doloribus hic accusantium nesciunt unde beatae vel doloremque maiores possimus quam expedita culpa aliquid velit, nobis, eaque corrupti consectetur excepturi.</p>
        </div>
        <div className="services-card">
        <i class="fas fa-cloud"></i>
          <h3>Hospedagem em AWS/azure</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia doloribus hic accusantium nesciunt unde beatae vel doloremque maiores possimus quam expedita culpa aliquid velit, nobis, eaque corrupti consectetur excepturi.</p>
        </div>
      </div>
      <a href='/' className="btn btn-primary btn-rounded">Veja todos os serviços</a>
    </main>
  )
}

export default Services;
