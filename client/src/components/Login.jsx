import { useState } from "react";
import axios from "axios";

function Login(){

const [email,setEmail]=
useState("");

const [password,
setPassword]=
useState("");

const loginUser=
async()=>{

try{

const {data}=
await axios.post(
"http://localhost:8000/api/auth/login",
{
email,
password
}
);

localStorage.setItem(
"token",
data.token
);

alert(
"Login Success"
);

window.location.reload();


setEmail("");
setPassword("");

}

catch{

alert(
"Login Failed"
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

Welcome Back

</h2>

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

className="btn btn-warning w-100"

style={{
height:"50px",
fontWeight:"600"
}}

onClick={
loginUser
}

>

Login

</button>

<p
className="text-center mt-3 text-muted"
>

Continue Shopping

</p>

</div>

);

}

export default Login;
