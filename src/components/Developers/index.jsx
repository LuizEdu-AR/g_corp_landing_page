import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css'

const Developers = () => {
  return (
    <div className='developer-main-container'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
        spaceBetween={100}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='swiper-container'
        style={{ padding: "25px" }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40
          },
        }}
      >
        <SwiperSlide>
          <div className="developer-container lets">
            <div className="info-developer">
              <h2>Nome: Letícia Gonçalves</h2>
              <p>Cargo: Dev BackEnd</p>
              <p className='description'>Descrição: Desenvolvedora BackEnd, domínio em python com o framework django, data science e desenvolvimento de IAs</p>
            </div>
            <div className="img-developer">
              <div className="img let"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="developer-container">
            <div className="info-developer">
              <h2>Nome: Luiz Eduardo</h2>
              <p>Cargo: Dev FrontEnd</p>
              <p className='description'>Descrição: Desenvolvedor FrontEnd, domínio em React com linguagem Javascrit, desenvolvimento web e integração com APIs DRF</p>
            </div>
            <div className="img-developer">
              <div className="img luiz"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="developer-container">
            <div className="info-developer">
              <h2>Nome: Orlando &#40;Rooy&#41;</h2>
              <p>Cargo: Designer Gráfico</p>
              <p className='description'>Descrição: Desenvolvedor FrontEnd, domínio em React com linguagem Javascrit, desenvolvimento web e integração com APIs DRF</p>
            </div>
            <div className="img-developer">
              <div className="img rooy"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Developers