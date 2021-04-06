document.addEventListener("DOMContentLoaded",()=> {
    fetchAnime()
})

function fetchAnime() {
    fetch("https://api.jikan.moe/v3/top/anime/1")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const left = document.querySelector(".left")
      for (const key in data.top){
        console.log(data.top[key].title)
        const divTags = document.createElement("div")
        divTags.setAttribute("class",`top-anime`)
        divTags.innerHTML += `
            ${data.top[key].title}`
        left.appendChild(divTags)
    }
    })
    
}