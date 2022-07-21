let main = document.querySelectorAll(' .main-banner-movie .center-banner')[0]
let second = document.querySelectorAll(' .other-banner-movie .movies')[0]

fetch('https://api.themoviedb.org/3/movie/popular?api_key=86ef71989f8c4a9a7cc321d7a0f6a528')
.then(response => response.json())
.then(data => {
    data.results.map((i, j)=>{
        if(j>10)
            return
        if(j==0){
            main.innerHTML += `
            <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original/`+i.backdrop_path+`')"></div>
            <h2>Confira alguns de nossos filmes:</h2>
            `
        } else {
            if(j == 1) {
                second.innerHTML+=`
                <div class="card-movie")">
                    <img src="https://image.tmdb.org/t/p/w500`+i.backdrop_path+`"/>
                </div>
                `
            } else {
                second.innerHTML+=`
                <div class="card-movie")">
                    <img src="https://image.tmdb.org/t/p/w500`+i.backdrop_path+`"/>
                </div>
                `
            }
            
        }
    })
})

$(function(){
    AOS .init({
        easing:'ease',
        duration:1000,
    })
})

