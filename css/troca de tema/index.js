const button = document.querySelector('.js-theme');
const button2 = document.querySelector('.js-theme2');

const themes = {
    't-dark': 't-light',
    't-light': 't-dark'
}

if(button) {
    button.addEventListener('click', event => {
        event.preventDefault()
        const currentTheme = document.body.dataset.theme
        document.body.setAttribute('data-theme', themes[currentTheme] || 't-light')
    })
}

if(button2) {
    button2.addEventListener('click', event => {
        event.preventDefault()
        const currentTheme = document.body.dataset.theme
        document.body.setAttribute('data-theme', themes[currentTheme] || 't-light')
    })
}