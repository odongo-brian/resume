const hambugger = document.querySelector('.header .navbar .nav-list .hambugger');
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');
const menu_item = document.querySelector('.header .navbar .nav-list ul li a');

const header = document.querySelector('.header .container');

hambugger.addEventListener('click', ()=>{
    hambugger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.getElementsByClassName.backgroundColor = "#29323c";
    } 
    else{
        header.getElementsByClassName.backgroundColor = "transparent";

    }
});

menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hambugger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})