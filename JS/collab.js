function collabf(){   
    let maisCollab = document.getElementById("txtCollab");
    let btnCollab = document.getElementById("btnCollab");

    if(maisCollab.style.display === "inline") {
        maisCollab.style.display = "none";
        btnCollab.innerHTML = "O que é collab?";
    }else{
        maisCollab.style.display = "inline";
        btnCollabs.innerHTML = "Já entendi";
    }
}