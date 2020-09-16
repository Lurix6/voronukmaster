import React from 'react';
import { Link } from 'react-router-dom'
import Baner from '../../../assets/img/baner.jpg'
import Car from '../../../assets/img/car.svg'
import Time from '../../../assets/img/time.svg'
import Mask from '../../../assets/img/mask.svg'
import { Form, Button, Carousel } from 'antd';
import { LeftOutlined, RightOutlined }  from '@ant-design/icons';
import MaskedInput from 'antd-mask-input'
import moment from 'moment'

export default ({addReview, setAddReviewVisible, setModalVisible, onFinish, advantage, goLeft, goRight, carouselAdvantageRef, comments, setComments, getCarouselSetting, carouselRef, ...othherProps}) => {
  const services = [
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F1.jpg?alt=media&token=ba0fef57-570d-404a-8093-55b062a905e7" />,
      title: 'Únik vody z práčky',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F2.jpg?alt=media&token=22c0ea5f-63dd-4a2c-971c-c0ffe3539a8c" />,
      title: 'Odstránenie netesností pod vaňou',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F3.jpg?alt=media&token=6affe66a-2cb6-4089-b4b6-5368c67497be" />,
      title: 'Eliminácia netesností potrubia',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F4.jpg?alt=media&token=3bfcbe8c-a4f0-40dc-a6d6-c2e04441383f" />,
      title: 'Eliminácia úniku z umývadlovej batérie',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F5.jpg?alt=media&token=44fb1258-1ee5-4ec5-b5e8-59d33526fab6" />,
      title: 'Eliminácia úniku sprchy',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F6.png?alt=media&token=75dc7ec0-c31e-4841-a0bb-e7605591bc11" />,
      title: 'Eliminácia úniku toalety',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F7.png?alt=media&token=c537229e-8ec0-43b6-9e37-158e1c7fc1b0" />,
      title: 'Odstránenie úniku z inštalácie',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F8.jpg?alt=media&token=82df0f86-301d-4cea-9f4e-949aa5f18651" />,
      title: 'Eliminácia úniku sifónu',
      price: 'Od 20 eur.'
    },
    {
      img: <img src="https://firebasestorage.googleapis.com/v0/b/voronukmaster.appspot.com/o/potechki%2F10.jpg?alt=media&token=b98e5dec-bbc2-4a08-9673-a2ccd62fbe5b" />,
      title: 'Odstránenie úniku vykurovacieho systému',
      price: 'Od 20 eur.'
    } 
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
              <div onClick={() => goRight(carouselRef)}>
                <LeftOutlined />
              </div>
            </div>
            <div className="go_right_dub">
            <div onClick={() => goLeft(carouselRef)}>
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