import React from 'react';
import ReactDOM from 'react-dom';
import DashApp from './dashApp';
import 'antd/dist/antd.css';
import './style.css';
import './helpers/styles/variables.scss';

ReactDOM.render(
  <DashApp />,
  document.getElementById('app')
);

module.hot.accept();
