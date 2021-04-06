document.addEventListener("DOMContentLoaded",()=> {
    fetchAnime()
})

const baseURL = "https://api.jikan.moe/v3"


function fetchAnime() {
    fetch("https://api.jikan.moe/v3/top/anime/1")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const left = document.querySelector(".left")
      for (const key in data.top){
        console.log(data.top[key].title)
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
    fetch(baseURL+`/anime/${e.target.id}`)
    .then(res => res.json())
    .then(anime => {
        console.log(anime)
        const right = document.querySelector(".right")
        const divTags = document.createElement("div")
        divTags.innerHTML=""
        divTags.innerHTML = `
        <h2>${anime.title}</h2>
        <img src=${anime.image_url} alt=${anime.title}>
        <p><strong>Synopsis:</strong>${anime.synopsis}</p>`
        right.appendChild(divTags)
        
    })
}

