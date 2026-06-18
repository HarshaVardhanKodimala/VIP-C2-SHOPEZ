function Categories({
setSelectedCategory
}) {

const categories=[

"All",

"Mobiles",

"Fashion",

"Electronics"

];

return (

<div
className=
"container mt-4"
>

{

categories.map(
(cat)=>(

<button

key={cat}

className=
"btn btn-outline-primary me-3"

onClick={()=>
setSelectedCategory(
cat
)
}

>

{cat}

</button>

)

)

}

</div>

);

}

export default Categories;
