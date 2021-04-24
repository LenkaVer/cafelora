import './style.css';

console.log('funguju!');

const navigaceElm = document.querySelector('#nav-btn');
navigaceElm.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const navigaceOdkazy = document.querySelectorAll('a');
navigaceOdkazy.forEach((polozkaNavigace) => {
  //console.log(polozkaNavigace);
  polozkaNavigace.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('nav-closed');
  });
});
