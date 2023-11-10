const emojis = [
  "😸", "😸", 
  "🐵", "🐵", 
  "🐶", "🐶", 
  "🐯", "🐯", 
  "🦊", "🦊", 
  "🐮", "🐮", 
  "🐷", "🐷", 
  "🐻", "🐻"
]

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2: -1);

let cardClickCount = 0;

for(let i = 0; i < shuffleEmojis.length; i++) {
  let box = document.createElement("div");
  box.setAttribute("id", `${i}`)
  box.onclick = handleClick;
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];

  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if(!openCards.includes(this)) {
    cardClickCount++
  } 

  if(openCards.length < 2) {
    this.classList.add("box-open");
    openCards.push(this);
  }

  if(openCards.length == 2) {
    setTimeout(checkMatch, 500)
  }
}

function checkMatch() {
  if(openCards[0].innerHTML === openCards[1].innerHTML) {
    for(let i = 0; i < openCards.length; i++) {
      openCards[i].classList.add("box-match")
    }
  } else {
    for(let i = 0; i < openCards.length; i++) {
      openCards[i].classList.remove("box-open")
    }
  }

  openCards = [];

  if(document.querySelectorAll(".box-match").length === emojis.length) {
    alert("Você venceu com " + cardClickCount + " pontos.")
  }
}