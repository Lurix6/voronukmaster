import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd'
import './style.scss';
import Logo from '../../assets/img/main_logo.png'
import VK from '../../assets/svg/vk.svg'
import FB from '../../assets/svg/fb.svg'
import IN from '../../assets/svg/in.svg'

const Footer = ({ openModal }) => {

  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_contact">
          <div className="left_block">
            <div className="img_wrapper">
              <img src={Logo} alt=""/>
            </div>
            <div className="contact_item_list">
              <div className="contact_item">
                <div className="item_title">
                  <p>
                    Телефон:
                  </p>
                </div>
                <div className="item_data">
                  <p>
                    +7 (499) 110-74-82
                  </p>
                </div>
              </div>
              <div className="contact_item">
                <div className="item_title">
                  <p>
                    Физический адрес:
                  </p>
                </div>
                <div className="item_data">
                  <p>
                    ул. Ленинский проспект 111
                  </p>
                </div>
              </div>
              <div className="contact_item">
                <div className="item_title">
                  <p>
                    E-mail адрес:
                  </p>
                </div>
                <div className="item_data">
                  <p>
                    support@santehnik-home.ru
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right_block">
            <div className="social_media">
                <a href="https://www.instagram.com/instalaterbratislava/">
                  <IN />
                </a>
                <a href="https://www.facebook.com/instalater.bratislava.3">
                  <FB />
                </a>
            </div>
            <div className="contact_us">
              <div className="call_us_phone">
                <a href="tel:+7 (499) 288-86-09">
                  +7 (499) 288-86-09
                </a>
              </div>
              <p>Звоните, работаем без выходных!</p>
              <Button onClick={openModal} >Оставить заявку</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="hor_bar" />
      <div className="fotter_sub">
        <div className="futer_sub_container">
          <p>© 2020 Центр бытовых услуг</p>
        </div>
      </div>
    </div>
  )
}

export default  Footer;