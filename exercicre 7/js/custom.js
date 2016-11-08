function Valid() {
    var pointure = document.getElementById("pointure").value;
    var annee = document.getElementById("annee").value;
    if (pointure == ''){
        alert('entre votre pointure');
        return false
    }else if
    (annee == ''){
        alert('entre adresse de naisssance');
        return false
    }
    var double= pointure * 2 ;
    var plus = double + 5 ;
    var mult = plus * 50 ;
    var sous = mult - annee ;
    var result = sous + 1766 ;

    alert(result);

}
