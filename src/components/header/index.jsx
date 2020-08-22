import React, { useEffect, useState } from 'react';
import './header';
import { Popover } from 'antd';
import Logo from '../../assets/img/main_logo.png'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { PhoneOutlined, MailOutlined, FacebookOutlined, MenuOutlined }  from '@ant-design/icons';

function Header({ phone, history, location }) {
  const [visible, setVisisble] = useState({visible: false, phoneNavBar: false});

  useEffect(() => {
    const scrollBox = document.querySelector('.scrollBox')
      scrollBox.addEventListener('scroll', scrollHendle);

      return () => {
        scrollBox.removeEventListener('scroll', scrollHendle);
      };
    }, []);

  const scrollHendle = (e) => {
    const scrollBox = document.querySelector('.scrollBox')

    if(scrollBox.scrollTop > 20 || visible.phoneNavBar) {
      setVisisble({...visible, visible: true})
    } else { 
      setVisisble({...visible, visible: fasle})
      }
    }

  const togleNavList = () => {
    setVisisble({phoneNavBar: !visible.phoneNavBar, visible: true})
  }

  const isActiveBar = (loc) => {
    return location.pathname.replace('/', '') === loc;
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

    const goHome = () => {
      history.push('/')
    }

  return (
    <header className={classNames("header", {[`is-visible`]: visible.visible })}>
      <div className="header-container">
        <div className="logo-container" onClick={goHome}>
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
          <div className="togle-open-menu " onClick={togleNavList} ><MenuOutlined /></div>
          </>
          ) : 
          (
            <ul className="header-nav" >
              <li><Link to='skuseny-instalater'>Skúsený inštalatér</Link></li>
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
      {
        visible.phoneNavBar &&       
        (<div className='nav-bar-collapsed'>
        <li className={classNames({'active-bar': isActiveBar('skuseny-instalater')})} ><Link to='skuseny-instalater'>Skúsený inštalatér</Link></li>
        <li className={classNames({'active-bar': isActiveBar('sluzbi')})} >Služby</li>
        <li className={classNames({'active-bar': isActiveBar('naglasit')})} >Nahlásiť problém</li>
        <li className={classNames({'active-bar': isActiveBar('referencie')})} >Referencie</li>
        <li className={classNames({'active-bar': isActiveBar('galaria')})} >Galéria</li>
        <li className={classNames({'active-bar': isActiveBar('kontact')})} >Kontakt</li>
      </div>)
      }
    </header>
  )
}

export default Header;