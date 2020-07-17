import React from 'react';
import ReactDom from 'react-dom';

import { App } from './App';
import { PageNav } from './PageNav';
import render from './Welcome';

ReactDom.render(<App />, document.getElementById('app'));
ReactDom.render(<PageNav />, document.getElementById('nav'));
document.body.onload = render;
