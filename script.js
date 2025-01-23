/*

Oppgave 1

1.Lag et array med dine favoritter innen et tema, musikk, tv, film, bøker etc, eventuelt et enkelt array av et emne, frukt, handlevarer, bilmerker etc
2. console.log de forskjellige elementene i arrayet
3. lag et nytt <p> element og legg til en av elementene fra array i <p>
4. legg til <p> til i HTML slik at det er synlig i browser


Oppgave 2

Se på array av objects som heter fontenehus
1. console.log navnet på det 4. huset i array
2. console.log adressen til Fontenehuset Oslo Øst 
3. legg til Fontenehuset Bærum i objektet

Fontenehuset Bærum
Industriveien 2, 1337 Sandvika
https://www.fontenehuset-baerum.no/ 

4. lag en a link i HTML med en href som inneholder nettsiden til Fontenehuset Oslo Sentrum

5. Oppdater objectet med ny key som inneholder verdier for antall medlemmer, bruk oppdiktet tall,

forslag til tall:
500, 200, 120, 230

6. legg til et nytt fontenehus

https://fontenehuset-mortensrud.no/,

legg til navn, adresse, nettside, avdelinger- dikte opp, antall medlemmer- dikte opp

console.log en avdeling




*/

let tvShows = document.querySelector('#tvShows');

const mytvShows = ['The wire', 'Sopranos', 'Game of thrones'];

const cities = ['Madrid', 'Paris', 'London'];

let firstTvShow = mytvShows[0];

let newString = document.createElement('p');

newString.textContent = firstTvShow;

tvShows.appendChild(newString);

let toString = cities.toString();

let lastCity = cities[cities.length - 1];

/*
let addBtn = document.querySelector('#addBtn');
let removeBtn = document.querySelector('#removeBtn');
let liste = document.querySelector('#liste');
*/

//innkjøp til pannekaker
const handleListe = ['melk', 'brød', 'egg', 'mel'];

//legger hele handlelisten inn som
handleListe.forEach((item) => {
  let listElement = document.createElement('p');
  listElement.textContent = item;
  liste.appendChild(listElement);
});

addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let input = document.querySelector('#input').value;
  handleListe.push(input);

  let newlistElement = document.createElement('p');
  newlistElement.textContent = input;
  liste.appendChild(newlistElement);

  //liste.textContent = handleListe;
});

removeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  handleListe.pop();
  liste.removeChild(liste.lastElementChild);
});

tvShows.addEventListener('mouseover', function (event) {
  tvShows.classList.add('color');
});

tvShows.addEventListener('mouseout', function () {
  tvShows.classList.remove('color');
});

//OBJECT//
let person = {
  name: 'Frank',
  city: 'New York',
  age: 54,
  isMarried: false,
};

console.log(person.city);
const fontenehus = [
  {
    navn: 'Fontenehuset Oslo Øst',
    adresse: 'Hagegata 25, 0653 OSLO',
    nettside: 'https://www.fontenehuset-osloost.no/',
    avdelinger: ['administrasjon', 'kjøkken', 'media', 'turgruppe'],
  },
  {
    navn: 'Fontenehuset Oslo Sentrum',
    adresse: 'Holbergs gate 5, 0166 Oslo',
    nettside: 'https://www.fontenehuset.no/',
    avdelinger: ['administrasjon', 'kjøkken', 'media', 'prosjektgruppe'],
  },
  {
    navn: 'Fontenehuset Trondheim',
    adresse: 'Dronningens gate 15, 7011 Trondheim',
    nettside: 'https://www.fontenehuset-trondheim.no/',
    avdelinger: ['administrasjon', 'kjøkken', 'media'],
  },
  {
    navn: 'Fontenehuset Asker',
    adresse: 'Knud Askers vei 26B',
    nettside: 'https://www.fontenehusetasker.no/',
    avdelinger: ['administrasjon', 'kjøkken', 'media'],
  },
  {
    navn: 'Fontenehuset Ålesund',
    adresse: 'Lihauggata 8B, 6003 Ålesund',
    nettside: 'https://www.fontenehuset-alesund.no/',
    avdelinger: ['administrasjon', 'kjøkken', 'media'],
  },
];

/*console.log(
  `dette er 2 forskjellige fontenehus ${fontenehus[3].navn}, her kommer enda et komma,  ${fontenehus[2].navn}`
);*/

console.log(fontenehus[0].avdelinger[2]);

let aTag = document.createElement('a');
aTag.textContent = 'Fontenehuset Trondheim';
aTag.target = '_blank';
aTag.href = fontenehus[2].nettside;
document.body.appendChild(aTag);
