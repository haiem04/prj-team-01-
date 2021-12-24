document.addEventListener('DOMContentLoaded' , function(){
  
//------------------------------ ---------JS cho phần sticky menu
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

//------------------------------ ---------JS cho phần địa chỉ cửa hàng
    let list = document.querySelectorAll('.list');
    let itemBox = document.querySelectorAll('.itemBox');
    
        for (let k = 1 ; k < itemBox.length; k++ ){
            itemBox[k].classList.add('hide');
        }
        for ( let i = 0 ; i < list.length ; i++){
            list[i].addEventListener('click' , function(){
                console.log('hello');
                let dataPlace = list[i].getAttribute('data-place');
               
                for ( let j = 0 ; j <  itemBox.length ;  j++){
                    itemBox[j].classList.remove('active');
                    itemBox[j].classList.add('hide');
                    
                    if ( itemBox[j].getAttribute('data-item') == dataPlace ){
                    itemBox[j].classList.remove('hide');
                    itemBox[j].classList.add('active');
                    }
                }
            })
        }
})
