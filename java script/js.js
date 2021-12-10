document.addEventListener('DOMContentLoaded' , function(){
    var nav = document.getElementById('menu');
    var main = document.getElementById('main');
    var navbar = nav.offsetTop;
    window.onscroll = function() {
         var window_pos = document.documentElement.scrollTop;
         if (window_pos >=navbar){
             console.log('test1');
             nav.classList.add("sticky"); 
         }
         else{
            console.log('test3');
             nav.classList.remove("sticky");
         }
    }
})
