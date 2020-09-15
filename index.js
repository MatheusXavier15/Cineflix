function MaisSeries() {
    document.getElementById('Cards').style.maxHeight = '100%';
    document.getElementById('Cards').style.transition = 'all 1s';
    document.getElementById('MaisSeries-buton').style.display = 'none';
}
function comedia() {
    document.getElementById('dropdownMenu2').innerText = "Comédia";
    var comedy = document.getElementsByClassName('card Comédia');
    for (var i = 0; i < comedy.length; i += 1) {
        document.getElementById('Cards').style.transition = 'all 1s';
        comedy[i].style.display = 'block';
    }
    var romanc = document.getElementsByClassName('card Romance');
    for (var i = 0; i < romanc.length; i += 1) {
        document.getElementById('Cards').style.transition = 'all 1s';
        romanc[i].style.display = 'none';
    }
    var advent = document.getElementsByClassName('card Adventure');
    for (var i = 0; i < advent.length; i += 1) {
        document.getElementById('Cards').style.transition = 'all 1s';
        advent[i].style.display = 'none';
    }
    document.getElementById('MaisSeries-buton').style.display = 'none';
}
function romance() {
    document.getElementById('dropdownMenu2').innerText = "Romance";
    var comedy = document.getElementsByClassName('card Comédia');
    for (var i = 0; i < comedy.length; i += 1) {
        document.getElementById('Cards').style.transition = 'all 1s';
        comedy[i].style.display = 'none';
    }
    var romanc = document.getElementsByClassName('card Romance');
    for (var i = 0; i < romanc.length; i += 1) {
        document.getElementById('Cards').style.transition = 'all 1s';
        romanc[i].style.display = 'block';
    }
    var advent = document.getElementsByClassName('card Adventure');
    for (var i = 0; i < advent.length; i += 1) {
        document.getElementById('Cards').style.transition = 'all 1s';
        advent[i].style.display = 'none';
    }
    document.getElementById('MaisSeries-buton').style.display = 'none';
}
function adventure() {
    document.getElementById('dropdownMenu2').innerText = "Aventura";
    var comedy = document.getElementsByClassName('card Comédia');
    for (var i = 0; i < comedy.length; i += 1) {
        document.getElementById('Cards').style.transition = 'all 1s';
        comedy[i].style.display = 'none';
    }
    var romanc = document.getElementsByClassName('card Romance');
    for (var i = 0; i < romanc.length; i += 1) {
        document.getElementById('Cards').style.transition = 'all 1s';
        romanc[i].style.display = 'none';
    }
    var advent = document.getElementsByClassName('card Adventure');
    for (var i = 0; i < advent.length; i += 1) {
        document.getElementById('Cards').style.transition = 'all 1s';
        advent[i].style.display = 'block';
    }
    document.getElementById('MaisSeries-buton').style.display = 'none';
}

function MaisComentarios() {
    document.getElementById('comentarios').style.maxHeight = '100%';
    document.getElementById('comentarios').style.transition = 'all 1s';
    document.getElementById('MaisComentarios').style.display = 'none';
}