import { useState } from "react";

function Payment({ setPage }) {

const [selected,setSelected]=
useState("");


const placeOrder=()=>{

if(!selected){

alert(
"Select Payment Method"
);

return;

}

const cartItems=

JSON.parse(

localStorage.getItem(
"cartItems"
)

||

"[]"

);

localStorage.setItem(

"orders",

JSON.stringify(
cartItems
)

);

localStorage.removeItem(
"cartItems"
);

alert(
"Order Placed"
)





setPage(
"orders"
);

};



return(

<div className="container mt-5">

<div

className="
card
shadow
p-5
mx-auto
"

style={{
maxWidth:"650px",
borderRadius:"25px"
}}

>

<h1
className="mb-4 text-center"
>

Choose Payment Method

</h1>

<button

className={

selected==="UPI"

?

"btn btn-primary w-100 mb-3"

:

"btn btn-outline-primary w-100 mb-3"

}

onClick={()=>

setSelected(
"UPI"
)

}

>

📱 UPI

</button>

<button

className={

selected==="Card"

?

"btn btn-success w-100 mb-3"

:

"btn btn-outline-success w-100 mb-3"

}

onClick={()=>

setSelected(
"Card"
)

}

>

💳 Card

</button>

<button

className={

selected==="COD"

?

"btn btn-dark w-100"

:

"btn btn-outline-dark w-100"

}

onClick={()=>

setSelected(
"COD"
)

}

>

💵 Cash On Delivery

</button>

{

selected&&(

<p
className="
mt-4
text-center
fw-bold
text-success
"
>

Selected:
{selected}

</p>

)

}

<button

className="
btn
btn-warning
w-100
mt-4
py-3
"

onClick={placeOrder}

>

Place Order

</button>

</div>

</div>

);

}

export default Payment;
