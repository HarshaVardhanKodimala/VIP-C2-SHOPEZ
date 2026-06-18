
function Success({ setPage }){

return(

<div
className="
container
text-center
py-5
"
>

<div
className="
card
shadow
border-0
p-5
mx-auto
"
style={{

maxWidth:"700px",

borderRadius:"25px"

}}
>

<h1
style={{
fontSize:"80px"
}}
>

🎉

</h1>

<h2
className="
fw-bold
mb-3
"
>

Order Placed Successfully

</h2>

<p
className="
text-muted
mb-4
"
>

Thank you for shopping with ShopEZ

</p>

<div
className="
d-flex
justify-content-center
gap-3
"
>

<button

className="
btn
btn-primary
px-5
"

onClick={()=>

setPage(
"orders"
)

}

>

View Orders

</button>

<button

className="
btn
btn-outline-dark
px-5
"

onClick={()=>

setPage(
"dashboard"
)

}

>

Continue Shopping

</button>

</div>

</div>

</div>

);

}

export default Success;

