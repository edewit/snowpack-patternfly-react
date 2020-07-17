import dot from 'dot';
import content from './content.json';

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
              {{=card.label}}
            </h2>
            {{? card.descriptionLabel}}
              <p>{{=card.descriptionLabel}}</p>
            {{?}}
        </div>
        <div class="pf-c-card__body pf-c-content">
          {{? card.content}}
            {{~card.content :sub}}
              <div id="landing-{{=sub.id}}">
                <a onclick="toggle(); window.location.hash='{{=sub.path}}'">{{=sub.label}}</a>
              </div>
            {{~}}
          {{??}}
            <a id="landing-{{=card.id}}" onclick="toggle(); window.location.hash = '{{=card.path}}'">{{=card.label}}</a>
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

export default function () {
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
}

(window as any).toggle = () => {
  welcomeBlock.style.display = 'none';
  appBlock.style.display = 'block';
};
