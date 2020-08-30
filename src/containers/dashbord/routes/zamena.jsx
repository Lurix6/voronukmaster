import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';

export default ({setModalVisible, ...othherProps}) => {
  const services = [
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F1.jpg?alt=media&token=a1f337c5-1537-480b-aa85-ae9115f2a985" />,
      title: 'Замена смесителя',
      price: 'От 890 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F2.jpg?alt=media&token=09b088d9-0c0b-4ede-bd40-44b2bc309e7b" />,
      title: 'Замена душевой кабины',
      price: 'От 2490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F3.jpg?alt=media&token=7982f558-94d0-4bfb-9d77-5e6a36ac43c7" />,
      title: 'Замена инсталляции',
      price: 'От 1890 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F4.jpg?alt=media&token=8228f727-d0ad-48cc-a735-40f5a05306ee" />,
      title: 'Замена унитаза',
      price: 'От 990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F5.jpg?alt=media&token=acafc960-505b-4c4e-929c-5823c686b7ce" />,
      title: 'Замена ванны',
      price: 'От 1290 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F6.jpg?alt=media&token=4a4aa743-27f2-446f-a00f-73ca7e315a89" />,
      title: 'Замена джакузи',
      price: 'От 1990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F7.jpg?alt=media&token=f8fd933e-dd9c-41ca-b073-9156fa1a8eee" />,
      title: 'Замена сифона',
      price: 'От 290 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F8.jpg?alt=media&token=d1872c8e-33c2-47d1-afd3-d34d1306e00a" />,
      title: 'Замена арматуры бачка',
      price: 'От 490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F9.jpg?alt=media&token=b80cc08c-4e62-46ff-b5ef-e5054454f2b1" />,
      title: 'Замена гибкой подводки',
      price: 'От 290 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F10.jpg?alt=media&token=75d81874-9876-49d6-b9ee-3c732dbdb492" />,
      title: 'Замена раковины',
      price: 'От 990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F11.jpg?alt=media&token=e51226b3-82ba-41fe-bb8f-6724abd79e5a" />,
      title: 'Замена полотенцесушителя ',
      price: 'От 1990 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F12.jpg?alt=media&token=e5fc5293-16fb-41e0-94ec-93f8498706fe" />,
      title: 'Замена водяного полотенцесушителя',
      price: 'От 2490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F13.jpg?alt=media&token=83917b7c-5cd0-440e-adcf-dab7067c293a" />,
      title: 'Замена биде',
      price: 'От 1490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F14.jpg?alt=media&token=76f1c8c6-b83a-4010-93bd-8fe10f51b95b" />,
      title: 'Замена радиатора отопления',
      price: 'От 1490 руб.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F15.jpg?alt=media&token=d5d1a56b-1477-42ca-9df7-ecf3d7076bc1" />,
      title: 'Замена стояков',
      price: 'От 2490 руб.'
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