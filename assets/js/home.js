const apidiv = document.getElementById('apidiv')

function getproducts(){
    page = 1
    limit = 4
    axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products?page=${page}&limit=${limit}`)
    .then(res=>{
        products = res.data
        products.map(item=>{
        let box = document.createElement('div')
        box.className = 'box col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'
        box.innerHTML = `
        <img src="${item.image}" alt="">
<p>${item.name}</p>
<p>${item.price}</p>
<div class="btns">
<button onclick="addtobasket(${item.id})">Add to<i class="fa-brands fa-shopify"></i></button>
<button onclick="addtowishlist(${item.id})">Add to<i class="fa-regular fa-heart"></i></button>
</div>
        `
        apidiv.appendChild(box)
        })
        page++
    })
}
getproducts()

function addtobasket(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let productItem = cart.find((item)=>item.id==id)
    if(productItem){
        productItem.count = (productItem.count || 1) +1
    }
    else{
        let newItem = {...products.find((item)=>item.id==id), count:1}
        cart.push(newItem)
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}
function addtowishlist(id){
    let wishlist =  JSON.parse(localStorage.getItem('wishlist')) || []
    let productItem = wishlist.find ((item)=>item.id==id)
    if(productItem){
       alert('Bu mehsul favorilerde var')
    }
    else{
        wishlist.push(products.find((item)=>item.id == id))
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }
}