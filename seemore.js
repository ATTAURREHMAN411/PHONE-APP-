let cardarr = []
let resend = JSON.parse(localStorage.getItem("carditem"))

let div = document.querySelector(".seecontainer")

resend.map(item => {
    item.map((index, value) =>{
cardarr.push(index)
      div.innerHTML +=`
      <div class="seecard">
         <img src="${index.image}" alt="">
         <h4>${index.description}</h4>
         <h3>Name : ${index.name}</h3>
         <h3>Price ${index.price}</h3>
         <h3>${index.category}</h3>

         <button class="add"  onclick="addToCard(${value})">Add Cart</button>
      </div>`
    })
})

// console.log(cardarr)
let card = []

function addToCard(index){
// console.log("item addit", cardarr[index])
checkindex = card.indexOf(cardarr[index])
if(checkindex == -1){
    cardarr[index].quantity = 1
card.push(cardarr[index])
}else{
  card[checkindex].quantity += 1
}

swal("Thank You!", "You order has been added to the Cart!", "success");
}

function gotocart(){
  let sendcart = localStorage.setItem("carts", JSON.stringify(card))
  window.location = "cart.html"
}




































































































