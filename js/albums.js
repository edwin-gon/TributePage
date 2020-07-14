//Global object of albums grabbed from the Itunes API and albums.py

var albums =
  [
    {
      'title': 'EP (2011 Re-Release)',
      "tracks": ["Be Alone", "Freaks and Geeks", "My Shine", "Lights Turned On", "Not Going Back"],
      "times": ["4:40", "3:37", "3:32", "3:53", "4:40"],
      "numSongs": 5,
      "totalTime": 20,
      "released": "March 8, 2011",
      "yearReleased": "2011",
      "copyright": "\u2117 2018 Wolf and Rothstein",
      "genre": "Hip-Hop/Rap",
      "singles": [],
      "url": "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/56/8d/88/568d88d0-e198-525e-a303-92437d3573f1/content_art_2FVXX4shjcQQSpEuddL7Y5_EP.jpg/1000x1000bb-60.jpg"
    },
    {
      'title': 'Camp',
      "tracks": ["Outside", "Fire Fly", "Bonfire", "All the Shine", "Letter Home", "Heartbeat", "Backpackers", "Les", "Hold You Down", "Kids", "You See Me", "Sunrise", "That Power"],
      "times": ["4:30", "3:23", "3:12", "5:46", "1:44", "4:29", "3:15", "5:17", "4:52", "4:57", "3:15", "3:39", "7:42"],
      "numSongs": 13,
      "totalTime": 56,
      "released": "November 15, 2011",
      "yearReleased": "2011",
      "copyright": "\u2117 2011 MCDJ Recording Under Exclusive License To Glassnote Entertainment Group LLC, distributed by AWAL",
      "genre": "Hip-Hop/Rap",
      "singles": ["Bonfire"],
      "url": "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/0c/78/42/0c784230-aef1-4b40-ddd0-ccf2b6ef751a/892038002398_1.jpg/1000x1000bb-60.jpg"
    },
    {
      'title': 'Because the Internet',
      "tracks": ["The Library (Intro)", "I. Crawl", "II. Worldstar", "Dial Up", "I. The Worst Guys (feat. Chance the Rapper)", "II. Shadows", "III. Telegraph Ave. (\"Oakland\" by Lloyd)", "IV. Sweatpants", "3005", "Playing Around Before the Party Starts", "I. The Party", "II. No Exit", "Death By Numbers", "I. Flight of the Navigator", "II. Zealots of Stockholm [Free Information]", "III. Urn", "I. Pink Toes (feat. Jhen\u00e9 Aiko)", "II. Earth: The Oldest Computer (The Last Night) [feat. Azealia Banks]", "III. Life: The Biggest Troll [Andrew Auernheimer]"],
      "times": ["0:04", "3:29", "4:04", "0:44", "3:39", "3:51", "3:30", "3:00", "3:54", "0:54", "1:31", "2:51", "0:43", "5:44", "4:50", "1:13", "3:27", "4:42", "5:42"],
      "numSongs": 19,
      "totalTime": 58,
      "released": "December 10, 2013",
      "yearReleased": "2013",
      "copyright": "\u2117 2013 MCDJ Entertainment under exclusive license to Glassnote Entertainment Group LLC, distributed by AWAL",
      "genre": "Hip-Hop/Rap",
      "singles": ["3005"],
      "url": "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/4b/bd/0f/4bbd0fc6-30a6-e422-a5b9-a4425b0727cb/44003173460_1.jpg/1000x1000bb-60.jpg"

    },
    {
      'title': 'Kauai',
      "tracks": ["Sober", "Pop Thieves (Make It Feel Good)", "Retro [ROUGH]", "The Palisades (feat. Christian Rich)", "Poke (feat. Steve G. Lover III)", "Late Night in Kauai (feat. Jaden Smith)", "V. 3005 (Beach Picnic Version)"],
      "times": ["4:12", "5:09", "3:22", "3:10", "3:36", "4:49", "3:45"],
      "numSongs": 7,
      "totalTime": 27,
      "released": "October 03, 2014",
      "yearReleased": "2014",
      "copyright": "\u2117 2014 mcDJ Recording under exclusive license to Glassnote, distributed by AWAL",
      "genre": "Hip-Hop/Rap",
      "singles": ["Sober"],
      "url": "img/kauai-album.png"
    },

    {
      'title': '"Awaken, My Love!"',
      "tracks": ["Me and Your Mama", "Have Some Love", "Boogieman", "Zombies", "Riot", "Redbone", "California", "Terrified", "Baby Boy", "The Night Me and Your Mama Met", "Stand Tall"],
      "times": ["6:19", "3:44", "3:36", "4:41", "2:05", "5:26", "2:45", "4:15", "6:22", "3:34", "6:10"],
      "numSongs": 11,
      "totalTime": 49,
      "genre": "R&B/Soul",
      "released": "December 02, 2016",
      "yearReleased": "2016",
      "copyright": "\u2117 2016 McDJ Entertainment under exclusive license to Glassnote Entertainment Group LLC, distributed by AWAL", "genre": "R&B/Soul",
      "singles": ["Me and your Mama", "Redbone", "Terrifed"],
      "url": "img/awaken-album.jpg"
    },
    {
      'title': "This is America - Single",
      "tracks": ["This is America"],
      "times": ["3:45"],
      "genre": "Hip-Hop/Rap",
      "numSongs": 1,
      "totalTime": 4,
      "released": "May 6, 2018",
      "yearReleased": "2018",
      "copyright": "\u2117 2018 MCDJ Recording under license to RCA Records",
      "singles": [],
      "url": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/e7/25/10/e725107f-dccb-5b53-dfa2-6bf6971550d8/886447091500.jpg/1000x1000bb-60.jpg"
    },
    {
      "title": "Summer Pack - Single",
      "tracks": ["Summertime Magic", "Feels Like Summer"],
      "times": ["3:33", "4:57"],
      "numSongs": 2,
      "totalTime": 9,
      "released": "July 11, 2018",
      "yearReleased": "2018",
      "copyright": "\u2117 2018 MCDJ Recording under license to RCA Records",
      "singles": [],
      "genre": "R&B/Soul",
      "url": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/1e/5e/d2/1e5ed2de-0c8b-2105-666d-9d461f06ce08/886447209837.jpg/1000x1000bb-60.jpg"
    },
    {
      'title': '3.15.20',
      "tracks": ["0.00", "Algorhythm", "Time (feat. Ariana Grande)", "12.38 (feat. 21 Savage, Ink & Kadhja Bonet)", "19.10", "24.19", "32.22", "35.31", "39.28", "42.26", "47.48", "53.49"],
      "times": ["2:59", "3:32", "6:07", "6:32", "5:08", "7:59", "3:12", "3:56", "2:59", "5:21", "6:00", "3:55"],
      "numSongs": 12,
      "genre": "Pop",
      "totalTime": 58,
      "released": "March 22, 2020",
      "yearReleased": "2020",
      "copyright": "\u2117 2020 McDJ Entertainment under exclusive license to Glassnote Entertainment Group LLC, distributed by AWAL", "genre": "R&B/Soul",
      "singles": [],
      "url": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/c4/a2/69/c4a26947-9bc4-7310-a7cf-50c20d3caa1b/886448371472.jpg/1000x1000bb-60.jpg"
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
  // console.log(e.target);
  if (e.target == m) {
    m.style.display = 'none';
  }
});