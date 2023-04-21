const slides = [
	{
	image: "slide1.jpg",
	tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
	image: "slide2.jpg",
	tagLine:
		"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
	image: "slide3.jpg",
	tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
	image: "slide4.png",
	tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

let nbSlides = slides.length;
let compteur = 0;


let dot = document.querySelector(".dots");
let bannerImg = document.querySelector(".banner-img");
let bannerTxt = document.querySelector(".banner-txt");
const arrowL = document.querySelector(".arrow_left");
const arrowR = document.querySelector(".arrow_right");


for ( let i=0 ; i < nbSlides; i++) {
    dot.innerHTML += `<span class="dot"></span>`;
};


const dotList = document.querySelectorAll(".dot");

const dotSurligne= () => {
  for (let i = 0; i <= nbSlides; i++) {
	if (i === compteur) {
	  dotList[i].classList.add("dot_selected");
	} else {
	  dotList[i].classList.remove("dot_selected");
	}
  }
};




arrowR.addEventListener("click", () => {
    if (compteur >= nbSlides-1) {
		compteur = 0;
    } else {
		compteur++;
	  //Bullet point actif devient coloré nbDots.classList.add("dot_selected")
	//les autres bullets points devient non coloré nbDots.classList.remove("dot_selected")s
    }
	bannerImg.src=`./assets/images/slideshow/${slides[compteur].image}`;
	bannerTxt.innerHTML=`${slides[compteur].tagLine}`;
	dotSurligne();
	console.log("compteur",compteur)
  });

  arrowL.addEventListener("click", () => {
    if (compteur >= nbSlides-1) {
		compteur = 0;
    } else {
		compteur--;
	  //Bullet point actif devient coloré nbDots.classList.add("dot_selected")
	//les autres bullets points devient non coloré nbDots.classList.remove("dot_selected")s
    }
	bannerImg.src=`./assets/images/slideshow/${slides[compteur].image}`;
	bannerTxt.innerHTML=`${slides[compteur].tagLine}`;
	dotSurligne();
	console.log("compteur",compteur)
  });



  