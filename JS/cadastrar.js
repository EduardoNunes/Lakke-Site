function cadastrar(){
    let usuarios = 'usuarios'
    let cadastro = document.getElementById("email").value
    let login = document.getElementById("login").value
    let senha = document.getElementById("senha").value

    
    let dadosTextoJSON = '{';

        dadosTextoJSON += '"cadastro": "' + cadastro + '",';
        dadosTextoJSON += '"login": "' + login + '",';
        dadosTextoJSON += '"senha": "' + senha + '"';
    
    dadosTextoJSON += '}';
    
    let blob = new Blob([dadosTextoJSON], {type: "text/plain;charset=utf-8"});
    saveAs(blob, usuarios + ".json");
}