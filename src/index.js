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
        const left = document.querySelector(".left")
        const divTags = document.createElement("div")
        divTags.setAttribute("id",`${data.top[key].mal_id}`)
        divTags.classList.add('top-anime')
        divTags.innerHTML += `
            ${data.top[key].title}`
        left.appendChild(divTags) 
        attachClick()
        }     
    })  
}

function attachClick() {
    const animes = document.querySelectorAll(".top-anime")
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
    console.log(e)
}