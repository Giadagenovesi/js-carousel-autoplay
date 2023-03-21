// inserisco tutte le immagini in un array.
const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

console.log(imagesArray);

const sliderContainer = document.querySelector(".slider-items");
console.log(sliderContainer);

for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray[i];

    const sliderItem = `
        <div class="item">
            <img src="${currentImage}" alt="">
        </div>`;

    console.log(sliderItem);
sliderContainer.innerHTML += sliderItem;
}

// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.


let items = document.getElementsByClassName("item");
console.log(items);


let activeItemIndex = 0;
items[activeItemIndex].classList.add("active");

// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

//bottone next
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener ("click", function() {
    
    //rimuovo classe active dall'elemento precedente
    items[activeItemIndex].classList.remove("active");
    if (activeItemIndex < items.length - 1) {
        // incremeto active index
        activeItemIndex++;
       
    } else {
        activeItemIndex = 0;
    }

    //Aggiungo classe active all'elemento successivo
    items[activeItemIndex].classList.add("active");
});

// Al carousel ho aggiunto la funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva cambia e viene mostrata la successiva.

let autoPlay = setInterval(()=>{
    items[activeItemIndex].classList.remove("active");
    if (activeItemIndex < items.length - 1) {
        // incremeto active index
        activeItemIndex++;
       
    } else {
        activeItemIndex = 0;
    }

    //Aggiungo classe active all'elemento successivo
    items[activeItemIndex].classList.add("active");
},3000)

document.querySelector(".slider-items").addEventListener("mouseover", mouseOver);

document.querySelector(".slider-items").addEventListener("mouseout", mouseOut);


function mouseOver() {
    clearInterval(autoPlay);    
}

function mouseOut() {
    autoPlay;    
}


//bottone prev
const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener ("click", function() {
//rimuovo classe active dall'elemento precedente
    items[activeItemIndex].classList.remove("active");
    if (activeItemIndex === 0 ) {
        activeItemIndex = items.length -1;       
    } else {
         // diminuisco active index
         activeItemIndex--;
    }

    //Aggiungo classe active all'elemento successivo
    items[activeItemIndex].classList.add("active"); 
});


