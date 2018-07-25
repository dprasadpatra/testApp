import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import Store from "./store";

ReactDOM.render(<App store={Store} />, document.getElementById('root'));
registerServiceWorker();
