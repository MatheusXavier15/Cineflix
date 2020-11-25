let API_KEY = 'b97bda4a0dc150047e63e942fef57608';

function ListMovies(e) {
    //document.getElementById('menu-list').style.display = 'none';
    let space = document.getElementById('CardsNew');
    let text = '';
    let dados = JSON.parse(this.responseText);
    dados.results.filter((element) => {
        return element.overview.length > 0;
    }).forEach((element) => {
        text += ` <div class="FindCards">
        <img src="https://image.tmdb.org/t/p/w500${element.poster_path} " class="card-img-top" alt="...">
        <div class="card-body" style="background-color: #121212; max-height: 38.5vh!important; margin-right:0px!important;">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text" style="display: -webkit-box!important;-webkit-line-clamp: 4!important;-webkit-box-orient: vertical!important; overflow: hidden!important;text-overflow: ellipsis!important;">${element.overview}</p>
            <a style="background-color: red;border: red;" href="#" class="btn btn-primary">Saiba mais</a>
        </div>
    </div>`
    });

    space.innerHTML = text;
}

function Finder() {
    let query = document.getElementById('search-txt').value;


    let xhr = new XMLHttpRequest();
    xhr.onload = ListMovies;
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&page=1&query=${query}&include_adult=false`)
    xhr.send();

    document.getElementById('Lançamento').style.display = 'none';
    document.getElementById('Destaques').innerHTML = '<div id="CardsNew"> <div>';
    document.getElementById('Avaliações').style.display = 'none';
    document.getElementById('Entrevistas').style.display = 'none';

}

function verifyEnter(e) {
    if (e.which == 13) {
        Finder();
    }
}

document.getElementById('submit-search').addEventListener('click', Finder);
document.getElementById('search-txt').addEventListener('keypress', verifyEnter);
