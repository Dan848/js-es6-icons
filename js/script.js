/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.


BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

2- popolare le options della select della milestone 3 dinamicamente.
*/

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];

//Duplico l'array copiando solo le key Type e filtro con la funzione uniqueType i doppioni
const arrFullType = icons.map((icon) => icon.type).filter(uniqueType);
arrFullType.unshift("all");

function uniqueType (value, index, arr) {
    return arr.indexOf(value) === index;
}

function renderSelect() {

    function createOptions () {
        let options =``;
        for (let i = 0; i < arrFullType.length; i++){
        options +=`<option value="${arrFullType[i]}">${arrFullType[i].toUpperCase()}</option>`;
        }
        return options;
    }


    const header = document.querySelector(".bg-gradient");
    header.innerHTML = `<label for="iconType">Filtra per tipo</label>
    <select name="iconType" id="iconType" class=" text-white ms-2 bg-dark border-0 rounded-2 px-2">
        ${createOptions()}
    </select>`;
    return header;
}

function createCard (ico) {
    const card = `<div class="col mb-4 fs-1 text-center">
    <div class="card bg-black p-3">
        <i class="${ico.prefix}${ico.family} ${ico.prefix}${ico.name} ${ico.color}"></i>
        <div class="text-uppercase text-white fw-medium mt-2 fs-6">${ico.name}</div>
    </div>
</div>`;
return card;
}

function renderCard () {
    document.documentElement.style.setProperty("--animal-color", "orange");
    document.documentElement.style.setProperty("--vegetable-color", "green");
    document.documentElement.style.setProperty("--user-color", "blue");
    const row = document.querySelector(".row");
    let cards = ``;

    for (let i = 0; i < arrFullType.length; i++){

    if (select.value === "all"){
        icons.forEach((icon, index) => {
        cards += createCard(icons[index]);
        })
        row.innerHTML = cards;
        return;
    }    
    else if (select.value === arrFullType[i]){
        icons.forEach((icon, index) =>{
            if (icon.type === arrFullType[i]){
            cards += createCard(icons[index]);
            }
        })
        row.innerHTML = cards;
        return;
    }
    }
}

renderSelect();
const select = document.querySelector("select");
select.addEventListener("change", renderCard);
renderCard(select);