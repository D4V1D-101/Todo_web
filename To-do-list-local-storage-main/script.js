

/* készít egy const válzotót(itemsArray) belerakja az itemeket ha nincs akkor viszont létrehoz és utánna rakja vele a listába */
const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];




/* az enter id gombra kattintva a query selectro az item id-t lekéri és meghívja a creat item függvényt aminek az item const lesz a paramétere */
document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item")
  createItem(item)
})





/* ezzel a fügvénnyel jelenítjük meg külön divekbe a list itemeket
készítünk egy items üres válzotót
egy for ciklus segítségével végigmegyünk a listán és egy class item nevű divbe
létrehozza a 


*/
function displayItems(){
  let items = ""
  for(let i = 0; i < itemsArray.length; i++){
    items += `<div class="item">
                <div class="input-controller">
                  <textarea disabled>${itemsArray[i]}</textarea>
                  <div class="edit-controller">
                    <i class="fa-solid fa-check deleteBtn"></i>
                    
                  </div>
                </div>
            
                </div>
              </div>`
  }
  document.querySelector(".to-do-list").innerHTML = items
  activateDeleteListeners()

}



/* törlés 
létrehoz egy deleteBtn ami lekéri a delete gombot(.deleteBtn)
aztán egy forEach ciklus-al végig iterál a deleteBtn változón és a click hatására meghívja a deleteItem-et aminek az i lesz a paramétere
és törli az egész divet 
*/

function activateDeleteListeners(){
  let deleteBtn = document.querySelectorAll(".deleteBtn")
  deleteBtn.forEach((dB, i) => {
    dB.addEventListener("click", () => { deleteItem(i) })
  })
}

/* 
az előbbi fügvényekbe létrehozott item const lesz a paraméter amit nek a valueját pusholja a listába
majd elhelyezi a localstorageba
a location.reload() pedig gyakorlatilag egy oldal frissítés
*/

function createItem(item){
  itemsArray.push(item.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

/* 
a deleteItem nek a paramétere a korábban létrehozott i
a splice-al az egy index alapú törlés és az i-edik indexen kitöröl 1 elemet de mivel 1 divben 1 item van ezért törli azt az egy itemet
a local storage a  localStorage.setItem('items', JSON.stringify(itemsArray)) által frissül hiszen már a lista a törölt elemekkel 'frissül'
a location.reload() pedig gyakorlatilag egy oldal frissítés
*/
function deleteItem(i){
  itemsArray.splice(i,1)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

window.onload = displayItems() ;

