import React from 'react';
import { render } from 'react-dom';

import Popover from './Popover';
import './content.styles.css';

var container = document.createElement('div');
container.id = 'ui-container';
var body = document.getElementsByTagName('body')[0];
body.appendChild(container);
render(<Popover title={'settings'} />, container);

if (module.hot) module.hot.accept();
