import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';

export default ({setModalVisible, ...othherProps}) => {
  const services = [
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/razvodka_trub%2F1.jpg?alt=media&token=04f84c17-d3f4-4640-bb33-8c76c9ed4777" />,
      title: 'Установка биде',
      price: 'От 1390 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/razvodka_trub%2F2.jpg?alt=media&token=12b73b71-bbed-487b-97aa-d0dada8f7597" />,
      title: 'Установка радиатора отопления',
      price: 'От 1490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/razvodka_trub%2F3.jpg?alt=media&token=4b59cf39-9010-408f-8071-ffddc3949d05" />,
      title: 'Установка ванны',
      price: 'От 1490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/razvodka_trub%2F4.jpeg?alt=media&token=ab9354e2-e752-43ab-8fe0-fe062b632e27" />,
      title: 'Установка джакузи',
      price: 'От 1490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/razvodka_trub%2F4.jpeg?alt=media&token=ab9354e2-e752-43ab-8fe0-fe062b632e27" />,
      title: 'Установка раковины',
      price: 'От 990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/razvodka_trub%2F6.jpg?alt=media&token=ed2ade4e-35cd-4fed-aa26-813c1e3ae868" />,
      title: 'Установка унитаза',
      price: 'От 990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/razvodka_trub%2F7.jpg?alt=media&token=e4728e92-f5a9-4d62-b52c-4fe61f43ebe4" />,
      title: 'Установка мойки',
      price: 'От 790 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/razvodka_trub%2F8.jpg?alt=media&token=f05878ab-ae3e-46e5-afbd-2fe57c7bc4b6" />,
      title: 'Установка водяного полотенцесушителя',
      price: 'От 1490 руб.'
    }
  ]
  return(
    <div className="base">
      <div className="base_wrapper">
        <div className="base_heder">
          <h1>Цены на услуги</h1>
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