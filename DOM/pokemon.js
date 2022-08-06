//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector("#container");
// const newImg = document.createElement("img");
// newImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
// container.appendChild(newImg);

for(let i=1; i<=151; i++){
    const aDiv = document.createElement("div");
    aDiv.classList.add("pokemon")
    const newImg = document.createElement("img");
    const numberSpan = document.createElement("SPAN");
    numberSpan.innerText = `#${i}`;
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    aDiv.appendChild(newImg);
    aDiv.appendChild(numberSpan)
    container.appendChild(aDiv);
    

}