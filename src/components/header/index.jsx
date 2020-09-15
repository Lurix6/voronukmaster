import React, { useEffect, useState } from 'react';
import './header';
import { Button, Drawer, Collapse } from 'antd';
import Logo from '../../assets/img/main_logo2.png'
import { Link } from 'react-router-dom';
import {FieldTimeOutlined} from '@ant-design/icons';
import { MailOutlined, PhoneFilled, MenuOutlined }  from '@ant-design/icons';

const { Panel } = Collapse;

const phoneMenu = [
  {
    title: 'Inštalatér na zavolanie',
    href: '/',
  },
  {
    title: 'Inštalatérske práce',
    href: 'ustanovka-santehniki',
  },
  {
    title: 'Výmena sanity',
    href: 'zamena-santehniki',
  },
  {
    title: 'Montáž potrubia',
    href: 'razvodka-trub',
  },
  {
    title: 'Eliminácia netesností potrubia',
    href: 'ustranenie-protechek',
  },
  {
    title: 'Фото наших работ',
    href: 'photo-robot',
  },
]

function Header({ setModalVisible, phone, history, location }) {
  const [visible, setVisible] = useState(false);

  return (
    <header>
      <div>
        <div className="main_wrapper">
          <div className="main_wrapper__contant">
            <div className="main_wrapper_phone_togle" >
              <MenuOutlined onClick={() => setVisible(true)} />
            </div>
            <div className="main_logo">
              <Link to='/' >
                <img src={Logo} />
              </Link>
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
                <a href="tel:+421940136362">+421 (940) 136-362</a>
                <Button onClick={() => setModalVisible(true)}>
                  Оформить заказ
                </Button>
              </div>
            </div>
            <a className="phone_phone" href="tel:+421940136362"></a>
          </div>
        </div>
      </div>
     
      <div className="wrapper_header">
        <ul className="wrapper_header__container">
          {
            phoneMenu.map(item => <Link to={item.href} >{item.title}</Link>)
          }
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
                <li key={index} ><Link onClick={ () => setVisible(false)} to={item.href}>{item.title}</Link></li>
                ))
              }
            </div>
            <div className="mobile_menu_footer">
              <div className="mobile_sub_menu">
                <li>
                  <Link to="/vse-otzivi" >Отзывы</Link>
                </li>
              </div>
              <div className="mobile_call_data">
                <h2>Bratislava</h2>
                <h2>
                  <a href="tel:+42194036362">+421 (940) 136-362</a>
                </h2>
              </div>
            </div>
          </Drawer>
        </div>
    </header>
  )
}

export default Header;