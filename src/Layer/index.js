import './style.css';

export const Layer = (props) => {
  const napojElm = document.createElement('div');
  napojElm.className = 'layer';
  napojElm.innerHTML = `
  <div
    class="layer__color"
    style="background-color: ${props.color}"
  ></div>
  <div class="layer__label">${props.label}</div>
</div>`;
  return napojElm;
};
