import './style.css';
import { Layer } from './Layer/index';
import { Drink } from './Drink/index';

console.log('funguju!');

const navigaceElm = document.querySelector('#nav-btn');
navigaceElm.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const navigaceOdkazy = document.querySelectorAll('#nav-list a');
navigaceOdkazy.forEach((polozkaNavigace) => {
  //console.log(polozkaNavigace);
  polozkaNavigace.addEventListener('click', () => {
    document.querySelector('nav').classList.add('nav-closed');
  });
});

/*objednání
Zařiďte, aby fungovalo objednávání jednotlivých nápojů. Zatím na stránce vidíme pouze jeden, poději jich však bude mnohem více.

Na tlačíko .order-btn pověste posluchač, který při kliknutí přidá na prvek .drink__cup třídu .drink__cup--selected. Zároveň změní nápis na tlačítku na Zrušit.
Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a nápis na tlačítku se vrátil zpět na Objednat. Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou ordered, která bude obsahovat true nebo false podle toho, zde je nápoj objednaný či nikoliv.
Ve chvíli, kdy máte objednávání funkční commitněte váš kód se smysluplnou zprávnou a pushněte jej. */

/* moje verze přes ordered 
const tlacitkoObjednat = document.querySelector('.order-btn');
const napoj = document.querySelector('.drink__cup');
tlacitkoObjednat.addEventListener('click', () => {
  if (napoj.classList.contains('drink__cup--selected')) {
    napoj.classList.remove('drink__cup--selected');
    tlacitkoObjednat.textContent = 'Objednat';
  } else {
    napoj.classList.add('drink__cup--selected');
    tlacitkoObjednat.textContent = 'Zrušit';
  }
});

//verze s ordered
const tlacitkoObjednat = document.querySelector('.order-btn');
const napoj = document.querySelector('.drink__cup');
let isOrdered = true;

tlacitkoObjednat.addEventListener('click', () => {
  if (isOrdered) {
    tlacitkoObjednat.textContent = 'Zrušit';
    napoj.classList.add('drink__cup--selected');
    isOrdered = false;
  } else {
    tlacitkoObjednat.textContent = 'Objednat';
    napoj.classList.remove('drink__cup--selected');
    isOrdered = true;
  }
});
*/
/* ingredience jako komponenty
Každý nápoj bude obsahovat seznam ingrediencí. Na stránce vidíme příklad pro cappuccino. Budeme chtít, aby ingredience byla komponenta.

Vytvořte komponentu Layer, která očekává props v následujícím tvaru.
{
  color: '#feeeca',
  label: 'mléčná pěna',
}
Komponenta nechť vrací řetězec obsahující výsledné HTML.
Použijte vaši komponentu a pomocí vlastnosti innerHTML zapojte do stránky tři ingredience pro cappuccino. Stránka by měla pro uživatele vypadat stejně jako na začátku.
Ve vašem projektu vytvořte pro vaši komponentu separátní složku s názvem Layer. Tato složka bude v souboru index.js obsahovat JavaScript kód vaší komponenty. Kompnentu správně exportujte a správně ji importujte v hlavním index.js celého projektu. Vyzkoušejte, že váš projekt funguje.
Do složky Layer vložte také soubor style.css a přesuňte do něj CSS styly, které se přímo týkají této komponenty. Nezapomeňte váš CSS soubor správně importovat aby jej Webpack zahrnul do výsledného sestavení.
Jakmile váš projekt funguje, commitněte váš kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře. 
*/

/* přendáno do samostatné komponenty
const Layer = (props) => {
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
*/
//const drinkInfoElm = document.querySelector('.drink__info');
// drinkInfoElm.appendChild(Layer({ color: '#feeeca', label: 'mléčná pěna' }));
// drinkInfoElm.appendChild(Layer({ color: '#fed7b0', label: 'teplé mléko' }));
// drinkInfoElm.appendChild(Layer({ color: '#613916', label: 'espresso' }));

/* seznam ingrediencí 
V tomto cvičení budeme chtít zařídit, abychom seznam ingrediencí dokázali zobrazit podle dat uložených v poli.

Uvnitř hlavního index.js si vytvořte následujicí globální proměnnou.

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];
Použijte cyklus for nebo forEach, projděte seznam ingrediencí položku po položce a pomocí komponenty Layer je zobrazte každou ingredienci na stránce.

Jakmile je váš kód funkční, udělejte commit s profesionálně napsanou zprávou a pushněte váš kód do vzdáleného repozitáře.
*/
/*
const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

layers.forEach((polozkaLayeru) => {
  //console.log(polozkaLayeru);
  drinkInfoElm.appendChild(Layer(polozkaLayeru));
});
*/

/*drinkList.appendChild(
  Drink({
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  }),
);
*/
const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

const drinkList = document.querySelector('.drinks-list');
// drinks.forEach((drink) => {
//   //console.log(drink)
//   drinkList.appendChild(Drink(drink));
// });
fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((json) => {
    json.forEach((drink) => {
      drinkList.appendChild(Drink(drink));
    });
  });
