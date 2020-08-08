import React, { useEffect, useState } from 'react';
import './header';
import { Popover } from 'antd';
import Logo from '../../assets/img/main_logo.png'
import classNames from 'classnames';
import { PhoneOutlined, MailOutlined, FacebookOutlined, MenuOutlined }  from '@ant-design/icons';

function Header({ phone }) {
  const [visible, setVisisble] = useState(false);

  useEffect(() => {
    const scrollBox = document.querySelector('.scrollBox')

      scrollBox.addEventListener('scroll', scrollHendle);

      return () => {
        scrollBox.removeEventListener('scroll', scrollHendle);
      };
    }, []);

  const scrollHendle = (e) => {
    const scrollBox = document.querySelector('.scrollBox')


    if(scrollBox.scrollTop > 20 ) {
        setVisisble(true)
      } else { setVisisble(false)}
  }

  const popoverContent = (
      <ul>
        <li>Elektroservis</li>
        <li>Vodoinštalácie</li>
        <li>Kúpeľne a sanita</li>
        <li>Kuchyňa</li>
        <li>Bazény</li>
      </ul>
    )

  return (
    <header className={classNames("header", {[`is-visible`]: visible })}>
      <div className="header-container">
        <div className="logo-container">
          <img src={Logo} />
          <div className="logo-container">
            <span className="logo-text">
            </span>
          </div>
        </div>
        <div className="right-container">
          <div style={{display: 'flex'}} >
          { phone ?
          (<>
            <ul className="header-nav-mobile">
            <li><PhoneOutlined /></li>
            <li><MailOutlined /></li>
            <li><FacebookOutlined /></li>
          </ul>
          <div className="togle-open-menu " ><MenuOutlined /></div>
          </>
          ) : 
          (
            <ul className="header-nav" >
              <li>Skúsený inštalatér</li>
              <Popover
                placement="bottomLeft"
                content={popoverContent}
                className='poper-container'
                getPopupContainer={(triger) => document.querySelector('.right-container')  }
                trigger="hover">
                <Popover
                  placement="bottomLeft"
                  className='poper-container'
                  getPopupContainer={(triger) => document.querySelector('.right-container') }

                  content={popoverContent}
                  trigger="click">
                 <li>Služby</li>
                </Popover>
              </Popover>
              <li>Nahlásiť problém</li>
              <li>Referencie</li>
              <li>Galéria</li>
              <li>Kontakt</li>
            </ul>
          )
          }  
          </div>
          { !phone && (
            <div className="under-header">
              <li><PhoneOutlined /></li>
              <li><MailOutlined /></li>
              <li><FacebookOutlined /></li>          
            </div>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Header;