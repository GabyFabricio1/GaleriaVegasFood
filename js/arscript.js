login.addEventListener("click" , () =>{
    let password = document.getElementById("password").value;
    let user = document.getElementById("user").value;
    

    if (user == "admin" && password == "admin"){
        window.location.href = 'restrita.html'
    }
    else{
        window.alert("Login incorreto!")
    }
})