import './style.css';

console.log('funguju!');

/*zprovoznění navigace
Chceme zařídit, aby se na úzkých displejích po kliknutí na ikonku zobrazovala navigace. Zatím se to neděje a tím přichází ke slovu JavaScript.

V JavaScriptu vyberte ze stránky ikonku #nav-btn. Připojte k ní posluchač události click. Tento posluchač odebere nebo přidá třídu nav-closed na prvku nav. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
Připojte posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.
Jakmile je váš kód funkční, proveďte commmit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.*/

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
