
var uid="";
function myFunction() {
  var name= document.getElementById("album-name").value;
  fetch( "https://ws.audioscrobbler.com/2.0/?method=album.search&album="+name+"&api_key=0646cb9bb390af71bcd85d985a309e34&format=json")
    .then( response => response.json() )
    .then( data => {console.log(data)
      uid = data.results.albummatches.album[0].image[3]["#text"]
      document.getElementById("photo").src = uid;
// $("photo").attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
     });

}
//"https://lastfm.freetls.fastly.net/i/u/34s/1cf3b3cb3be5a359cb8f31ac9c03bc5b.png"
  function SearchResults() {
    var name= document.getElementById("album-name").value;
    fetch( "https://ws.audioscrobbler.com/2.0/?method=album.search&album="+name+"&api_key=0646cb9bb390af71bcd85d985a309e34&format=json")
    .then( response => response.json() )
    .then( data => {console.log(data)

    });
  }
