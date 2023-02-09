let player5;
let player4;
let player3;
let player2;
let player1;
let currentVideo = "";

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
                document.body.setAttribute('data-theme', 'autobots');
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
    } else if (event.data == YT.PlayerState.PAUSED) {
        document.body.removeAttribute('data-theme');
    }
}