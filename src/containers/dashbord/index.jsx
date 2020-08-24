import React, { useRef, useState } from 'react';
import './style.scss';
import Baner from '../../assets/img/baner.jpg'
import Car from '../../assets/img/car.svg'
import Time from '../../assets/img/time.svg'
import Mask from '../../assets/img/mask.svg'
import MaskedInput from 'antd-mask-input'
import { Link } from 'react-router-dom'
import { Form, Button } from 'antd';
import moment from 'moment'
import { Carousel, Modal, notification  } from 'antd';
import { LeftOutlined, RightOutlined }  from '@ant-design/icons';
import MailCred from '../../helpers/emailCred/';
import emailjs from 'emailjs-com';

import Footer from '../../components/footer/';

import Garant from '../../assets/svg/garant.svg'
import Speed from '../../assets/svg/speed.svg'
import Securety from '../../assets/svg/securety.svg'
import Reliability from '../../assets/svg/reliability.svg'
import Return from '../../assets/svg/return.svg'
import PayMent from '../../assets/svg/payment.svg'
import Env from '../../assets/svg/env.svg'
import Sale from '../../assets/svg/sale.svg'

import Fignushki from '../../assets/img/fignushki.png'
import Santehnik from '../../assets/img/santehnik.jpg'
import Zasor from '../../assets/img/zasor.jpg'
import Vanna from '../../assets/img/vanna.jpg'
import Truba from '../../assets/img/truba.jpg'


