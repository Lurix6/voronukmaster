import React, { useEffect, useState } from 'react';
import './header';
import { Button } from 'antd';
import Logo from '../../assets/img/main_logo.png'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {FieldTimeOutlined} from '@ant-design/icons';
import { PhoneOutlined, MailOutlined, FacebookOutlined, MenuOutlined }  from '@ant-design/icons';

function Header({ phone, history, location }) {

  return (
    <header>
      <div className="main_wrapper">
        <div className="main_wrapper__contant">
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
        </div>
      </div>
      <div className="wrapper_header">
        <ul className="wrapper_header__container">
        
        </ul>
      </div>
    </header>
  )
}

export default Header;