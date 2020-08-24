import React, { useEffect, useState } from 'react';
import './header';
import { Button, Drawer, Collapse } from 'antd';
import Logo from '../../assets/img/main_logo.png'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {FieldTimeOutlined} from '@ant-design/icons';
import { MailOutlined, PhoneFilled, MenuOutlined }  from '@ant-design/icons';

const { Panel } = Collapse;

const phoneMenu = [
  {
    title: 'Сантехник по вызову',
    href: '',
  },
  {
    title: 'Установка сантехники',
    href: '',
  },
  {
    title: 'Замена сантехники',
    href: '',
  },
  {
    title: 'Разводка труб',
    href: '',
  },
  {
    title: 'Сварочно сантехнические работы',
    href: '',
  },
  {
    title: 'Устранение протечки трубы',
    href: '',
  },
  {
    title: 'Фото наших работ',
    href: '',
  },
]

function Header({ phone, history, location }) {
  const [visible, setVisible] = useState(false);

  return (
    <header>
      <div className="main_wrapper">
        <div className="main_wrapper__contant">
          <div className="main_wrapper_phone_togle" >
            <MenuOutlined onClick={() => setVisible(true)} />
          </div>
          <div className="main_logo">
            <img src={Logo} />
          </div>
          <div className="short_mewnu">
            <div className="work_time">
              <FieldTimeOutlined />
              <p>Every day 24/7</p>
            </div>
          </div>
          <div className="contact_box">
            <div className="content_box__left">
              Bratislava 
            </div>
            <div className="content_box__right">
              <a href="tel:+74991109524">+7 (499) 110-95-24 </a>
              <Button>
                Оформить заказ
              </Button>
            </div>
          </div>
          <a className="phone_phone" href="tel:+74991109524"></a>
        </div>
      </div>
      <div className="wrapper_header">
        <ul className="wrapper_header__container">
        
        </ul>
      </div>
      <div className="phone_driver">
        <Drawer
            title={<p> Ewery day 24/7  </p>}
            placement={'left'}
            closable={false}
            onClose={() => setVisible(false)}
            visible={visible}
            getContainer={() => document.querySelector(".phone_driver")}
            key={'left'}
          >
            <div className="mobile_main_menu">
              {
                phoneMenu.map((item, index ) => (
                <li key={index} ><Link to={item.href}>{item.title}</Link></li>
                ))
              }
            </div>
            <div className="mobile_menu_footer">
              <div className="mobile_sub_menu">
                <li>
                  <a href="#service_reviews">Отзывы</a>
                </li>
                <li>
                  <a href="">Вопрос-ответ</a>
                </li>
              </div>
              <div className="mobile_call_data">
                <h2>Bratislava</h2>
                <h2>
                  <a href="tel:+74991109524">+74991109524</a>
                </h2>
              </div>
            </div>
          </Drawer>
        </div>
    </header>
  )
}

export default Header;