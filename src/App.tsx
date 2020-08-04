import React, { useContext } from 'react';

import { ClientList } from './clients/ClientList';
import { DataLoader } from './components/data-loader/DataLoader';
import { KeycloakContext } from './auth/KeycloakContext';

export const App = () => {
  const keycloak = useContext(KeycloakContext);

  const loader = async () => {
    return await fetch(
      'http://localhost:8180/auth/admin/realms/master/clients?first=0&max=20&search=true',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + (await keycloak?.getToken()),
        },
      }
    ).then((res) => res.json());
  };
  return (
    <DataLoader loader={loader}>
      {(clients) => <ClientList clients={clients} />}
    </DataLoader>
  );
};
