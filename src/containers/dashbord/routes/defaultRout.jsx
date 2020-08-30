import React from 'react';
import { Link } from 'react-router-dom'
import Fignushki from '../../../assets/img/fignushki.png'
import Santehnik from '../../../assets/img/santehnik.jpg'
import Zasor from '../../../assets/img/zasor.jpg'
import Vanna from '../../../assets/img/vanna.jpg'
import Truba from '../../../assets/img/truba.jpg'
import { Button } from 'antd';

export default ({setModalVisible, ...othherProps}) => {
  const services = [
    {
      img: <img src={Santehnik} />,
      title: 'Inštalatérske služby',
      href: '',
      price: 'od 25 eur vypočítať náklady.'
    },
    {
      img: <img src={Zasor} />,
      title: 'Čistenie upchatého potrubia',
      href: '',
      price: 'Od 50 eur.'
    },
    {
      img: <img src={Truba} />,
      title: 'Oprava netesností potrubia',
      href: '',
      price: 'Od 30 eur.'
    },
    {
      img: <img src={Santehnik} />,
      title: 'Montáž sanity',
      href: '',
      price: 'Od 30 eur.'
    },
    {
      img: <img src={Fignushki} />,
      title: 'Montáž potrubia',
      href: '',
      price: 'Od 25 eur.'
    },
  ]
  return(
    <div className="base">
      <div className="base_wrapper">
        <div className="base_heder">
          <h1>Ceny služieb</h1>
        </div>
        <div className="base_main_container">
          {
            services.map((item, index) => (
              <div key={index} className="grid_item_wrapper">
                <div className="grid_item">
                  <div className="preview">
                    { item.img }
                    <h2><Link to={item.href}>{ item.title }</Link></h2>
                  </div>
                  <div className="price">
                    <p>{ item.price }</p>
                  </div>
                  <div className="action">
                    <Button onClick={() => setModalVisible(true)} >Рассчитать стоимость</Button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}