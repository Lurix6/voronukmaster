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
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F1.jpg?alt=media&token=a1f337c5-1537-480b-aa85-ae9115f2a985" />,
      title: 'Výmena umývadlovej batérie',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F2.jpg?alt=media&token=09b088d9-0c0b-4ede-bd40-44b2bc309e7b" />,
      title: 'Výmena štandardnej sprchy',
      price: 'Od 100 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F3.jpg?alt=media&token=7982f558-94d0-4bfb-9d77-5e6a36ac43c7" />,
      title: 'Výmena inštalácie',
      price: 'Od 50 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F4.jpg?alt=media&token=8228f727-d0ad-48cc-a735-40f5a05306ee" />,
      title: 'Výmena WC',
      price: 'Od 40 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F5.jpg?alt=media&token=acafc960-505b-4c4e-929c-5823c686b7ce" />,
      title: 'Výmena vaňe',
      price: 'Od 60 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F6.jpg?alt=media&token=4a4aa743-27f2-446f-a00f-73ca7e315a89" />,
      title: 'Výmena vírivky',
      price: 'Od 100 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F7.jpg?alt=media&token=f8fd933e-dd9c-41ca-b073-9156fa1a8eee" />,
      title: 'Výmena sifónu',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F8.jpg?alt=media&token=d1872c8e-33c2-47d1-afd3-d34d1306e00a" />,
      title: 'Výmena armatúr nádrže',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F9.jpg?alt=media&token=b80cc08c-4e62-46ff-b5ef-e5054454f2b1" />,
      title: 'Výmena pružnej hadice',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F10.jpg?alt=media&token=75d81874-9876-49d6-b9ee-3c732dbdb492" />,
      title: 'Výmena umývadla',
      price: 'Od 40 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F11.jpg?alt=media&token=e51226b3-82ba-41fe-bb8f-6724abd79e5a" />,
      title: 'Výmena vyhrievaného vešiaka na uteráky',
      price: 'Od 40 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F12.jpg?alt=media&token=e5fc5293-16fb-41e0-94ec-93f8498706fe" />,
      title: 'Výmena vodou ohrievaného vešiaka na uteráky',
      price: 'Od 40 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F13.jpg?alt=media&token=83917b7c-5cd0-440e-adcf-dab7067c293a" />,
      title: 'Výmena bidetu',
      price: 'Od 40 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F14.jpg?alt=media&token=76f1c8c6-b83a-4010-93bd-8fe10f51b95b" />,
      title: 'Výmena vykurovacieho radiátora',
      price: 'Оd 50 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/zamena_santehniki%2F15.jpg?alt=media&token=d5d1a56b-1477-42ca-9df7-ecf3d7076bc1" />,
      title: 'Výmena stúpačiek',
      price: 'Od 60 eur.'
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