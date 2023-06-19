function abrirMenu() {
    let menu = document.getElementById('itens-menu')
    let display = window.getComputedStyle(menu).getPropertyValue('display');

    if (display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function abrirIcones() {
    let menu = document.getElementById('itens-icones')
    let display = window.getComputedStyle(menu).getPropertyValue('display');

    if (display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var opacidade = window.getComputedStyle(header).getPropertyValue('opacity');
    var scrollTop = document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      header.style.opacity = .97;
    } else {
      header.style.opacity = .1;
    }
});