import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import emailjs from 'emailjs-com';
import MailCred from '../../helpers/emailCred/';
import './style.scss';

const Footer = (props) => {
  const [form] = Form.useForm();

  const validateMessages = {
    required: '${name} is required!',
    types: {
      email: 'Text is not validate email!',
    },

  };

  const onFinish = values => {
    console.log('gmail', MailCred.TEMPLATE_ID, values, MailCred.USER_ID)
    emailjs
    .send('gmail', MailCred.TEMPLATE_ID, values, MailCred.USER_ID)
    .then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )  };
  
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="sendMeContainer">
            <div className="send-me">
              <h2>NAPÍŠTE NÁM</h2>
              <Form form={form} validateMessages={validateMessages} onFinish={onFinish}>
                <Form.Item name="Meno" rules={[{ required: true }]}>
                  <Input placeholder="Meno" />
                </Form.Item>
                <Form.Item name="Email" rules={[{ required: true, type: 'email' }]}>
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name='text' >
                  <Input.TextArea autoSize={{minRows: 5}} placeholder="Text spravy" />
                </Form.Item>
                <Form.Item >
                  <Button htmlType="submit">
                  <div className="btn-wrapper">
                    ODOSLAŤ SPRÁVU
                  </div>
                  </Button>
              </Form.Item>
              </Form>
            </div>
          </div>
          <div className="adres">
            <div className="adres-container">
              <div className="adressItem">
                <h3>ADRESA</h3>
                <p>Riazanská 681/62, 83103 Bratislava-Nové Mesto</p>
                <p>(Len Bratislavský kraj!)</p>
              </div>
              <div className="adressItem">
                <h3>TELEFÓN</h3>
                <p> <a href="tel:+421 903 439 648">+421 903 439 648</a></p>
              </div>
              <div className="adressItem">
                <h3>E-MAIL</h3>
                <p><a href="mailo:dusanbalazdb@gmail.com">dusanbalazdb@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default  Footer;