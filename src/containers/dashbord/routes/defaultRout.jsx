import React from 'react';
import { Link } from 'react-router-dom'
import Fignushki from '../../../assets/img/fignushki.png'
import Santehnik from '../../../assets/img/santehnik.jpg'
import Zasor from '../../../assets/img/zasor.jpg'
import Truba from '../../../assets/img/truba.jpg'
import Baner from '../../../assets/img/baner.jpg'
import Car from '../../../assets/img/car.svg'
import Time from '../../../assets/img/time.svg'
import Mask from '../../../assets/img/mask.svg'
import { Form, Button, Input, Carousel } from 'antd';
import { LeftOutlined, RightOutlined }  from '@ant-design/icons';
import MaskedInput from 'antd-mask-input'
import moment from 'moment'

export default ({addReview, setAddReviewVisible, setModalVisible, onFinish, advantage, goLeft, goRight, carouselAdvantageRef, comments, setComments, getCarouselSetting, carouselRef, ...othherProps}) => {
  const services = [
    {
      img: <img src={Santehnik} />,
      title: 'Inštalatérske služby',
      href: '',
      price: 'Od 25 eur.'
    },
    {
      img: <img src={Zasor} />,
      title: 'Čistenie upchatého potrubia',
      href: '',
      price: 'Od 50 eur.'
    },
    {
      img: <img src={Truba} />,
      title: 'Oprava netesností potrubia',
      href: '',
      price: 'Od 30 eur.'
    },
    {
      img: <img src={Santehnik} />,
      title: 'Montáž sanity',
      href: '',
      price: 'Od 30 eur.'
    },
    {
      img: <img src={Fignushki} />,
      title: 'Montáž potrubia',
      href: '',
      price: 'Od 25 eur.'
    },
  ]
  return(
    <>
      <div className="main_baner">
      <img src={Baner} alt="siteBaner"/>
      <div className="main_content__baner">
        <div className="main_content__baner_grid">
          <div className="baner_header">
            <h1>
              Zavolajte si odborníka už 
            </h1>
            <p className="price_text" >
              od 20 eur
            </p>
          </div>
          <div className="baner_content">
            <div className="about_us">
              <li><div><Car /></div><p>Obhliadka zadarmo</p></li>
              <li><div><Time /></div><p>Príchod do 45 minút</p></li>
              <li><div><Mask /></div><p>Denná lekárska kontrola majstra</p></li>
            </div>
            <div className="baner_form">
            <Form
              onFinish={onFinish}
            >
              <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Zadajte svoje číslo!' }]}
              >
                <MaskedInput mask="+421 (111) 111-111"  size="10" />
              </Form.Item>
              <Form.Item >
                <Button type="primary" htmlType="submit">
                  Vyžiadajte si hovor
                </Button>
              </Form.Item>
            </Form>
            </div>
            <div className="recoll">
                <p>Zavoláme vám späť do 5 minút</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="advantages">
      <div className="advantages_wrapper">
        <div className="advantages_header">
          <h1>Naše výhody</h1>
        </div>
        { window.innerWidth > 1025 ?
        
        <div className="grid_advantages_scroll">
          <div className="go_left">
            <div onClick={() => goLeft(carouselAdvantageRef)} >
              <LeftOutlined />
            </div>
          </div>
          <Carousel
            ref={carouselAdvantageRef}
            dots={false}
            infinite={false}
            speed={500}
            slidesToShow={4}
            slidesToScroll={2}
            autoplay={false}>
            { advantage.map((item, index) => 
              (<div className="scrol_grid_item" key={index}>
                { item.svg }
                <div className="title">{item.title }</div>
                <div className="text">{item.text}</div>
              </div>)
              )  
            }
          </Carousel>
          <div className="go_right">
            <div onClick={() => goRight(carouselAdvantageRef)} >
              <RightOutlined />
            </div>
          </div>
      </div>
        : 
        <div className="grid_advantages">
          { 
            advantage.map((item, index) => 
            (<div className="grid_item" key={index}>
              { item.svg }
              <div className="title">{item.title }</div>
              <div className="text">{item.text}</div>
            </div>)
            )  
          }
        </div>
        }
      </div>
    </div>
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
                    <h2><Link to={item.href}>{ item.title }</Link></h2>
                  </div>
                  <div className="price">
                    <p>{ item.price }</p>
                  </div>
                  <div className="action">
                    <Button onClick={() => setModalVisible(true)} >Vypočítať náklady</Button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    <div className="service_reviews">
      <div className="containr">
        <div className="title">
          <div className="main_title">
            <h1>Hodnotenia zákazníkov</h1>
          </div>
          <div className="sub_title">
            <p>Na stránke { comments.length } recenzií</p>
            <p>Recenzie sa objavujú s oneskorením 5-10 minút</p>
          </div>
        </div>
        <div className="main_cntainer">
          <div className="go_left">
            <div onClick={() => goLeft(carouselRef)}>
              <LeftOutlined />
            </div>
          </div>
          <Carousel 
            {...getCarouselSetting()}
            ref={ carouselRef }
            autoplay={false}>
              {
                comments.map((item, index) => (
                  <div key={index} className='rewiev-slide'>
                    <div className="side_body">
                      <div className="main_inf">
                        <div className="name">
                          <h3>{ item.name }</h3>
                        </div>
                        <div className="date">
                          <p>{ moment.unix(item.date._seconds).format('DD-MM-YYYY') }</p>
                        </div>
                      </div>
                      <div className="green_small_bar" ></div>
                      <div className="side__rewiew">
                        { item.text }
                      </div>
                    </div>
                  </div>
                )) 
              }
          </Carousel>
          <div className="go_right">
            <div onClick={() => goRight(carouselRef)}>
              <RightOutlined />
            </div>
          </div>
          <div className="second_review_controlers">
            <div className="go_left_dub">
              <div onClick={() => goLeft(carouselRef)}>
                <LeftOutlined />
              </div>
            </div>
            <div className="go_right_dub">
            <div onClick={() => goRight(carouselRef)}>
              <RightOutlined />
            </div>
          </div>
          </div>
        </div>
        <div className="reviews_actions">
          <Button onClick={() => setAddReviewVisible(true)} >Zanechať recenziu</Button>
          <Link to="všetky-recenzie"><Button>Zobraziť všetky recenzie</Button></Link>
        </div>
      </div>
    </div>
    </>
  )
}