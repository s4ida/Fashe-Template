const wishlistdiv = document.getElementById('wishlistdiv')

function getproducts(){
   wishlistdiv.innerHTML = ''
    let wishlist= JSON.parse(localStorage.getItem('wishlist')) || []
   wishlist.map((item,index)=>{
        let box = document.createElement('div')
        box.className = 'box col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'
        box.innerHTML = `
        <img src="${item.image}" alt="">
<p>${item.name}</p>
<p>${item.price}</p>
<div class="btns">
<button onclick="removefrombasket(${index})">Remove from<i class="fa-regular fa-heart"></i></button>
</div>
        `
    wishlistdiv.appendChild(box)
        })
    }
    getproducts()

    function removefrombasket(index){
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
wishlist.splice(index,1)
localStorage.setItem('wishlist',JSON.stringify(wishlist))
getproducts()
    }
