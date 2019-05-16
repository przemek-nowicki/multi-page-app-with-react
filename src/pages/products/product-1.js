import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';

import './product-1.css';
import productPicture from './product-logo.png';

ReactDOM.render(<Menu />, document.getElementById('menu'));
document.getElementById('product-pic').setAttribute('src', productPicture);
