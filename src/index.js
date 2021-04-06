document.addEventListener("DOMContentLoaded",()=> {
    fetchAnime()
    document.querySelector("#genres").addEventListener("click",fecthByGenres)
})

const baseURL = "https://api.jikan.moe/v3"


function fetchAnime() {
    fetch("https://api.jikan.moe/v3/top/anime/1")
    .then(res => res.json())
    .then(data => {
        console.log(data)
      for (const key in data.top){
       addInfo(data.top[key])
        attachClick()
        }     
    })  
}

function attachClick() {
    const animes = document.querySelectorAll(".anime")
    animes.forEach(element => element.addEventListener("click",displayInfo))
}

function displayInfo(e) {
    const divTags = document.createElement("div")
    const right = document.querySelector(".right")
    right.innerHTML=""  
    fetch(baseURL+`/anime/${e.target.id}`)
    .then(res => res.json())
    .then(anime => {
        divTags.innerHTML = `
        <h2>${anime.title}</h2>
        <img src=${anime.image_url} alt=${anime.title}>
        <p><strong>Synopsis: </strong>${anime.synopsis}</p>
        <p><strong>Status: </strong>${anime.status}</p>`
        right.appendChild(divTags) 
    })
}

function fecthByGenres(e){ 
    const dropdown = e.target.value
     console.log(dropdown)
     const container = document.querySelector("#container") 
    if(dropdown === "Action") {
         container.innerHTML=""
        var genreCode=1
        justFetch(genreCode)
    }else if(dropdown === "Adventure") {
        var genreCode = 2
        container.innerHTML=""
        justFetch(genreCode)
    }else if(dropdown === "Top Anime") {
        container.innerHTML=""
        fetchAnime()
    }else if(dropdown === "comedy") {
        genreCode=4
        container.innerHTML=""
        justFetch(genreCode)
    }

}

function addInfo(data) {
    const container = document.querySelector("#container")
        const divTags = document.createElement("div")
        divTags.setAttribute("id",`${data.mal_id}`)
        divTags.classList.add('anime')
        divTags.innerHTML += `
            ${data.title}`
        container.appendChild(divTags)
}

function justFetch(genreCode) {
    fetch(baseURL+`/genre/anime/${genreCode}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for(const element in data.anime){ 
                addInfo(data.anime[element])
                attachClick()
            }
        })
}