import React from 'react';
import { Link } from 'react-router-dom'
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
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F1.jpg?alt=media&token=47655e1a-5c89-478f-83f9-379ad623ae3a" />,
      title: 'Inštalácia bidetu',
      price: 'Od 60 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F2.jpg?alt=media&token=5a4e7973-8f8e-450b-807d-dbcabfbaee9a" />,
      title: 'Inštalácia vykurovacieho radiátora',
      price: 'Od 40 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F3.jpg?alt=media&token=4b380c2a-55b6-47de-b3aa-9c103e4f35e8" />,
      title: 'Inštalácia vaňe',
      price: 'Od 60 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F4.jpg?alt=media&token=b9bd3fb0-4eb1-493d-88eb-ca59849f89db" />,
      title: 'Inštalácia vírivky',
      price: 'Od 150 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F5.jpg?alt=media&token=129bae3c-3214-45a9-82a5-2a9696a686cc" />,
      title: 'Inštalácia umývadla',
      price: 'Od 25 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F6.jpg?alt=media&token=3182f3f0-3718-4409-b07d-c2bb38131024" />,
      title: 'Inštalácia toalety',
      price: 'Od 40 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F7.jpg?alt=media&token=4eb01fa8-abde-43e2-b044-366950569b32" />,
      title: 'Inštalácia drezu',
      price: 'Od 25 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F8.jpg?alt=media&token=d402d54c-2ddb-4952-ae20-4ba31de565e5" />,
      title: 'Inštalácia vodou vyhrievanej koľajnice na uteráky',
      price: 'Od 40 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F9.jpg?alt=media&token=58cfde90-23e5-4208-81b6-875beb2ebd83" />,
      title: 'Inštalácia štandardnej sprchy',
      price: 'Od 80 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F10.jpg?alt=media&token=a1e4b33d-1488-40bf-8c04-a189d4ea13f3" />,
      title: 'Inštalácia prečerpavačky',
      price: 'Od 40 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F11.jpg?alt=media&token=014e52c3-1753-4c9f-aaf6-379abe085a11" />,
      title: 'Inštalácia sprchovej kabíny s hydromasážou',
      price: 'Od 120 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F12.jpg?alt=media&token=1b58bea6-6d6c-4ab8-8852-8202a8d03a5d" />,
      title: 'Inštalácia umývadlovej batérie',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F13.jpg?alt=media&token=971701b7-b9a4-4b93-acf8-a645b207c389" />,
      title: 'Inštalácia závesného WC',
      price: 'Od 40 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/ustanovka%2F14.jpg?alt=media&token=7123bf4b-f9dc-4a56-871c-8a6c45e4a1e4" />,
      title: 'Montáž inštalácie',
      price: 'Od 40 eur.'
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
                    <h2><Link >{ item.title }</Link></h2>
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
          <Link to="vse-otzivi"><Button>Zobraziť všetky recenzie</Button></Link>
        </div>
      </div>
    </div>
    </>
  )
}