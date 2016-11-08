function Valid(){
    var nom = document.getElementById("nom").value;
    var prenom =document.getElementById("prenom").value;
    var ville = document.getElementById("ville").value;
    if (nom == ""){
        alert('entre ton nom');
        return false
    }else if
    (prenom == ""){
        alert('entre ton prenom');
        return false
    }else if
    (ville == ""){
        alert('entre ta ville');
        return false
    }alert('nom: '+nom+'\n prenom: '+prenom+'\n ville: '+ville);
}