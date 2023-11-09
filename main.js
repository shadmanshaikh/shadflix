
async function fetchData(NameOfMovie ) {
    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${NameOfMovie}&apikey=dd8d9822`);

      const data = await response.json();
      PosterContainer = document.getElementById('poster');
      PosterContainer.innerHTML = `<img src="${data.Poster}">`;
      const Content =  document.getElementById('result');
      Content.innerHTML = `Movie Name:`+data.Title + `<br>`+" Release Year: " + data.Year + `<br>` + `Actors:`+ data.Actors;
    //   console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
function logInput(){
    let Movies = document.getElementById('movie').value;
    fetchData(Movies);          
}
// async function MovieDetails(NameOfMovie){
//     const url = `https://www.omdbapi.com/?t=${NameOfMovie}&apikey=dd8d9822`
//     const res = await fetch(`${url}`);
//     const data = await res.json();
//     console.log(data.Year);
//     return data.Year;
// }

