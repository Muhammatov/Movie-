let elPokeList = document.querySelector(".js-poke-list")
for (let poke of pokemons) {
     let pokeImg = document.createElement('img')
     let pokeItem = document.createElement('li')
     let pokeTitle = document.createElement("h3")
     let pokeNum = document.createElement("span")


     pokeImg.src = poke.img
     pokeTitle.textContent = poke.name
     pokeNum.textContent = poke.num
// sldsflsfd

     pokeItem.appendChild(pokeImg)
     pokeItem.appendChild(pokeTitle)
     pokeItem.appendChild(pokeNum)
     
     elPokeList.appendChild(pokeItem)


}