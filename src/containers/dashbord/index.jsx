import React, { useRef, useState, useEffect  } from 'react';
import './style.scss';
import Baner from '../../assets/img/baner.jpg'
import Car from '../../assets/img/car.svg'
import Time from '../../assets/img/time.svg'
import Mask from '../../assets/img/mask.svg'
import MaskedInput from 'antd-mask-input'
import { Form, Button, Input } from 'antd';
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
import SiteContent from './routes';
import axios from 'axios';

const Dashbord = (props) => {
  const carouselRef = useRef();
  const carouselAdvantageRef = useRef();
  const [visibleModal, setModalVisible] = useState(false);
  const [addReview, setAddReviewVisible] = useState(false);
  const [comments, setComents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://us-central1-stl-list.cloudfunctions.net/main/getComments',
      );
        setComents(result.data.respnce);
    };
 
    fetchData();
  }, []);

  const openNotification = () => {
    notification.open({
      message: 'Ваш запит надіслано !',
      description:
        'Очікуйте дзвінка від майстра.',
    });
  };

  const addNewComment = async (data) => {
    const res = await axios.post('https://us-central1-stl-list.cloudfunctions.net/main/createComment', data)
    if( res.status === 200 ) {
      setComents([...comments, {...data, date: moment()}])
      setAddReviewVisible(false)
    }
  }

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

  const advantage = [
    {
      svg: <Garant />,
      title : 'Záruka až 3 roky',
      text: 'Všetka vykonaná práca je zaručená na 3 roky.'
    },
    {
      svg: <Speed />,
      title : 'Rýchlosť',
      text: 'Majster k vám príde 45 minút po hovore alebo v čase, ktorý vám vyhovuje.'
    },
    {
      svg: <Securety />,
      title : 'Bezpečnosť',
      text: 'Majster k vám príde 45 minút po hovore alebo v čase, ktorý vám vyhovuje.'
    },
    /*
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
    */
    {
      svg: <PayMent />,
      title : 'Akýkoľvek spôsob platby',
      text: 'Môžete platiť akýmkoľvek spôsobom, ktorý je pre vás vhodný.'
    },
    {
      svg: <Env />,
      title : 'Nákup a dodávka materiálu',
      text: 'Po diagnostike určím, čo je potrebné kúpiť a sám pôjdem do obchodu a doveziem.'
    },
    {
      svg: <Sale />,
      title : 'Zľavy',
      text: 'Pre stálych zákazníkov, ako aj pre dôchodcov, zľava 20% na všetky typy práce.'
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
              Zavolajte si odborníka už 
            </h1>
            <p className="price_text" >
              od 20 eur
            </p>
          </div>
          <div className="baner_content">
            <div className="about_us">
              <li><div><Car /></div><p>Obhliadka zadarmo</p></li>
              <li><div><Time /></div><p>Príchod 45 minút</p></li>
              <li><div><Mask /></div><p>Denná lekárska kontrola majstra</p></li>
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
                Zavoláme vám späť do 5 minúty
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
    <SiteContent {...props} setModalVisible={setModalVisible} />
    <div className="service_reviews">
      <div className="containr">
        <div className="title">
          <div className="main_title">
            <h1>Hodnotenia zákazníkov</h1>
          </div>
          <div className="sub_title">
            <p>на сайте { comments.length } отзывов</p>
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
        <div className="reviews_actions">
          <Button onClick={() => setAddReviewVisible(true)} >Оставить отзыв</Button>
          <Button>Смотреть все отзывы</Button>
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
    <div className="add_reviews_modal">
      <Modal
        visible={addReview}
        width={400}
        onCancel={() => setAddReviewVisible(false)}
        getContainer={() => document.querySelector(".add_reviews_modal")}
        footer={null}
      >
        <div className="add_review">
          <div className="title">
            <p>
              Оставьте отзыв
            </p>
          </div>
          <div className="body_content">
            <Form
              onFinish={addNewComment}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your Name!' }]}
              >
                <Input placeholder="Ваше имя" />
              </Form.Item>
              <Form.Item
                name="text"
                rules={[{ required: true, message: 'Please input your Text!' }]}
              >
                <Input.TextArea placeholder="Ваш текст"  rows="5" />
              </Form.Item>
              <Form.Item >
                <Button type="primary" htmlType="submit">
                  Оставить отзыв
                </Button>
              </Form.Item>
            </Form>
            </div>
        </div>
      </Modal>
    </div>
    <Footer openModal={() => setModalVisible(true)} />
  </div>
)
}

export default  Dashbord;