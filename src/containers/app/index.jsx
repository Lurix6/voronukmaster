import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import classNames from 'classnames';
import AppRouter from './AppRouter'
import { withRouter } from "react-router";
import './app.scss';

const App = (props) => {

  const [visible, setVisisble] = useState(window.innerWidth < 900);

  useEffect(() => {
    window.addEventListener('resize', resizeHendle);

    return () => {
      window.removeEventListener('resize', resizeHendle);
    };
}, []);

const resizeHendle = (e) => {
  setVisisble(isPhoneView())
}

const isPhoneView = () => {
  const scrollBox = document.querySelector('.scrollBox');
  return scrollBox.offsetWidth < 900
} 

  return (
    <div className="appContainer"> 
      <div className={ classNames('container') }>
        <Header 
          history={ props.history }
          location= { props.location }
          phone={visible} 
        />
        <div style={{height: '100%'}} >
          <AppRouter {...props} />
        </div>
      </div>
    </div>
  )
}

export default withRouter(App);