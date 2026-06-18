const registerUser=
async(
req,
res
)=>{

res.json({
message:
"Register Success"
});

};

const loginUser=
async(
req,
res
)=>{

res.json({
token:
"sample_token"
});

};

module.exports={
registerUser,
loginUser
};
