import React from 'react';
import ReactDom from 'react-dom';

import { App } from './App';
import { PageNav } from './PageNav';
import render from './Welcome';
import init from './auth/keycloak';
import { PageHeader } from './PageHeader';
import { KeycloakContext } from './auth/KeycloakContext';
import { KeycloakService } from './auth/keycloak.service';

init().then(keycloak => {
  ReactDom.render(
    <KeycloakContext.Provider value={new KeycloakService(keycloak)}>
      <App />
    </KeycloakContext.Provider>,
    document.getElementById('app')
  );
});

ReactDom.render(<PageNav />, document.getElementById('nav'));
ReactDom.render(<PageHeader />, document.getElementById('header-tools'));
document.body.onload = render;
