import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment';
import "moment/locale/zh-cn"

moment.locale('en');

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <App/>
    </ConfigProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
