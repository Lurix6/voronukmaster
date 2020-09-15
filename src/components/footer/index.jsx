import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd'
import './style.scss';
import Logo from '../../assets/img/main_logo2.png'
import FB from '../../assets/svg/fb.svg'
import IN from '../../assets/svg/in.svg'

const Footer = ({ openModal }) => {

  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_contact">
          <div className="left_block">
            <div className="img_wrapper">
              <Link to="/">
                <img src={Logo} alt=""/>              
              </Link>
            </div>
            <div className="contact_item_list">
              <div className="contact_item">
                <div className="item_title">
                  <p>
                    Telefón:
                  </p>
                </div>
                <div className="item_data">
                  <p>
                  <a href="tel:+421940136362">
                    +421940136-362
                  </a>
                  </p>
                </div>
              </div>
              <div className="contact_item">
                <div className="item_title">
                  <p>
                    Emailová adresa:
                  </p>
                </div>
                <div className="item_data">
                  <p>
                    <a href="mailto:kurenarvodarba@gmail.com">
                      kurenarvodarba@gmail.com
                    </a>
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
                <a href="tel:421940136362">
                  +421 (940) 136-362
                </a>
              </div>
              <p>Zavolajte nám, pracujeme sedem dní v týždni!</p>
                <div>
                  <Button onClick={openModal} >Podať svoju žiadosť</Button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fotter_sub">
        <div className="futer_sub_container">
        </div>
      </div>
    </div>
  )
}

export default  Footer;