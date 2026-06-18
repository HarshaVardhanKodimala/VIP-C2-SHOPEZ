import { useEffect, useState } from "react";
import axios from "axios";


function Cart({ setPage }) {

const [cart,setCart]=
useState([]);

useEffect(()=>{

fetchCart();

},[]);

useEffect(()=>{

if(cart.length>0){

localStorage.setItem(
"cartItems",
JSON.stringify(cart)
);

}

},[cart]);



const fetchCart=
async()=>{

try{

const {data}=
await axios.get(
"http://localhost:8000/api/cart"
);


setCart(data);



}

catch(error){

console.log(error);

}

};


// PRODUCT IMAGES
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
"https://images.unsplash.com/photo-1496181133206-80ce9b88a853",

"MacBook Air":
"https://images.unsplash.com/photo-1517336714739-489689fd1ca8",

"Boat Earbuds":
"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37"

};


const removeItem=
async(id)=>{

await axios.delete(
`http://localhost:8000/api/cart/${id}`
);

fetchCart();

};


// TOTAL
const total=
cart.reduce(

(sum,item)=>

sum+

(
item.product?.price
||

0
)

*

item.quantity,

0

);


return(

<div className="container mt-4">

<h1
className=
"text-center mb-4"
>

🛒 Shopping Cart

</h1>


<div className="row">

<div className="col-md-8">

{

cart.map(
(item)=>(

<div

key={
item._id
}

className=
"card mb-3 shadow-sm"

>

<div className="row">

<div className="col-md-4">

<img

src={

productImages[
item.product?.name
]

||

"https://via.placeholder.com/300"

}

style={{

height:
"180px",

width:
"100%",

objectFit:
"cover"

}}

alt=""

/>

</div>


<div
className=
"col-md-8 p-4"
>

<h3>

{
item.product?.name
}

</h3>

<h4
className=
"text-primary"
>

₹
{
item.product?.price
}

</h4>

<p>

Quantity:
{
item.quantity
}

</p>


<button

className=
"btn btn-danger"

onClick={()=>

removeItem(
item._id
)

}

>

Remove

</button>

</div>

</div>

</div>

)

)

}

</div>


<div className="col-md-4">

<div
className=
"card p-4 shadow-sm"
>

<h2>

Order Summary

</h2>

<hr/>

<h3>

Total:
₹
{
total
}

</h3>

<button

className="
btn
btn-warning
w-100
"

onClick={()=>

setPage(
"address"
)

}

>

Proceed To Checkout

</button>


</div>

</div>

</div>

</div>

);

}

export default Cart; 