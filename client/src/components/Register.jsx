import { useState } from "react";
import axios from "axios";

function Register() {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const registerUser=async()=>{

try{

await axios.post(
"http://localhost:8000/api/auth/register",
{
name,
email,
password
}
);

alert("Registered Successfully");

setName("");
setEmail("");
setPassword("");

}

catch(error){

console.log(error);

alert(
error.response?.data?.message
||
"Registration Failed"
);

}

};

return(

<div
className="card border-0 shadow-sm"
style={{
borderRadius:"20px",
padding:"30px",
maxWidth:"480px",
margin:"auto"
}}
>

<h2
className="text-center mb-4 fw-bold"
>

Create Account

</h2>

<input

className="form-control mb-3"

placeholder="Full Name"

value={name}

onChange={(e)=>
setName(
e.target.value
)
}

style={{
height:"50px"
}}

/>

<input

className="form-control mb-3"

placeholder="Email"

value={email}

onChange={(e)=>
setEmail(
e.target.value
)
}

style={{
height:"50px"
}}

/>

<input

type="password"

className="form-control mb-4"

placeholder="Password"

value={password}

onChange={(e)=>
setPassword(
e.target.value
)
}

style={{
height:"50px"
}}

/>

<button

className="btn btn-primary w-100"

style={{
height:"50px",
fontWeight:"600"
}}

onClick={
registerUser
}

>

Create Account

</button>

<p
className="text-center mt-3 text-muted"
>

Start shopping today

</p>

</div>

);

}

export default Register;
