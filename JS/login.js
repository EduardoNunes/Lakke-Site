function logar (){       
    var login1 = document.getElementById('login').value
    var senha1 = document.getElementById('senha').value  

    if(login1 == "lakke" && senha1 == "123456"){
        location.href = "../index.html";
    }else{
        alert('Login ou senha inválido');
    }
    console.log()       
}

