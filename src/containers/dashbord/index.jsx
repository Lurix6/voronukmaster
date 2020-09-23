import React, { useRef, useState, useEffect  } from 'react';
import './style.scss';
import MaskedInput from 'antd-mask-input'
import { Form, Button, Input } from 'antd';
import { Carousel, Modal, notification  } from 'antd';
import MailCred from '../../helpers/emailCred/';
import emailjs from 'emailjs-com';
import Footer from '../../components/footer/';
import Garant from '../../assets/svg/garant.svg'
import Speed from '../../assets/svg/speed.svg'
import Securety from '../../assets/svg/securety.svg'
import PayMent from '../../assets/svg/payment.svg'
import Env from '../../assets/svg/env.svg'
import Sale from '../../assets/svg/sale.svg'
import SiteContent from './routes';
import axios from 'axios';

const Dashbord = ({visibleModal, setModalVisible, ...restProps}) => {
  const carouselRef = useRef();
  const carouselAdvantageRef = useRef();
  const [addReview, setAddReviewVisible] = useState(false);
  const [comments, setComents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://us-central1-kurenar-vodar.cloudfunctions.net/main/getComments',
      );
        setComents(result.data.respnce);
    };
 
    fetchData();
  }, []);

  const openNotification = () => {
    notification.open({
      message: 'Vaša žiadosť bola odoslaná!',
      description:
        'Počkajte na telefonát od majstra.',
    });
  };

  const addNewComment = async (data) => {
    const res = await axios.post('https://us-central1-kurenar-vodar.cloudfunctions.net/main/createComment', data)
    if( res.status === 200 ) {
      setComents([...comments, {...data, date: {_seconds: new Date().getTime()/1000}}])
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
      text: 'Majster k vám príde do 45 minút po hovore alebo v čase, ktorý vám vyhovuje.'
    },
    {
      svg: <Securety />,
      title : 'Bezpečnosť',
      text: 'Myslím na vaše aj svoje zdravie preto prídem v rúšku a rukaviciach.'
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
    <SiteContent {...restProps} 
      setModalVisible={setModalVisible} 
      onFinish={onFinish} 
      goLeft={goLeft} 
      goRight={goRight} 
      advantage={advantage} 
      carouselAdvantageRef={carouselAdvantageRef}
      comments={comments}
      setComents={setComents}
      getCarouselSetting={getCarouselSetting}
      carouselRef={carouselRef}
      addReview={addReview}
      setAddReviewVisible={setAddReviewVisible}
      />
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
              Vypočítať náklady
            </p>
          </div>
          <div className="body_content">
            <div className="text_container">
              <p>
                Prosím, napíšte svoje telefónne číslo a náš špecialista vám <span class="text-yellow">zavolá</span> späť, aby vám poradil.
              </p>
            </div>
            <div className="call_back_form">
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
              Zanechať recenziu
            </p>
          </div>
          <div className="body_content">
            <Form
              onFinish={addNewComment}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Zadajte svoje meno!' }]}
              >
                <Input placeholder="Tvoje meno" />
              </Form.Item>
              <Form.Item
                name="text"
                rules={[{ required: true, message: 'Prosím, vložte svoj text!' }]}
              >
                <Input.TextArea placeholder="Tvoj text"  rows="5" />
              </Form.Item>
              <Form.Item >
                <Button type="primary" htmlType="submit">
                  Zanechať recenziu
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