const Dashbord = (props) => {
  const carouselRef = useRef();
  const carouselAdvantageRef = useRef();
  const [visibleModal, setModalVisible] = useState(false);

  const openNotification = () => {
    notification.open({
      message: 'Ваш запит надіслано !',
      description:
        'Очікуйте дзвінка від майстра.',
    });
  };

  const onFinish = values => {

    values.message_html = `<a href={tel:${values.phone}}>${values.phone}</a>`
    
    emailjs
    .send('gmail', MailCred.TEMPLATE_ID, values, MailCred.USER_ID)
    .then(
      result => {
        console.log(result.text)
        setModalVisible(false)
        openNotification()
      },
      error => {
        console.log(error.text)
      }
    )  
  };
  const getCarouselSetting = () => {
    const carouselSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    }

    if (window.innerWidth < 1025) {
      carouselSettings.slidesToShow = 1
      carouselSettings.slidesToScroll = 1
    }

    return carouselSettings

  }

  const review = [
    {
      name: 'Vadim',
      date: moment(),
      text: 'Благодарна компании,в частности,мастеру-Александру. Все выполнил,без занудства.Теперь все работает. Еще раз-СПАСИБО'
    },
    {
      name: 'Vadim',
      date: moment(),
      text: 'Благодарна компании,в частности,мастеру-Александру. Все выполнил,без занудства.Теперь все работает. Еще раз-СПАСИБО'
    },
    {
      name: 'Vadim',
      date: moment(),
      text: 'Благодарна компании,в частности,мастеру-Александру. Все выполнил,без занудства.Теперь все работает. Еще раз-СПАСИБО'
    },
    {
      name: 'Vadim',
      date: moment(),
      text: 'Благодарна компании,в частности,мастеру-Александру. Все выполнил,без занудства.Теперь все работает. Еще раз-СПАСИБО'
    },
    {
      name: 'Vadim',
      date: moment(),
      text: 'Благодарна компании,в частности,мастеру-Александру. Все выполнил,без занудства.Теперь все работает. Еще раз-СПАСИБО'
    },
  ]

  const advantage = [
    {
      svg: <Garant />,
      title : 'Гарантия до 3 лет',
      text: 'На все выполненные работы предоставляется гарантия сроком до 3 лет.'
    },
    {
      svg: <Speed />,
      title : 'Скорость',
      text: 'Мастер приедет к Вам через 45 минут после обращения или в удобное для Вас время.'
    },
    {
      svg: <Securety />,
      title : 'Безопасность',
      text: 'Все мастера перед началом работы меряют температуру. Приезжают в масках и перчатках.'
    },
    {
      svg: <Reliability/>,
      title : 'Надежность',
      text: 'Работаем с 2016 года. За 2019 год выполнили более 20 тыс. заказов.'
    },
    {
      svg: <Return />,
      title : 'Гарантия возврата денег',
      text: 'Если на заказе что-то пойдет не так, мы возместим сумму ущерба.'
    },
    {
      svg: <PayMent />,
      title : 'Любая форма оплаты',
      text: 'Вы можете произвести оплату любым удобным для себя способом.'
    },
    {
      svg: <Env />,
      title : 'Покупка и доставка комплектующих',
      text: 'Мастер после диагностики определит, что необходимо докупить и сам поедет в магазин.'
    },
    {
      svg: <Sale />,
      title : 'Скидки',
      text: 'Для постоянных клиентов, а также для пенсионеров скидка 20% на все виды работ.'
    },
  ]

  const services = [
    {
      img: <img src={Santehnik} />,
      title: 'Услуги сантехника',
      href: '',
      price: 'От 250 руб.'
    },
    {
      img: <img src={Zasor} />,
      title: 'Устранение засоров',
      href: '',
      price: 'От 790 руб.'
    },
    {
      img: <img src={Truba} />,
      title: 'Устранение протечек',
      href: '',
      price: 'От 490 руб.'
    },
    {
      img: <img src={Santehnik} />,
      title: 'Ремонт сантехники',
      href: '',
      price: 'От 250 руб.'
    },
    {
      img: <img src={Vanna} />,
      title: 'Установка сантехники',
      href: '',
      price: 'От 590 руб.'
    },
    {
      img: <img src={Fignushki} />,
      title: 'Разводка труб',
      href: '',
      price: 'От 390 руб.'
    },
  ]

  const goRight = (ref) => {
    const { current } = ref;
    current.slick.slickNext()
  }

  const goLeft = (ref) => {
    const { current } = ref;
    current.slick.slickPrev()
    }

  return (
  <div className="global_wrapper" >
    <div className="main_baner">
      <img src={Baner} alt="siteBaner"/>
      <div className="main_content__baner">
        <div className="main_content__baner_grid">
          <div className="baner_header">
            <h1>
              Сервис для вызова мастера
            </h1>
            <p className="price_text" >
              от 250 рублей
            </p>
          </div>
          <div className="baner_content">
            <div className="about_us">
              <li><div><Car /></div><p>Бесплатный выезд</p></li>
              <li><div><Time /></div><p>Приезд 45 минут</p></li>
              <li><div><Mask /></div><p>Ежедневный мед.контроль мастеров</p></li>
            </div>
            <div className="baner_form">
            <Form
              onFinish={onFinish}
            >
              <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Please input your Phone!' }]}
              >
                <MaskedInput mask="+7 (111) 111-1111"  size="10" />
              </Form.Item>
              <Form.Item >
                <Button type="primary" htmlType="submit">
                Вызвать мастера
                </Button>
              </Form.Item>
            </Form>
            </div>
            <div className="recoll">
                <p>Перезвоним в течение 1 минуты</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="advantages">
      <div className="advantages_wrapper">
        <div className="advantages_header">
          <h1>Наши преимущества</h1>
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
          <h1>Цены на услуги</h1>
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
                    <Button onClick={() => setModalVisible(true)} >Рассчитать стоимость</Button>
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
            <h1>Отзывы клиентов</h1>
          </div>
          <div className="sub_title">
            <p>на сайте 1106 отзывов</p>
            <p>Онлайн-отзывы появляются с задержкой в 5-10 минут</p>
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
                review.map((item, index) => (
                  <div key={index} className='rewiev-slide'>
                    <div className="side_body">
                      <div className="main_inf">
                        <div className="name">
                          <h3>{ item.name }</h3>
                        </div>
                        <div className="date">
                          <p>{ moment(item.date).format('DD MMMM YYYY') }</p>
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
      </div>
    </div>
    <div className="calculate_price_modal">
      <Modal
        visible={visibleModal}
        width={800}
        onCancel={() => setModalVisible(false)}
        getContainer={() => document.querySelector(".calculate_price_modal")}
        footer={null}
      >
        <div className="calculate_price">
          <div className="title">
            <Sale />
            <p>
              Рассчитать стоимость
            </p>
          </div>
          <div className="body_content">
            <div className="text_container">
              <p>
                Оставьте, пожалуйста, свой номер телефона, и наш специалист перезвонит Вам, чтобы <span class="text-yellow">сориентировать</span> по стоимости работ.
              </p>
            </div>
            <div className="call_back_form">
            <Form
              onFinish={onFinish}
            >
              <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Please input your Phone!' }]}
              >
                <MaskedInput mask="+7 (111) 111-1111"  size="10" />
              </Form.Item>
              <Form.Item >
                <Button type="primary" htmlType="submit">
                  Заказать звонок
                </Button>
              </Form.Item>
            </Form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
    <Footer openModal={() => setModalVisible(true)} />
  </div>
)
}

export default  Dashbord;