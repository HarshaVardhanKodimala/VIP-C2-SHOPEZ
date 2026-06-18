
function Profile({ setPage }) {

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
border-0
p-5
mx-auto
"
style={{

maxWidth:"800px",

borderRadius:"25px"

}}
>

<h1
className="
text-center
mb-5
"
>

👤 My Profile

</h1>

<h4>

Name:
{
address.name
||

"User"
}

</h4>

<p>

Phone:
{
address.phone
||

"-"
}

</p>

<p>

City:
{
address.city
||

"-"
}

</p>

<hr/>

<button

className="
btn
btn-primary
w-100
mb-3
"

onClick={()=>

setPage(
"orders"
)

}

>

📦 My Orders

</button>

<button

className="
btn
btn-danger
w-100
"

onClick={()=>{

localStorage.removeItem(
"token"
);

setPage(
"home"
);

}}

>

Logout

</button>

</div>

</div>

);

}

export default Profile;
