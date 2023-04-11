let menu = document.getElementById('menu')
let itens = document.getElementById('lista')
itens.style.display= 'none'
menu.addEventListener('click', abrirMenu)


function abrirMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
        itens.style.color = 'white'
        itens.style.border = 'solid'
        itens.style.position = 'absolute'
    }
}


