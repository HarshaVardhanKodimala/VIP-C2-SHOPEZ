function Navbar({
search,
setSearch,
setPage
}) {

return (

<nav
className="navbar navbar-dark bg-dark px-4"
>

<h2
style={{
color:"#ff9900"
}}
>

ShopEZ

</h2>

<input

className=
"form-control"

style={{
width:"500px"
}}

placeholder=
"Search products..."

value={
search
}

onChange={(e)=>
setSearch(
e.target.value
)
}

/>

<div>

<button

className="btn btn-outline-light me-3"

onClick={()=>

setPage(
"home"
)

}

>

🏠 Home

</button>



<button

className=
"btn btn-outline-light me-3"

onClick={()=>
setPage(
"login"
)
}

>

Login

</button>

<button

className=
"btn btn-outline-light me-3"

onClick={()=>
setPage(
"cart"
)
}

>

🛒 Cart

</button>

<button

className=
"btn btn-warning"

onClick={()=>

setPage(
"profile"
)

}

>

👤 Profile

</button>



</div>

</nav>

);

}

export default Navbar;
