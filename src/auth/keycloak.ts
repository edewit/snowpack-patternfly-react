import Keycloak, { KeycloakInstance } from 'keycloak-js';
import { setLoggedInName } from '../Welcome';
const keycloak: KeycloakInstance = Keycloak();

export default async function(): Promise<KeycloakInstance> {
  await keycloak
  .init({ onLoad: 'check-sso', pkceMethod: 'S256' })
  .then((authenticated) => {
    if (authenticated) {
      setLoggedInName(keycloak);
    } else {
      keycloak.login();
    }
  })
  .catch(() => {
    alert('failed to initialize keycloak');
  });
  return keycloak;
}
