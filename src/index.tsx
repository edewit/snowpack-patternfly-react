import React from 'react';
import ReactDom from 'react-dom';

import { App } from './App';
import render from './Welcome';

ReactDom.render(<App />, document.getElementById('app'));
document.body.onload = render;