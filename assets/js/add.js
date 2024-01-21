const table = document.getElementById('table')

function getproducts(){
    table.innerHTML = ''
    axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
    .then(res=>{
        products = res.data
        products.map(item=>{
        let tr = document.createElement('tr')
       tr.innerHTML = `
       <td><img src="${item.image}" alt=""></td>
       <td><p>${item.name}</p></td>
       <td><p>${item.price}</p></td>
       <td><button onclick="removefromadd(${item.id})"><i class="fa-solid fa-trash"></i></button></td>
        `
        table.appendChild(tr)
        })
    })
}
getproducts()


const postform = document.getElementById('postform')
const nameinput = document.getElementById('nameinput')
const priceinput = document.getElementById('priceinput')

function postwithform(e){
    e.preventDefault()
    axios.post(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`,{
        name:nameinput.value,
        price:priceinput.value
    })
    .then(res=>{
        getproducts()
        postform.reset()
    })
}
postform.addEventListener('submit',postwithform)

function removefromadd(id){
    axios.delete(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products/${id}`)
    .then(res=>{
        getproducts()
    })
}

const filterdata = document.getElementById('filterdata')
function sortdatadefault(){
    table.innerHTML = ''
    let selectvalue = filterdata.value
    if(selectvalue === '1'){
        axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
        .then(res=>{
            products = res.data
            products.map(item=>{
            let tr = document.createElement('tr')
           tr.innerHTML = `
           <td><img src="${item.image}" alt=""></td>
           <td><p>${item.name}</p></td>
           <td><p>${item.price}</p></td>
           <td><button onclick="removefromadd(${item.id})"><i class="fa-solid fa-trash"></i></button></td>
            `
            table.appendChild(tr)
            })
        })
    }
}
filterdata.addEventListener('change',sortdatadefault)

function sortdataaz(){
    table.innerHTML = ''
    let selectvalue = filterdata.value
    if(selectvalue === '2'){
        axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
        .then(res=>{
            products = res.data
            let sortaz = products.sort((a,b)=>a.name.localeCompare(b.name))
            sortaz.map(item=>{
            let tr = document.createElement('tr')
           tr.innerHTML = `
           <td><img src="${item.image}" alt=""></td>
           <td><p>${item.name}</p></td>
           <td><p>${item.price}</p></td>
           <td><button onclick="removefromadd(${item.id})"><i class="fa-solid fa-trash"></i></button></td>
            `
            table.appendChild(tr)
            })
        })
    }
}
filterdata.addEventListener('change',sortdataaz)
function sortdataza(){
    table.innerHTML = ''
    let selectvalue = filterdata.value
    if(selectvalue === '3'){
        axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
        .then(res=>{
            products = res.data
            let sortza = products.sort((a,b)=>b.name.localeCompare(a.name))
            sortza.map(item=>{
            let tr = document.createElement('tr')
           tr.innerHTML = `
           <td><img src="${item.image}" alt=""></td>
           <td><p>${item.name}</p></td>
           <td><p>${item.price}</p></td>
           <td><button onclick="removefromadd(${item.id})"><i class="fa-solid fa-trash"></i></button></td>
            `
            table.appendChild(tr)
            })
        })
    }
}
filterdata.addEventListener('change',sortdataza)



const searchform = document.getElementById('searchform')
const searchinput = document.getElementById('searchinput')
function searchfunc(e){
    e.preventDefault()
    table.innerHTML = ''
    axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
    .then(res=>{
        products = res.data
        let searchdata = products.filter((item)=>item.name.toLowerCase().startsWith(searchinput.value.toLowerCase()))
      searchdata.map(item=>{
        let tr = document.createElement('tr')
       tr.innerHTML = `
       <td><img src="${item.image}" alt=""></td>
       <td><p>${item.name}</p></td>
       <td><p>${item.price}</p></td>
       <td><button onclick="removefromadd(${item.id})"><i class="fa-solid fa-trash"></i></button></td>
        `
        table.appendChild(tr)
        })
        searchinput.value = ''
    })
}
searchform.addEventListener('submit',searchfunc)