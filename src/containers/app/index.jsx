import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import classNames from 'classnames';
import AppRouter from './AppRouter'
import './app.scss';

const SignIn = (props) => {

  const [visible, setVisisble] = useState(false);
  const changeVisible = () => setVisisble(!visible);

  useEffect(() => {
    window.addEventListener('resize', resizeHendle);

    return () => {
      window.removeEventListener('resize', resizeHendle);
    };
}, []);

const resizeHendle = (e) => {
  if (e.target.innerWidth > 900) {
    setVisisble(false)
  } else {
    setVisisble(true)
  }
}

  return (
    <div className="appContainer"> 
      <div className={ classNames('container') }>
        <Header phone={visible} />
        <div style={{height: '100%'}} >
          <AppRouter />
        </div>
      </div>
    </div>
  )
}

export default  SignIn;