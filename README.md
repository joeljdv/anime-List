# Phase-1-Final-Project
## Anime List

hello, My name is Joel Diaz and this is my anime list application. In order to use this application visit the repository at:https://github.com/joeljdv/anime-List. Once in the repository, fork the repo and clone it to your computer. you will find a README file and an HTML file accompanied by a src folder with the JS and CSS sheets nested inside it. This application works in a very simple way:

1. I use a fetch request to GET the top animes API.
2. Then iterate through the data received from the fetch to separate each anime.
3. Each anime is assigned a div with the anime title and rendered in the page.
4. I then added an event listener to each anime title.
5. When we click a title, the event listener is going to use another fetch request, this time to GET that specific anime API.
6. Once the fetch response is returned, information about that specific anime we clicked on, will render on the right side of the page. Here you will see anime title, an img, synopsis, genres, status and number of episodes.
7. For additional functionality I added a dropdown menu with different categories/genres of anime.
8. When we click on one of the categories it will send a fetch request to GET animes on that category and render them in the page.