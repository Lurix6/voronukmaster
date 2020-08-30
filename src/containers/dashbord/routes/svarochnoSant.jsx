import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';

export default ({setModalVisible, ...othherProps}) => {
  const services = [
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/svarka%2F1.jpg?alt=media&token=dec56f0a-425e-4b07-bca7-41e6191fcfd5" />,
      title: 'Ремонт сантехники',
      price: 'От 250 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/svarka%2F2.jpg?alt=media&token=651852c4-5bd7-4f66-aa38-4b5a9e852fc7" />,
      title: 'Устранение засоров',
      price: 'От 790 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/svarka%2F3.jpg?alt=media&token=544b59c9-2ed9-47ae-a75a-e01bde517b75" />,
      title: 'Установка сантехники',
      price: 'От 590 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/svarka%2F4.jpg?alt=media&token=a3507f7e-dfd3-42cf-bed4-1d924e1520b4" />,
      title: 'Устранение протечек',
      price: 'От 490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/svarka%2F5.jpg?alt=media&token=98b80a5c-4850-49b4-b6ae-2c0e597c444d" />,
      title: 'Разводка и замена труб',
      price: 'От 1290 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/svarka%2F6.jpg?alt=media&token=4836380d-8711-4b8a-b2f3-3e4c99c50c9f" />,
      title: 'Ремонт труб',
      price: 'От 990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/svarka%2F7.jpg?alt=media&token=6403acb6-10b1-4e85-8322-04ec1b53f99d" />,
      title: 'Замена сифона',
      price: 'От 290 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/svarka%2F8.jpg?alt=media&token=47441636-ad32-4e35-9e4c-cec0521254e3" />,
      title: 'Замена арматуры бачка',
      price: 'От 490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/svarka%2F9.jpg?alt=media&token=23924073-3fbf-4142-978c-3282021d89a1" />,
      title: 'Замена гибкой подводки',
      price: 'От 290 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/svarka%2F10.jpg?alt=media&token=ab71b228-7840-451e-9d30-973e7cf56c3d" />,
      title: 'Замена раковины',
      price: 'От 990 руб.'
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