var events = JSON.parse(data);
var len = events.length;
console.log(events);

let navBar = document.getElementById('navigation-bar');

let eventBox = document.getElementById('box');

for(i=0;i<len;i+=3){
    let cardDeck = document.createElement('div');
    cardDeck.className = 'card-deck';
    for(let j=i;j<i+3;j++){
        console.log(j);
        let card = document.createElement('div');
        card.className = 'card';
        let cardImg = document.createElement('img');
        cardImg.className = 'card-img-top';
        cardImg.src = '...'
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        let cardTitle = document.createElement('h2');
        cardTitle.className = 'card-title';
        cardTitle.innerText = 'Hello World'
        let cardText = document.createElement('p');
        cardText.className = 'card-text';
        let cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer';
        let footerText = document.createElement('small');
        footerText.className = 'text-muted';
        cardFooter.appendChild(footerText);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardImg);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
        cardDeck.appendChild(card);
    }
    eventBox.appendChild(cardDeck);
}
