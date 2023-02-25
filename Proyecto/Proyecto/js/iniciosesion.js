function validar(){
    var user, pass, expresion;

     user = document.getElementsByName("username").values;
     pass = document.getElementsByName("password").values;

    if(user ==="" || pass===""){
        alert("Ambos son campos obligatorios");
    }
    else if(user.length>8){
        alert("El nombre es muy largo");
        return false;
    }

}



