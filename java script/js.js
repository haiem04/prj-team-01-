document.addEventListener('DOMContentLoaded' , function(){
    var nav = document.getElementById('menu');
    var main = document.getElementById('main');
    var navbar = nav.offsetTop;
    window.onscroll = function() {
         var window_pos = document.documentElement.scrollTop;
         if (window_pos >= navbar){
             console.log('test');
             nav.classList.add("sticky"); 
            main.style.paddingTop = "110px"
         }
         else{
            console.log('test');
             nav.classList.remove("sticky");
             main.style.paddingTop = "0px"
         }
    }
})
