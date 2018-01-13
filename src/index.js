import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Members from './components/Members';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Members
    url='http://localhost:3001/api/members'
    pollInterval={2000} />, 
    document.getElementById('root'));
registerServiceWorker();
