document.addEventListener("DOMContentLoaded",()=> {
    fetchAnime()
})

function fetchAnime() {
    fetch("https://api.jikan.moe/v3/top/anime/1")
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    
}