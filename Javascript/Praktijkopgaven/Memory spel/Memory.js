// Script Memory spel
//https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-2-matching-cards
// let kaart = document.getElementByClassName("kaart");
// let kaarten = [kaart];
//     for(var i = 0; i< cards.length; i++){
//     	kaarten[i].addEventListener("click", KaartLatenZien);
//     }
//     var KaartLatenZien = function(){
//     	this.classList.toggle("open");
//     	this.classList.toggle("show");
//     	this.classList.toggle("disabled");
//    	}
//    	function schudden(Array){
//    	var huidigeIndex = Array.length, tijdelijkeWaarde, willekeurigeIndex;
//    	while(huidigeIndex !== 0){
//    		willekeurigeIndex = Math.floor(Math.random() * huidigeIndex);
//    		huidigeIndex -= -1;
//    		tijdelijkeWaarde = Array[huidigeIndex];
//    		Array[huidigeIndex] = Array[willekeurigeIndex;
//    		Array[willekeurigeIndex] = tijdelijkeWaarde;
//    	}
//    	return Array; 
// }
// const dek = document.querySelector(".dek");
// function startSpel(){
// 	var schuddenKaarten = schudden(kaarten);
// 	for(var i = 0; i < schuddenKaarten.length; i++){
// 		[].forEach.call(schuddenKaarten, function(item){
// 			dek.appendChild(item);
// 		});
// 	}
// }
// window.onload = startSpel();

const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
function flipCard(){
	if(lockBoard) return;
	if(this === firstCard) return;
	this.classList.toggle('flip');
	if(!hasFlippedCard){
		hasFlippedCard = true;
		firstCard = this;
		return;
	}
	secondCard = this;
	checkForMatch();
}
function checkForMatch(){
	if(firstCard.dataset.framework === secondCard.dataset.framework){
		disableCards();
		return;
	}
	unflipCards();
}

function disableCards(){
	firstCard.removeEventListener("click", flipCard);
	secondCard.removeEventListener("click", flipCard);
	resetBoard();
}

function unflipCards(){
	lockBoard = true;
	setTimeout(() =>{
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
		resetBoard();
	}, 1500);
}
function resetBoard(){
	[hasFlippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
}
(function shuffle(){
	cards.forEach(card =>{
		let randomPos = Math.floor(Math.random() * 12);
		card.style.order = randomPos;

	});
})();


cards.forEach(card => addEventListener("click"), flipCard());

