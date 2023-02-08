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


