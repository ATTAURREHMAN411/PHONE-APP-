

let cardarr = JSON.parse(localStorage.getItem("carts"))




let div = document.querySelector(".carts-container")
function renderItems (){
    let total = 0;
    if(cardarr != null && cardarr.length > 0){
        for(let i = 0; i < cardarr.length; i++){
            total = cardarr[i].price * cardarr[i].quantity
            div.innerHTML += ` <div class="carts">
            <img src="${cardarr[i].image}" alt="">
            <div class="describtion">
                <h4>${cardarr[i].description}</h4>
                <h3>Name : ${cardarr[i].name}</h3>
                <h3>Price : ${cardarr[i].price}</h3>
                <h3>Category : ${cardarr[i].category}</h3>
                <h3>Quantity<button onclick="addQuantity(${i})">+</button><span>${cardarr[i].quantity}</span><button onclick="lessQuantity(${i})">-</button></h3>
                  <h3>Total Amount : ${total}</h3>
                <div class="button">
                    <button class="order" onclick="order()">Order</button>           
                    <button class="delet" onclick="delet(${i})">Delete</button>
                  </div>         
            </div>
        </div>`
        console.log(cardarr[i])
        }
    }else{
        console.log('cart item empty ha maalik')
        div.innerHTML = `
        <h3 class="text-center">No Item Found...</h3>
        `
    }
}
renderItems()

function addQuantity(i){
div.innerHTML = '';
    cardarr[i].quantity += 1
    renderItems()
}

function lessQuantity(i){
    div.innerHTML = '';
   
    if( cardarr[i].quantity == 1){
        cardarr[i].quantity = 1
    }else{
        cardarr[i].quantity -= 1 
    }

    renderItems()
}


function addQuantity(i){
    div.innerHTML = '';
        cardarr[i].quantity += 1
        renderItems()
    }
    
    function lessQuantity(i){
        div.innerHTML = '';
       
        if( cardarr[i].quantity == 1){
            cardarr[i].quantity = 1
        }else{
            cardarr[i].quantity -= 1 
        }
    
        renderItems()
    }

    function order(){
        swal("Order Compelete !", "You order will reach you!", "success");
    }

    function delet(i){
        div.innerHTML = ''
        cardarr.splice(i , 1);
        swal("Order Delete !", "You order has been deleted!", "error");

        renderItems()
    }




































































































































