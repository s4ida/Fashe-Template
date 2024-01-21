const basketdiv = document.getElementById('basketdiv')

function getproducts(){
    basketdiv.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem('cart')) || []
   cart.map((item,index)=>{
        let box = document.createElement('div')
        box.className = 'box col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'
        box.innerHTML = `
        <img src="${item.image}" alt="">
<p>${item.name}</p>
<p>${item.price}</p>
<p>${item.count}</p>
<div class="btns">
<button onclick="removefrombasket(${index})">Remove from<i class="fa-brands fa-shopify"></i></button>
</div>
        `
    basketdiv.appendChild(box)
        })
    }
    getproducts()

    function removefrombasket(index){
        let cart = JSON.parse(localStorage.getItem('cart')) || []
cart.splice(index,1)
localStorage.setItem('cart',JSON.stringify(cart))
getproducts()
    }
