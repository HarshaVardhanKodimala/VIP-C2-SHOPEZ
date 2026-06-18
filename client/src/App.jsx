
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Address from "./components/Address";
import Success from "./components/Success";
import Profile from "./components/Profile";







function App() {

const [products,setProducts]=useState([]);
const [search,setSearch]=useState("");
const [selectedCategory,setSelectedCategory]=useState("All");

const [page,setPage]=useState(
localStorage.getItem("token")
?
"dashboard"
:
"home"
);


useEffect(()=>{

fetchProducts();

},[]);


const fetchProducts=async()=>{

try{

const {data}=await axios.get(
"http://localhost:8000/api/products"
);

setProducts(data);

}

catch(err){

console.log(err);

}

};



const addToCart=async(productId)=>{

if(
!localStorage.getItem(
"token"
)
){

setPage(
"login"
);

return;

}

try{

await axios.post(
"http://localhost:8000/api/cart",
{
userId:
"6a2a4c25b9718f1617e10e12",

productId,

quantity:1
}
);

alert(
"Added To Cart"
);

}

catch{

alert(
"Failed"
);

}

};




const productImages={

"iPhone 15":
"https://images.unsplash.com/photo-1592750475338-74b7b21085ab",

"Samsung S25":
"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",

"Realme 14 Pro":
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",

"Nike Shoes":
"https://images.unsplash.com/photo-1542291026-7eec264c27ff",

"Adidas Shoes":
"https://images.unsplash.com/photo-1543508282-6319a3e2621f",

"Sony Headphones":
"https://images.unsplash.com/photo-1505740420928-5e560c06d30e",

"Gaming Mouse":
"https://images.unsplash.com/photo-1527814050087-3793815479db",

"Dell Laptop":
"https://images.pexels.com/photos/18105/pexels-photo.jpg",

"MacBook Air":
"https://images.pexels.com/photos/18105/pexels-photo.jpg",

"Boat Earbuds":
"https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"

};


const filteredProducts=
products.filter((p)=>{

const searchMatch=
p.name
.toLowerCase()
.includes(
search.toLowerCase()
);

const categoryMatch=
selectedCategory==="All"
||
p.category===selectedCategory;

return(
searchMatch
&&
categoryMatch
);

});


return(

<div>
  


<Navbar
search={search}
setSearch={setSearch}
setPage={setPage}
/>



<div className="container">


{(
page==="home"
||
page==="dashboard"
)&&(

<>

<Categories
setSelectedCategory={
setSelectedCategory
}
/>


<div

className="
rounded-5
shadow-lg
text-center
py-5
mb-5
"

style={{

background:
"linear-gradient(135deg,#0d6efd,#5b8cff,#7b61ff)",

color:
"white"

}}

>

<div
className="
mb-4
"
>

✨ Trusted by 10,000+ shoppers

</div>

<h1
className="
display-2
fw-bold
"
>

Welcome To ShopEZ

</h1>

<p
className="
fs-3
"
>

Smart Shopping Starts Here

</p>


<div
className="
mt-4
d-flex
justify-content-center
gap-3
"
>

<button
className="
btn
btn-warning
px-4
"
>

🛒 Shop Now

</button>


<button
className="
btn
btn-outline-light
px-4
"
>

Explore Deals

</button>

</div>

</div>



<div
className="
bg-danger
text-white
p-3
rounded
mb-4
text-center
"
>

🔥 Mega Sale — Up To 70% OFF

</div>



<div className="row">

{

filteredProducts.length===0

?

(

<h2 className="text-center">

No Products Found

</h2>

)

:

(

filteredProducts.map(
(product)=>(

<div
key={product._id}
className="col-lg-3 col-md-4 mb-4"
>

<div
className="card shadow border-0 h-100"
style={{
borderRadius:"20px"
}}
>

<img

src={
productImages[
product.name
]
||
"https://via.placeholder.com/300x220"
}

className="card-img-top"

style={{
height:"240px",
objectFit:"cover"
}}

alt=""

/>


<div className="card-body">

<h5>

{
product.name
}

</h5>


<h4 className="text-primary">

₹
{
product.price
}

</h4>


<p>

{
product.category
}

</p>


<button

className="
btn
btn-warning
w-100
"

onClick={()=>

addToCart(
product._id
)

}

>

🛒 Add To Cart

</button>

</div>

</div>

</div>

)

)

)

}

</div>

</>

)}



{page==="login"&&(

<div
className="
row
justify-content-center
"
>

<div className="col-md-5">

<Login/>

</div>


<div className="col-md-5">

<Register/>

</div>

</div>

)}


{/* CART */}




{page==="cart"&&(

localStorage.getItem("token")

?

<Cart
setPage={setPage}
/>

:

<div
className="
d-flex
flex-column
justify-content-center
align-items-center
text-center
py-5
"
>

<img

src="
https://cdn-icons-png.flaticon.com/512/2038/2038854.png
"

alt="login"

style={{

width:"320px",

marginBottom:"20px"

}}

/>

<h2
className="
fw-bold
mb-3
"
>

Missing Cart items?

</h2>


<p
className="
text-muted
mb-4
"
>

Login to see the items you added previously

</p>


<button

className="
btn
btn-warning
px-5
py-3
fs-5
"

onClick={()=>{

setPage(
"login"
);

}}

>

Login

</button>

</div>

)}




{/* ADDRESS */}

{page==="address"&&(

<Address
setPage={setPage}
/>

)}




{/* PAYMENT */}

{page==="payment"&&(

<Payment
setPage={setPage}
/>

)}

{page==="success"&&(

<Success
setPage={setPage}
/>

)}



{page==="profile"&&(

<Profile
setPage={setPage}
/>

)}










{page==="orders"&&(

localStorage.getItem(
"token"
)

?

<Orders/>

:

<div className="text-center p-5">

Login Required

</div>

)}


</div>


<Footer/>

</div>

);

}

export default App;

