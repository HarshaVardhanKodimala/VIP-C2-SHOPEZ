
function Orders() {

const orders =
JSON.parse(
localStorage.getItem(
"orders"
)
||
"[]"
);

return (

<div className="container mt-5">

<h1
className="
text-center
mb-5
"
>

📦 My Orders

</h1>

{

orders.length===0

?

(

<h3
className="
text-center
"
>

No Orders Yet

</h3>

)

:

orders.map((item,index)=>(

<div

key={index}

className="
card
shadow-sm
mb-4
p-4
"

style={{

borderRadius:"20px"

}}

>

<h3>

{

item.product?.name

||

item.productId?.name

||

"Product"

}

</h3>

<h4
className="
text-primary
"
>

₹

{

item.product?.price

||

item.productId?.price

||

0

}

</h4>

<p>

Quantity:
{
item.quantity
||

1
}

</p>

<p
className="
text-success
fw-bold
"
>

✔ Ordered

</p>

</div>

))

}

</div>

);

}

export default Orders;

