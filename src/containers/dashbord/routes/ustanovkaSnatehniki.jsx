import React from 'react';
import { Link } from 'react-router-dom'

import { Button } from 'antd';

export default ({setModalVisible, ...othherProps}) => {
  const services = [
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F1.jpg?alt=media&token=47655e1a-5c89-478f-83f9-379ad623ae3a" />,
      title: 'Установка биде',
      price: 'От 1390 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F2.jpg?alt=media&token=5a4e7973-8f8e-450b-807d-dbcabfbaee9a" />,
      title: 'Установка радиатора отопления',
      price: 'От 1490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F3.jpg?alt=media&token=4b380c2a-55b6-47de-b3aa-9c103e4f35e8" />,
      title: 'Установка ванны',
      price: 'От 1490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F4.jpg?alt=media&token=b9bd3fb0-4eb1-493d-88eb-ca59849f89db" />,
      title: 'Установка джакузи',
      price: 'От 1490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F5.jpg?alt=media&token=129bae3c-3214-45a9-82a5-2a9696a686cc" />,
      title: 'Установка раковины',
      price: 'От 990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F6.jpg?alt=media&token=3182f3f0-3718-4409-b07d-c2bb38131024" />,
      title: 'Установка унитаза',
      price: 'От 990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F7.jpg?alt=media&token=4eb01fa8-abde-43e2-b044-366950569b32" />,
      title: 'Установка мойки',
      price: 'От 790 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F8.jpg?alt=media&token=d402d54c-2ddb-4952-ae20-4ba31de565e5" />,
      title: 'Установка водяного полотенцесушителя',
      price: 'От 1490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F9.jpg?alt=media&token=58cfde90-23e5-4208-81b6-875beb2ebd83" />,
      title: 'Установка стандартной душевой кабины',
      price: 'От 1990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F10.jpg?alt=media&token=a1e4b33d-1488-40bf-8c04-a189d4ea13f3" />,
      title: 'Установка душевой кабины с гидромассажем',
      price: 'От 2990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F11.jpg?alt=media&token=014e52c3-1753-4c9f-aaf6-379abe085a11" />,
      title: 'Установка смесителя',
      price: 'От 590 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F12.jpg?alt=media&token=1b58bea6-6d6c-4ab8-8852-8202a8d03a5d" />,
      title: 'Установка подвесного унитаза',
      price: 'От 1450 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F13.jpg?alt=media&token=971701b7-b9a4-4b93-acf8-a645b207c389" />,
      title: 'Установка инсталляции ',
      price: 'От 1990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F14.jpg?alt=media&token=7123bf4b-f9dc-4a56-871c-8a6c45e4a1e4" />,
      title: 'Установка полотенцесушителя',
      price: 'От 1990 руб.'
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