//Global object of albums grabbed from the Itunes API and albums.py

var albums =
  [
    {
      'title': 'Because the Internet',
      "tracks": ["The Library (Intro)", "I. Crawl", "II. Worldstar", "Dial Up", "I. The Worst Guys (feat. Chance the Rapper)", "II. Shadows", "III. Telegraph Ave. (\"Oakland\" by Lloyd)", "IV. Sweatpants", "3005", "Playing Around Before the Party Starts", "I. The Party", "II. No Exit", "Death By Numbers", "I. Flight of the Navigator", "II. Zealots of Stockholm [Free Information]", "III. Urn", "I. Pink Toes (feat. Jhen\u00e9 Aiko)", "II. Earth: The Oldest Computer (The Last Night) [feat. Azealia Banks]", "III. Life: The Biggest Troll [Andrew Auernheimer]"],
      "times": ["0:04", "3:29", "4:04", "0:44", "3:39", "3:51", "3:30", "3:00", "3:54", "0:54", "1:31", "2:51", "0:43", "5:44", "4:50", "1:13", "3:27", "4:42", "5:42"],
      "numSongs": 19,
      "totalTime": 58,
      "released": "December 10,2013",
      "yearReleased": "2013",
      "copyright": "\u2117 2013 MCDJ Entertainment under exclusive license to Glassnote Entertainment Group LLC, distributed by AWAL",
      "genre": "Hip-Hop/Rap"
    },

    {
      'title': 'Camp',
      "tracks": ["Outside", "Fire Fly", "Bonfire", "All the Shine", "Letter Home", "Heartbeat", "Backpackers", "Les", "Hold You Down", "Kids", "You See Me", "Sunrise", "That Power"],
      "times": ["4:30", "3:23", "3:12", "5:46", "1:44", "4:29", "3:15", "5:17", "4:52", "4:57", "3:15", "3:39", "7:42"],
      "numSongs": 13,
      "totalTime": 56,
      "released": "November 15,2011",
      "yearReleased": "2011",
      "copyright": "\u2117 2011 MCDJ Recording Under Exclusive License To Glassnote Entertainment Group LLC, distributed by AWAL",
      "genre": "Hip-Hop/Rap"
    },

    {
      'title': 'Kauai',
      "tracks": ["Sober", "Pop Thieves (Make It Feel Good)", "Retro [ROUGH]", "The Palisades (feat. Christian Rich)", "Poke (feat. Steve G. Lover III)", "Late Night in Kauai (feat. Jaden Smith)", "V. 3005 (Beach Picnic Version)"],
      "times": ["4:12", "5:09", "3:22", "3:10", "3:36", "4:49", "3:45"],
      "numSongs": 7,
      "totalTime": 27,
      "released": "October 03,2014",
      "yearReleased": "2014",
      "copyright": "\u2117 2014 mcDJ Recording under exclusive license to Glassnote, distributed by AWAL",
      "genre": "Hip-Hop/Rap"
    },

    {
      'title': '"Awaken, My Love!"',
      "tracks": ["Me and Your Mama", "Have Some Love", "Boogieman", "Zombies", "Riot", "Redbone", "California", "Terrified", "Baby Boy", "The Night Me and Your Mama Met", "Stand Tall"],
      "times": ["6:19", "3:44", "3:36", "4:41", "2:05", "5:26", "2:45", "4:15", "6:22", "3:34", "6:10"],
      "numSongs": 11,
      "totalTime": 49,
      "released": "December 02,2016",
      "yearReleased": "2016",
      "copyright": "\u2117 2016 McDJ Entertainment under exclusive license to Glassnote Entertainment Group LLC, distributed by AWAL", "genre": "R&B/Soul"
    }

  ];

let albs = document.querySelectorAll('.album');
console.log(albs);
let close = document.getElementsByClassName('close')[0];

let m = document.getElementById('modal');

albs.forEach(function (e) {
  e.addEventListener('click', function () {
    m.style.display = 'block';
    let num = e.getAttribute('data-num');


    //Clear the node (modal)
    let img = document.getElementsByClassName('modal-img')[0];
    img.src = e.src;

    let aTitle = document.getElementsByClassName('album-title')[0];
    aTitle.innerHTML = albums[num].title;

    let genreYr = document.getElementsByClassName('genre')[0];
    genreYr.innerHTML = albums[num].genre + ' - ' + albums[num].yearReleased;

    let numSongs = document.getElementsByClassName('num-songs')[0];
    numSongs.innerHTML = albums[num].numSongs;

    let numMin = document.getElementsByClassName('num-min')[0];
    numMin.innerHTML = albums[num].totalTime;

    let released = document.getElementsByClassName('date-release')[0];
    released.innerHTML = albums[num].released;
    let copyRight = document.getElementsByClassName('copyright')[0];
    copyRight.innerHTML = albums[num].copyright;

    // console.log(e.src);

    let tableBody = document.getElementsByTagName('tbody')[0];
    let nBody = document.createElement('tbody');
    tableBody.parentNode.replaceChild(populateSongList(num, nBody), tableBody);

  })
});

function populateSongList(index, body) {
  let headerRow = document.createElement('tr');
  headerRow.innerHTML = '<tr><th style="margin-left:5%;">Song</th><th>Artist</th><th></th></tr>';

  body.appendChild(headerRow);

  let count = 1;
  for (let s in albums[index].tracks) {

    let containSong = document.createElement('tr');
    let containTitle = document.createElement('td');
    containTitle.innerHTML = "<span class='song-num'>" + count + "  </span>";


    containTitle.innerHTML += albums[index].tracks[s];

    let artistName = document.createElement('td');
    let songLength = document.createElement('td');

    artistName.innerHTML = 'Childish Gambino';
    songLength.innerHTML = albums[index].times[count - 1];

    containSong.appendChild(containTitle);
    containSong.appendChild(artistName);
    containSong.appendChild(songLength);

    body.appendChild(containSong);

    count++;

  }

  return body

}

close.addEventListener('click', function () {
  m.style.display = 'none';
});

window.addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target == m) {
    m.style.display = 'none';
  }
});