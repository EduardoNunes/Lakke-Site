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

//vídeo 5 Follow the Flow ______________________________________________
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
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });    

    player4 = new YT.Player('player4', {
        height: '200',
        width: '300',
        videoId: 'LdzjYhwqFbg',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });    
    
    player3 = new YT.Player('player3', {
        height: '200',
        width: '300',
        videoId: 'h9EaozzlyS0',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });   
    

    player2 = new YT.Player('player2', {
        height: '200',
        width: '300',
        videoId: 'PgmjXGNFp2c',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });  
    

    player1 = new YT.Player('player1', {
        height: '200',
        width: '300',
        videoId: 'mehOsoGLjDQ',
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    }); 
}

function onPlayerReady(event) {
    event.target.playVideo();
    }

function onPlayerStateChange(event) {
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
                document.body.removeAttribute('data-theme', 't-decepticons');
                break;
        }
    } else if (event.data == YT.PlayerState.PAUSED) {
        document.body.removeAttribute('data-theme');
    }
}







const button0 = document.querySelector('.tema0');
const button1 = document.querySelector('.tema1');
const button2 = document.querySelector('.tema2');
const button3 = document.querySelector('.tema3');
const button4 = document.querySelector('.tema4');
const button5 = document.querySelector('.tema5');




if(button0) {
    button0.addEventListener('click', event => {
        event.preventDefault()        
        document.body.setAttribute('data-theme', 't-decepticons')
    })
}

if(button1) {
    button1.addEventListener('click', event => {
        event.preventDefault()        
        document.body.setAttribute('data-theme', 't-artificial-intelligence')
    })
}

if(button2) {
    button2.addEventListener('click', event => {
        event.preventDefault()        
        document.body.setAttribute('data-theme', 't-meu-nordeste')
    })
}

if(button3) {
    button3.addEventListener('click', event => {
        event.preventDefault()        
        document.body.setAttribute('data-theme', 't-eye-of-horus')
    })
}

if(button4) {
    button4.addEventListener('click', event => {
        event.preventDefault()        
        document.body.setAttribute('data-theme', 'autobots')
    })
}

if(button5) {
    button5.addEventListener('click', event => {
        event.preventDefault()        
        document.body.setAttribute('data-theme', 'follow-the-flow')
    })
}


