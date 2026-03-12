function checkBus(){
document.getElementById("result").innerHTML =
"Bus 3 will arrive at 07:30";
}
function login(){

let role = document.getElementById("role").value;
let studentNumber = document.getElementById("studentNumber").value;
let password = document.getElementById("password").value;

if(studentNumber === "" || password === ""){
document.getElementById("message").innerHTML = "Please enter your details.";
return;
}

if(role === "student"){
window.location.href = "index.html";
}

if(role === "admin"){
window.location.href = "admin.html";
}

}