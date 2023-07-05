




// off canvas toggling-------------------------------------------------------------------------------------------------------------
const offcanvas = document.getElementById('offcanvas');
const openButton = document.getElementById('nav-left');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener("click",()=> {
  offcanvas.classList.add('opened')
})

closeButton.addEventListener("click",()=> {
  offcanvas.classList.remove('opened')
})


const img_url="https://image.tmdb.org/t/p/original"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDczM2ZjZDAxMzNjZTVkYjA4NWEzMTgwYzdmNjExNiIsInN1YiI6IjY0NmUyYjUyYTUwNDZlMDEyNDY5ZWFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LUfdt_JS3fmUYzW3jDzODemSUBTU_JMIkrW5UNXuulk'
  }
};

function home(){
//popular movies request...
function popularMovies(){
fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .catch(err=>console.log(err))
  .then(data=>{
      const results=data.results
      //random movie generation....
      const setMovie=results[Math.floor(Math.random()* results.length-1)]

      banner.style.opacity="0"
            
      setTimeout(()=>{
        let banner=document.getElementById("banner")
        let bannerTitle=document.getElementById("banner-title")
        let bannerDesc=document.getElementById("banner-description")
      bannerDesc.innerText=setMovie.overview.slice(0,150)+"..."
      bannerTitle.innerText=setMovie.title
      banner.style.backgroundImage="url(" + img_url + setMovie.backdrop_path + ")"
            
        
          banner.style.opacity = '1';
          }, 1000)
      })  
  
}

function render(){
  popularMovies()
setInterval(popularMovies,5000)
}

render()


//movie rows-------------------------------------------------------------------------------------------------------------------------------


//  1 top rated movies row---------------------------------------------------------------------------------------------------
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then((data)=>{
    const headRow=document.getElementById("headrows")
    const row=document.createElement("div")
    row.className="row"
    row.classList.add("topRated")
    headRow.appendChild(row)
    const title=document.createElement("h2")
    title.className="row-title"
    title.innerText= "TOP RATED"
    row.appendChild(title)
    const rowPosters = document.createElement("div")
    rowPosters.className="row-posters"
    row.appendChild(rowPosters)
    data.results.forEach(movie => {h
      const poster=document.createElement("img")
      poster.className="row-poster"
      poster.src=img_url+movie.poster_path
  
      let m=movie.title.replace(/\s+/g,"")
      poster.id=m
      rowPosters.appendChild(poster)
      })
    })
  

// 2  action movies------------------------------------------------------------------------------------------------
fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=28', options)
  .then(response => response.json())
  .then((data)=>{
    const headRow=document.getElementById("headrows")
    const row=document.createElement("div")
    row.className="row"
    row.classList.add("actionMovies")
    headRow.appendChild(row)
    const title=document.createElement("h2")
    title.className="row-title"
    title.innerText= "ACTION MOVIES"
    row.appendChild(title)
    const rowPosters = document.createElement("div")
    rowPosters.className="row-posters"
    row.appendChild(rowPosters)
    data.results.forEach(movie => {
      const poster=document.createElement("img")
      poster.className="row-posterLarge"
      poster.src=img_url+movie.poster_path
  
      let m1=movie.title.replace(/\s+/g,"")
      poster.id=m1
      rowPosters.appendChild(poster)
      })
    })

// 3  comedy----------------------------------------------------------------------------------------------------------

    fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=14', options)
    .then(response => response.json())
    .then((data)=>{
      const headRow=document.getElementById("headrows")
      const row=document.createElement("div")
      row.className="row"
      row.classList.add("comedy-movies")
      headRow.appendChild(row)
      const title=document.createElement("h2")
      title.className="row-title"
      title.innerText= "COMEDY MOVIES"
      row.appendChild(title)
      const rowPosters = document.createElement("div")
      rowPosters.className="row-posters"
      row.appendChild(rowPosters)
      data.results.forEach(movie => {
        const poster=document.createElement("img")
        poster.className="row-posterLarge1"
        poster.src=img_url+movie.poster_path
    
        let m2=movie.title.replace(/\s+/g,"")
        poster.id=m2
        rowPosters.appendChild(poster)
        })
      })


 // 4  netflix originals----------------------------------------------------------------------

      fetch('https://api.themoviedb.org/3/discover/tv?&with_networks=213', options)
    .then(response => response.json())
    .then((data)=>{
      const headRow=document.getElementById("headrows")
      const row=document.createElement("div")
      row.className="row"
      row.classList.add("NETFLIX_ORIGINALS")
      headRow.appendChild(row)
      const title=document.createElement("h2")
      title.className="row-title"
      title.innerText= "NETFLIX ORIGINALS"
      row.appendChild(title)
      const rowPosters = document.createElement("div")
      rowPosters.className="row-posters"
      row.appendChild(rowPosters)
      data.results.forEach(movie => {
        const poster=document.createElement("img")
        poster.className="row-posterLarge2"
        poster.src=img_url+movie.poster_path
    
        let m3=movie.name.replace(/\s+/g,"")
        poster.id=m3
        rowPosters.appendChild(poster)


        })
      })
    }

home()

//sorting functionality---------------------------------------------------------------------------------------------------

const movies=document.getElementById("movies")
const Shows=document.getElementById("tv-shows")
const genres=document.getElementById("genre")
const sortDates=document.getElementById("date")

