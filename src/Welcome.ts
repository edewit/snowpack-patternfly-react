import dot from 'dot';
import { KeycloakInstance } from 'keycloak-js';

import content from './content.json';

import i18next from 'i18next';
import { initOptions } from './i18n';

const template = `
<section class="pf-c-page__main-section">
  <div class="pf-l-gallery pf-m-gutter">
    {{~it :card}}
    <div class="pf-l-gallery__item pf-c-card" id="landing-{{=card.id}}">
      <div>
        <div class="pf-c-card__header pf-c-content">
            <h2>
              {{? card.icon}}
                <i class="pf-icon {{=card.icon}}"></i>&nbsp;
              {{?? card.iconSvg}}
                <img src="{{=card.iconSvg}}" alt="icon"/>&nbsp;
              {{?}}
              {{=t(card.label)}}
            </h2>
        </div>
        <div class="pf-c-card__body">
          {{? card.descriptionLabel}}
            <p>{{=t(card.descriptionLabel)}}</p>
          {{?}}
        </div>
        <div class="pf-c-card__footer">
          {{? card.content}}
            {{~card.content :sub}}
              <div id="landing-{{=sub.id}}">
                <a onclick="toggle(); window.location.hash='{{=sub.path}}'">{{=t(sub.label)}}</a>
              </div>
            {{~}}
          {{??}}
            <a id="landing-{{=card.id}}" onclick="toggle(); window.location.hash = '{{=card.path}}'">{{=t(card.label)}}</a>
          {{?}}
        </div>
      </div>
    </div>
    {{~}}
  </div>
</section>
`;

const welcomeBlock = document.getElementById('welcome')!;
const appBlock = document.getElementById('app')!;
const userNameBlock = document.getElementById('username')!;

type Token = {
  given_name: string;
  family_name: string;
  preferred_username: string;
};

const loggedInUserName = (t: Function, tokenParsed: Token) => {
  let userName = t('unknownUser');
  if (tokenParsed) {
    const givenName = tokenParsed.given_name;
    const familyName = tokenParsed.family_name;
    const preferredUsername = tokenParsed.preferred_username;
    if (givenName && familyName) {
      userName = t('fullName', { givenName, familyName });
    } else {
      userName = givenName || familyName || preferredUsername || userName;
    }
  }
  return userName;
};

export function setLoggedInName(keycloak: KeycloakInstance) {
  i18next.init(initOptions, (_, t) => {
    (window as any).t = t;
    userNameBlock.innerHTML = loggedInUserName(
      t,
      keycloak.tokenParsed as Token
    );
  });
}

export default function () {
  i18next.init(initOptions, (_, t) => {
    (window as any).t = t;
    const rendered = dot.compile(template)(content);
    welcomeBlock.innerHTML = rendered;

    const removeHidden = (content: any) => {
      content.forEach((c: any) => {
        if (c.hidden && eval(c.hidden)) {
          document.getElementById('landing-' + c.id)!.remove();
        }
        if (c.content) {
          removeHidden(c.content);
        }
      });
    };
    removeHidden(content);
  });
}

(window as any).toggle = () => {
  welcomeBlock.style.display = 'none';
  appBlock.style.display = 'block';
};
