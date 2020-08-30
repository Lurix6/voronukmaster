import React from 'react';
import { Link } from 'react-router-dom'

import { Button } from 'antd';

export default ({setModalVisible, ...othherProps}) => {
  const services = [
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F1.jpg?alt=media&token=ba0fef57-570d-404a-8093-55b062a905e7" />,
      title: 'Протечка стиральной машины',
      price: 'От 790 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F2.jpg?alt=media&token=22c0ea5f-63dd-4a2c-971c-c0ffe3539a8c" />,
      title: 'Устранение протечки под ванной',
      price: 'От 990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F3.jpg?alt=media&token=6affe66a-2cb6-4089-b4b6-5368c67497be" />,
      title: 'Устранение протечки труб',
      price: 'От 990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F4.jpg?alt=media&token=3bfcbe8c-a4f0-40dc-a6d6-c2e04441383f" />,
      title: 'Устранение протечки смесителя',
      price: 'От 490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F5.jpg?alt=media&token=44fb1258-1ee5-4ec5-b5e8-59d33526fab6" />,
      title: 'Устранение протечки душевой кабины',
      price: 'От 1490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F6.png?alt=media&token=75dc7ec0-c31e-4841-a0bb-e7605591bc11" />,
      title: 'Устранение протечки унитаза',
      price: 'От 490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F7.png?alt=media&token=c537229e-8ec0-43b6-9e37-158e1c7fc1b0" />,
      title: 'Устранение протечки инсталляции',
      price: 'От 990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F8.jpg?alt=media&token=82df0f86-301d-4cea-9f4e-949aa5f18651" />,
      title: 'Устранение протечки сифона',
      price: 'От 990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />,
      title: 'Устранение протечки системы отопления',
      price: 'От 990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F11.jpg?alt=media&token=66053659-37b9-4f8d-a3b4-66d6ba5cca68" />,
      title: 'Устранение протечки системы отопления',
      price: 'От 990 руб.'
    }  
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
                    <h2><Link >{ item.title }</Link></h2>
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