
function Checkout({ setPage }) {

const address=

JSON.parse(

localStorage.getItem(
"deliveryAddress"
)

||

"{}"

);

return(

<div className="container mt-5">

<div
className="
card
shadow
p-5
"
>

<h2
className="
text-center
mb-4
"
>

🧾 Order Summary

</h2>

<p>

Name:
{
address.name
}

</p>

<p>

Phone:
{
address.phone
}

</p>

<p>

Address:
{
address.address
}

</p>

<p>

City:
{
address.city
}

</p>

<p>

Pincode:
{
address.pincode
}

</p>

<button

className="
btn
btn-success
w-100
"

onClick={()=>

setPage(
"payment"
)

}

>

Continue To Payment

</button>

</div>

</div>

);

}

export default Checkout;

