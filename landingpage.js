const nav= document.querySelector('.navbar')
window.addEventListener('scroll', fixnav)

function fixnav(){
    if( window.scroll > nav.offsetheight + 150){
               nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}
