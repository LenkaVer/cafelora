import './style.css';
import { Layer } from './../Layer/index';

/*nápoj jako komponenta
Abychom nakonec mohli zobrazit celou nabídku nápojů, budeme potřebovat, aby každý nápoj byl jedna komponenta.

Vytvořte komponentu Drink, která očekává props v následujícím tvaru.
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
};
Komponentu napište tak, aby vracela DOM element.
Jak už jsme zvyklí, vytvořte pro komponentu složku Drink s index.js a style.css. Do style.css přesuňte styly související s komponentou. Pozor, že tentokrát ke stylu komponenty patří také obrázek cup-selected.png. Abychom měli vše hezky pohromadě, vytvořte ve složce komponenty složku img, do které tento obrázek přesuňte.
Uvnitř vaší komponenty bude potřeba použít komponentu Layers. Dejte si pozor, abyse ji spráně importovali.
Název obrázku, který se má zobrazit, můžete vzít z vlastnosti id. Je tak pouze potřeba sestavit správnou cestu pro atribut src.
Zprovozněte tlačítko pro objednávání tak, aby veškerý kód byl součástí komponenty. V tomto případě se budeme muset zbavit globální proměnné ordered. Ke stejnému účelu však můžeme využít vlastnost ordered, která je obsažena v každém objektu nápoje. Tak zaručíme, že každý nápoj bude mít svoji vlastní informaci o tom, zde je objednaný či nikoliv.
Zobrazte na stránce nápoj dle dat uvedených výše. Použijte funkci appendChild, neboť naše komponenta vrací DOM element. Vyzkoušejte, že funguje objednávání.
Jakmile váš kód správně funguje, commitněte jej se zodpovědně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
*/

export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.className = 'drink';
  drinkElm.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
      <h3>${props.name}</h3>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>
  </div>`;

  const tlacitkoObjednat = drinkElm.querySelector('.order-btn');
  const napoj = drinkElm.querySelector('.drink__cup');

  let isOrdered = props.ordered;

  const orderHandle = () => {
    if (isOrdered) {
      tlacitkoObjednat.textContent = 'Zrušit';
      napoj.classList.add('drink__cup--selected');
      isOrdered = false;
    } else {
      tlacitkoObjednat.textContent = 'Objednat';
      napoj.classList.remove('drink__cup--selected');
      isOrdered = true;
    }
  };
  orderHandle();
  tlacitkoObjednat.addEventListener('click', () => {
    orderHandle();
  });
  const drinkInfoElm = drinkElm.querySelector('.drink__info');
  const layers = props.layers;
  layers.forEach((polozkaLayeru) => {
    drinkInfoElm.appendChild(Layer(polozkaLayeru));
  });
  return drinkElm;
};
