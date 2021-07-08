document.addEventListener('DOMContentLoaded', () => {
fetchPups()
})

//Fetches
function fetchPups() {
  fetch(URL)
  .then(res => res.json())
  .then(data => data.forEach(addPupsToBar))
}





//Consts
let URL = 'http://localhost:3000/pups'


function addPupsToBar(pup) {
  let dogBar = document.querySelector('#dog-bar')
  let span = document.createElement('span')
  span.textContent = pup['name']

    //Show Pup Detail Event Listener
    span.addEventListener('click', () => {
        infoDiv = document.querySelector("#dog-info");
        infoDiv.innerHTML = `
          <img src=${pup['image']}>
          <h2>${pup['name']}</h2>
          <button id = "goodPupButton">${(pup['isGoodDog']) ? "Good Dog!" : "Bad Dog!"}</button>
        `
    //Good Pup Button Event Listner
    let button = document.querySelector("#goodPupButton")
    button.addEventListener('click', () => {
      //How to make the below event handler change back and forth?
      button.textContent = (pup['isGoodDog']) ? "Good Dog!" : "Good Dog!";
    });
   

    });
    
    dogBar.append(span)

  
}

