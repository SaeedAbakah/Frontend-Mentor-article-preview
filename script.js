var share = document.getElementById('socials-icon');
var mobileScreen = window.matchMedia("(max-width:768px)");
var biggerScreen = window.matchMedia("(min-width:769px)")
var shareMobile =  document.getElementById('mobileSocial');

function popUpMenu (){
    if (share.style.display === 'flex') {
        share.style.display = 'none'
    } 

        else {
        share.style.display = 'flex'}
        
            if(mobileScreen.matches){
                share.style.display = 'none'
            }
            
}

function popUpMenuMobile(){
    if(shareMobile.style.display === 'flex'){
        shareMobile.style.display = 'none'
    } 
        else{
            shareMobile.style.display = 'flex'
        }

            if(biggerScreen.matches){
                shareMobile.style.display = 'none'
            }
}

function closeMobile(){
    shareMobile.style.display = 'none'
}

function callBoth(){
    popUpMenu();
    popUpMenuMobile();
}

document.getElementById('share-icon').onclick = callBoth;
document.getElementById('share-icon-hidden').onclick = closeMobile;
