import React, { Fragment } from 'react';
import Button from '../button/';
import { history } from '../../redux/store'
import { Link } from 'react-router-dom';
import './style.scss';

export default function mobileNavigator() {

  return (
    <div className="navigation-container">
    <div className="navigation-container__main">
      <Button onClick={() => history.push('/login')} >Login</Button>
      <Button >Sign up</Button>
    </div>
      <ul>
        <Link to="/"><li>Домой</li></Link>
        <Link to="/prepareModel"><li>Готові моделі</li></Link>
        <Link to="/store"><li>Купити модуль</li></Link>
        <Link to="/sell"><li>Продати модуль</li></Link>
      </ul>
    </div>
  )

}