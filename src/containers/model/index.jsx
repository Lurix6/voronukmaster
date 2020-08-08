import React, { Fragment } from 'react';
import './style.scss';
import Button from '../../components/button/';
import { Link } from 'react-router-dom';
import EyeIcon from '../../assets/img/eye.svg'
import EmbedIcon from '../../assets/img/embed.svg'
import { MailOutlined, CaretDownOutlined, TagOutlined ,InboxOutlined, 
  FieldTimeOutlined, LockOutlined, StarFilled,
  PlusOutlined, ShareAltOutlined, FlagOutlined } from '@ant-design/icons';
import Tag from '../../components/uielements/tag';

export default function() {
  const width = window.innerWidth;
  return(
    <section className="model-page">
      <div className="model-page__content">
        <div className="model-page__left">
          <div className="model-page__view">
            <img src="http://art-master3d.com/image/cache/data/Category/Baget/baget-dlya-chpu-075-1079x606.jpg" />
          </div>
          <div className="model-page__left__main">
            <div className="modal-page__left__viewer-additional"> 
              <h1 className="model-name">
                <span className="model-name__label">Багет 1</span>
                <span className="model-name__type">3D MODEL</span>
              </h1>
              { (width < 950) ?
                (<div className="store-informations">
                  <div className="store-informations__buy" >
                    <div>
                      <p className="store-informations__buy__price">$5</p>
                      <Fragment>
                        <div>{ ['', '', '', '', ''].map(star => <StarFilled />) }</div>
                        <p className="store-informations__buy__reviews" >0 reviews</p>
                      </Fragment>
                    </div>
                    <div className="store-informations__add-to-cart" >
                      <Button>Add to cart</Button>
                    </div>
                  </div>
                  <div className="store-informations__more"> 
                    Show 3D model information
                  </div>
                </div>) : null
              }
              <div className="model-owner__wrapper">
                <div className="model-owner">
                  <Link to='/user/:id'>
                    <img className="model-owner__avatar" src="https://avatarfiles.alphacoders.com/849/thumb-84917.jpg" />
                  </Link>
                  <div className="model-owner__who-i-am">
                    <Link>zOOOOro</Link>
                    <Button>Follow</Button>
                  </div>
                </div>
                <div className="modal-status">
                  <div className="view-helper">
                    <div>
                      <EyeIcon />
                      <span className="count">1.2k</span>
                    </div>
                  </div>
                  <div className="add-helper">
                     <StarFilled />
                    <span className="count">100</span>
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <span><PlusOutlined />Додати</span>
                <span><ShareAltOutlined />Поділитися</span>
                <span><FlagOutlined />Репорт</span>
              </div>
              <div className="model-inf">
                <section className="model-inf__description">
                  <div className="model-inf__description__content">
                    <p>Low poly hand painted water mill Based on a painting by Citetanoi Sceppass</p>
                  </div>
                  <div className="model-inf__list">
                    <div className="model-inf__row" ><FieldTimeOutlined /> Published 5 years ago</div>
                    <div className="model-inf__row" ><InboxOutlined /><Tag >Architecture 3D models</Tag></div>
                    <div className="model-inf__row" ><TagOutlined /><Tag>dae</Tag><Tag>Cute</Tag><Tag>Grain</Tag><Tag>gg2015</Tag></div>
                  </div>
                </section>
                <div className="shove-more-toggle" >
                 <span>Show more <CaretDownOutlined /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="model-page__right">
          <div className="model-page__right__price_inf">
            <div className="model-page__right__price">
              <span>$24.99</span>
            </div>
            <ul className="model-page__right__header-inf">
              <li><LockOutlined /><span>Secure payment</span></li>
              <li><MailOutlined /><span>Support from sellers</span></li>
              <li><FieldTimeOutlined /><span>Access to future versions</span></li>
            </ul>
            <Button>ADD TO CART</Button>
            <div className="payment-solution">
              <div className="payment-solution-visa" ></div>
              <div className="payment-solution-master" ></div>
              <div className="payment-solution-paypal" ></div>
            </div>
          </div>
          <div className="model-page__detail-inf">
          </div>
        </div>
      </div>
    </section>
  )
}