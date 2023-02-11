function searchVideos(keyword) {
    gapi.client.init({
      'apiKey': 'AIzaSyA-xTj9kAOZNlMIg5Kl16qw9mfoRuYPRWY',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
    }).then(function() {
      var request = gapi.client.youtube.search.list({
        q: keyword,
        type: 'video',
        part: 'id'
      });
      request.execute(function(response) {
        console.log(response);
      });
    });
  }

let player5;
let player4;
let player3;
let player2;
let player1;

function onYouTubeIframeAPIReady() {    
    
  player5 = new YT.Player('player5', {
      height: '200',
      width: '300',
      videoId: 'bjbVX5aVpbo',
      playerVars: {
          autoplay: 0
        },
      events: {
      //'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
      }
  });    

  player4 = new YT.Player('player4', {
      height: '200',
      width: '300',
      videoId: 'LdzjYhwqFbg',
      playerVars: {
          autoplay: 0
        },
      events: {
      'onStateChange': onPlayerStateChange
      }
  });    
  
  player3 = new YT.Player('player3', {
      height: '200',
      width: '300',
      videoId: 'h9EaozzlyS0',
      playerVars: {
          autoplay: 0
        },
      events: {
      'onStateChange': onPlayerStateChange
      }
  });  

  player2 = new YT.Player('player2', {
      height: '200',
      width: '300',
      videoId: 'PgmjXGNFp2c',
      playerVars: {
          autoplay: 0
        },
      events: {
      'onStateChange': onPlayerStateChange
      }
  });  

  player1 = new YT.Player('player1', {
      height: '200',
      width: '300',
      videoId: 'mehOsoGLjDQ',
      playerVars: {
          autoplay: 0
        },
      events: {        
      'onStateChange': onPlayerStateChange
      }
  }); 
}

//function onPlayerReady(event) {
//    event.target.playVideo();
//   }

function onPlayerStateChange(event) {
  var players = [player1, player2, player3, player4, player5];
  var allPaused = true;
  
  for (var i = 0; i < players.length; i++) {
      var player = players[i];
      if (player === event.target) {
          continue;
      }
      
      if (event.data == YT.PlayerState.PLAYING) {
          player.pauseVideo();
      }
      if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        allPaused = false;
        break;
      }
  }

  if (allPaused) {
    document.body.removeAttribute('data-theme');
  }

  if (event.data == YT.PlayerState.PLAYING) {
      
      switch (event.target.getVideoData().video_id) {
          case 'bjbVX5aVpbo':
              document.body.setAttribute('data-theme', 't-follow-the-flow');                
              break;
          case 'LdzjYhwqFbg':
              document.body.setAttribute('data-theme', 't-autobots');                
              break;
          case 'h9EaozzlyS0':
              document.body.setAttribute('data-theme', 't-eye-of-horus');                
              break;
          case 'PgmjXGNFp2c':
              document.body.setAttribute('data-theme', 't-meu-nordeste');                
              break;
          case 'mehOsoGLjDQ':
              document.body.setAttribute('data-theme', 't-artificial-intelligence');                
              break;
          default:
              document.body.removeAttribute('data-theme');
              break;
      }
  }  
}


