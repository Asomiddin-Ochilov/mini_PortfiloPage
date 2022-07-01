import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/App.scss';
import 'antd/es/modal/style';
import 'antd/es/slider/style';
import 'antd/dist/antd.less'
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

