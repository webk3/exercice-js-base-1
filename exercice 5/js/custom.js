function calcu() {
    var premier_nombre = document.getElementById("premier_nombre").value;
    var deuxieme_nombre = document.getElementById("deuxieme_nombre").value;
    if (premier_nombre == ''){
        alert('entre le premier nombre');
        return false
    }else if
    (deuxieme_nombre == ''){
        alert('entre le deuxieme nombre');
        return false
    }
    premier_nombre = Math.trunc(premier_nombre);
    var result = premier_nombre * deuxieme_nombre ;
    alert(result);

}