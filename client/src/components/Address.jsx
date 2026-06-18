
import { useState } from "react";

function Address({ setPage }) {

const [form,setForm]=
useState({

name:"",
phone:"",
address:"",
city:"",
pincode:""

});

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};

const continueCheckout=()=>{

if(

!form.name
||
!form.phone
||
!form.address
||
!form.city
||
!form.pincode

){

alert(
"Please fill all fields"
);

return;

}

localStorage.setItem(

"deliveryAddress",

JSON.stringify(form)

);

setPage(
"payment"
);

};

return(

<div className="container mt-5">

<div

className="
card
shadow
border-0
mx-auto
p-5
"

style={{

maxWidth:"700px",

borderRadius:"20px"

}}

>

<h2
className="
text-center
mb-4
fw-bold
"
>

🏠 Delivery Address

</h2>

<input

name="name"

placeholder="Full Name"

className="
form-control
mb-3
"

onChange={
handleChange
}

/>

<input

name="phone"

placeholder="Phone Number"

className="
form-control
mb-3
"

onChange={
handleChange
}

/>

<input

name="address"

placeholder="House / Street"

className="
form-control
mb-3
"

onChange={
handleChange
}

/>

<input

name="city"

placeholder="City"

className="
form-control
mb-3
"

onChange={
handleChange
}

/>

<input

name="pincode"

placeholder="Pincode"

className="
form-control
mb-4
"

onChange={
handleChange
}

/>

<button

className="
btn
btn-primary
w-100
py-3
"

onClick={
continueCheckout
}

>

Continue To Payment

</button>

</div>

</div>

);

}

export default Address;

