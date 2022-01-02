document.addEventListener('DOMContentLoaded' , function(){
    
    // var checkedW;
    // var checkwidth = () =>{
    //     checkedW = setInterval(function(){
    //         var screenWidth= screen.availWidth;
    //         console.log('windowWidth' ,screenWidth)
    //     } , 100)
    // }
    // checkwidth();
// fail thử dùng div tester của img or tester từng phần nhỏ 
    
//-----------------------------JS Menu mobile

    var Xoay = document.querySelector('.xoay');
    var overlay = document.querySelector('.overlay')
    var linkMenuTop = document.querySelectorAll('.link')
    var navMobile1 = document.querySelector('.nav_mobile1')
    var btnBar = document.querySelector('.iconmenu')
    var btnClose = document.querySelector('.close')
    var menu = document.querySelector('#menu')
    Xoay.addEventListener('click' , () => {

        if( Xoay.getAttribute('data-Xoay') ==='not' ){
        menu.classList.add('HideBox-menu')
        Xoay.classList.add('animaXoay')
        Xoay.classList.remove('animaNguoc')
        Xoay.setAttribute('data-Xoay' , 'done')
        btnBar.classList.add('animaHidebar')
        btnBar.classList.remove('animaShowbar')
        btnClose.classList.add('animaShowbar')
        btnClose.classList.remove('animaHidebar')
        overlay.classList.add('Show-overlay')
        overlay.classList.remove('Hide-overlay')
        navMobile1.classList.add('Show---menu')
        navMobile1.classList.remove('Hide---menu')
        navMobile1.setAttribute('data-Show--menu', 'done')
        }   
        else{
            setTimeout(function(){
                 menu.classList.remove('HideBox-menu')
            } , 450)
            Xoay.classList.remove('animaXoay')
            Xoay.classList.add('animaNguoc')
            Xoay.setAttribute('data-Xoay' , 'not')
            btnBar.classList.add('animaShowbar')
            btnBar.classList.remove('animaHidebar')
            btnClose.classList.add('animaHidebar')
            btnClose.classList.remove('animaShowbar')
            overlay.classList.remove('Show-overlay')
            overlay.classList.add('Hide-overlay')
            navMobile1.classList.remove('Show---menu')
            navMobile1.classList.add('Hide---menu')
            navMobile1.setAttribute('data-Show--menu', '')
        }
    })
    overlay.addEventListener('click' , () =>{
        setTimeout(function(){
            menu.classList.remove('HideBox-menu')
       } , 450)
       Xoay.classList.remove('animaXoay')
       Xoay.classList.add('animaNguoc')
       Xoay.setAttribute('data-Xoay' , 'not')
       btnBar.classList.add('animaShowbar')
       btnBar.classList.remove('animaHidebar')
       btnClose.classList.add('animaHidebar')
       btnClose.classList.remove('animaShowbar')
       overlay.classList.remove('Show-overlay')
       overlay.classList.add('Hide-overlay')
       navMobile1.classList.remove('Show---menu')
       navMobile1.classList.add('Hide---menu')
       navMobile1.setAttribute('data-Show--menu', '')
    })

        for (let i = 0; i < linkMenuTop.length; i++) {
            linkMenuTop[i].addEventListener('click' , () => {
                setTimeout(function(){
                    menu.classList.remove('HideBox-menu')
               } , 450)
               Xoay.classList.remove('animaXoay')
               Xoay.classList.add('animaNguoc')
               Xoay.setAttribute('data-Xoay' , 'not')
               btnBar.classList.add('animaShowbar')
               btnBar.classList.remove('animaHidebar')
               btnClose.classList.add('animaHidebar')
               btnClose.classList.remove('animaShowbar')
               overlay.classList.remove('Show-overlay')
               overlay.classList.add('Hide-overlay')
               navMobile1.classList.remove('Show---menu')
               navMobile1.classList.add('Hide---menu')
               navMobile1.setAttribute('data-Show--menu', '')

            })
        }
    







//------------------------------ ---------JS cho phần sticky menu
    //*************var của menu ********* */

    var nav = document.getElementById('menu');
    var linkMenu = document.querySelectorAll('.link--menu');
    var navbar = nav.offsetTop ;

     //*************var của hiệu ứng scroll ********* */
     var tester = document.querySelector('.tester') ,
     testerOffset = tester.offsetTop;
     var testerOffset2 = testerOffset + 30 ;
     var testerOffset3 = testerOffset2 + 200 ;
     console.log('testerOffsett2' , testerOffset2)
     var picAbout = document.querySelector('.pic_content_2') ,
            borderC2 = document.querySelector('.border_content_2'),
            titleC2 = document.querySelector('.title_content_2'),
            text1C2 = document.querySelector('.text1_content_2'),
            smallText1 = document.querySelector('.small_1-text--C2'),
            smallText2 = document.querySelector('.small_2-text--C2');
     console.log('tester1' , testerOffset)

            //------------quality
    var tester2 = document.querySelector('.tester2'),
          testerOffset_Q = tester2.offsetTop ;
          console.log('Q',  testerOffset_Q)
    var testerOffset1_Q = testerOffset_Q - 570 ; 
    var testerOffset2_Q = testerOffset1_Q + 450 ; 
    var testerOffset3_Q = testerOffset2_Q + 300 //450 ; 
    var text1BoxC3 = document.querySelector('.text-box1'),
          text2BoxC3 = document.querySelector('.text-box2'),
          text3BoxC3 = document.querySelector('.text-box3'),
          borderBox1 = document.querySelector('.border_box1'),
          borderBox2 = document.querySelector('.border_box2'),
          borderBox3 = document.querySelector('.border_box3');
            //-----------Aurora
    var test3 = document.querySelector('.tester3'),
          testerOffset_AUR = test3.offsetTop;
          console.log('ẢUR' , testerOffset_AUR) 
    var testerOffset1_AUR = testerOffset_AUR - 500;
    var testerOffset2_AUR = testerOffset_AUR - 290;
    var testerOffset3_AUR = testerOffset_AUR - 190;

    console.log('testerOffset2_AUR' , testerOffset2_AUR);
    var AuroraA = document.querySelector('.auroraA'),
          AuroraB = document.querySelector('.img-aurora--B'),
          AuroraC = document.querySelector('.auroraC');

         

    window.onscroll = function() {
        var window_pos = document.documentElement.scrollTop;
         if (window_pos >=navbar){
             console.log('test1');
             nav.classList.add("sticky"); 
             for (let i = 0; i < linkMenu.length; i++) {
                 linkMenu[i].classList.add('LinkSticky')
             }
         }
         else{
            console.log('test3');
             nav.classList.remove("sticky");
             for (let i = 0; i < linkMenu.length; i++) {
                linkMenu[i].classList.remove('LinkSticky')
            }
         }

    //  console.log('Scroll',window_pos)



    //=================JS hieu ung 
         
         
         if (testerOffset <= window_pos){
             picAbout.classList.add('Move')
             borderC2.classList.add('Move')
             picAbout.classList.remove('Re--move')
             borderC2.classList.remove('Re--move')
         }
         else{
            picAbout.classList.remove('Move')
            borderC2.classList.remove('Move')
            picAbout.classList.add('Re--move')
            borderC2.classList.add('Re--move')
         }
         if ( testerOffset2 <= window_pos){
            titleC2.classList.add('Move')
            text1C2.classList.add('Move')
            titleC2.classList.remove('Re--move')
            text1C2.classList.remove('Re--move')
         }
         else{
            titleC2.classList.remove('Move')
            text1C2.classList.remove('Move')      
            titleC2.classList.add('Re--move')
            text1C2.classList.add('Re--move')      
         }
        if  ( testerOffset3 <= window_pos){
            smallText1.classList.add('Move')
            smallText2.classList.add('Move')
            smallText1.classList.remove('Re--move')
            smallText2.classList.remove('Re--move')

        }
        else{
            smallText1.classList.remove('Move')
            smallText2.classList.remove('Move') 
            smallText1.classList.add('Re--move')
            smallText2.classList.add('Re--move')      

        }
        //----------quality
        if ( testerOffset1_Q <= window_pos ){
            text1BoxC3.classList.add('Move')
            text1BoxC3.classList.remove('Re--move')
            borderBox1.classList.add('Show')
            borderBox1.classList.remove('Re--show')
        }
        else{
            text1BoxC3.classList.remove('Move')
            text1BoxC3.classList.add('Re--move')
            borderBox1.classList.remove('Show')
            borderBox1.classList.add('Re--show')
        }
        if ( testerOffset2_Q <= window_pos ){
            borderBox2.classList.add('Show')
            borderBox2.classList.remove('Re--show')
            text2BoxC3.classList.add('Move')
            text2BoxC3.classList.remove('Re--move')
        }
        else{
            borderBox2.classList.remove('Show')
            borderBox2.classList.add('Re--show')
            text2BoxC3.classList.remove('Move')
            text2BoxC3.classList.add('Re--move')
        }
        if ( testerOffset3_Q <= window_pos ){
            text3BoxC3.classList.add('Move')
            text3BoxC3.classList.remove('Re--move')
            borderBox3.classList.add('Show')
            borderBox3.classList.remove('Re--show')
        }
        else{
            borderBox3.classList.remove('Show')
            borderBox3.classList.add('Re--show')
            text3BoxC3.classList.remove('Move')
            text3BoxC3.classList.add('Re--move')
        }
        //----------Aurora
        if ( testerOffset1_AUR <= window_pos ){
            AuroraA.classList.add('Move--1')
            AuroraA.classList.remove('Re--move--1')
        }
        else{
            AuroraA.classList.remove('Move--1')
            AuroraA.classList.add('Re--move--1')
        }
        if ( testerOffset2_AUR  <= window_pos ){
            AuroraB.classList.add('Show--1')
            AuroraB.classList.remove('Re--show--1')
        }
        else{
            AuroraB.classList.add('Show--1')
            AuroraB.classList.add('Re--show--1')
        }
        if ( testerOffset3_AUR <= window_pos ){
            AuroraC.classList.add('Move--1')  
            AuroraC.classList.remove('Re--move--1')

        }
        else{
            AuroraC.classList.remove('Move--1')  
            AuroraC.classList.add('Re--move--1')
        }
      // -------------------Menu con   | | Content 5
        var logoMenuCon = document.querySelector('.logo-menu-con'); 
        var MenuInfor = document.querySelector('.menu--infor');
        var menuBottom = document.querySelector('#menu--bottom') ,
            menuConOffset = menuBottom.offsetTop - 480;
            menuConOffset1 = menuBottom.offsetTop + 1600;

        var effect1 = document.querySelector('.effect1') ;
        var effect2 = document.querySelector('.effect2') ;
            
        var Content5 = document.querySelector('#content5'),
              c5Offset = Content5.offsetTop,
            c5Offset_1 =c5Offset - 500 ;
            c5Offset_2 =c5Offset - 380 ;
            // c5Offset_3 =c5Offset + 330 ;
        if (menuConOffset <= window_pos){
            logoMenuCon.classList.add('Show--1')
            logoMenuCon.classList.remove('Re--show--1')

        }
        else {
            logoMenuCon.classList.remove('Show--1')
            logoMenuCon.classList.add('Re--show--1')
        }
        if ( menuConOffset1 <= window_pos){
            MenuInfor.classList.remove('Re--show--1')
            MenuInfor.classList.add('Move--1')
        }
        else {
            MenuInfor.classList.remove('Move--1')
            MenuInfor.classList.add('Re--show--1')

        }
        if ( c5Offset_1<= window_pos ){
            effect1.classList.add('Show--1')
            effect1.classList.remove('Re--show--1')
        }
        else{
            effect1.classList.remove('Show--1')
            effect1.classList.add('Re--show--1')
        }
        if ( c5Offset_2 <= window_pos){
            effect2.classList.add('Show--1')
            effect2.classList.remove('Re--show--1')
        }
        else{
            effect2.classList.remove('Show--1')
            effect2.classList.add('Re--show--1')
        }





    }

    // =====================khi load tai chinh no 
    var windowScroll_1= document.documentElement.scrollTop;

    if ( windowScroll_1 >=navbar){
        console.log('test1');
        nav.classList.add("sticky"); 
        for (let i = 0; i < linkMenu.length; i++) {
            linkMenu[i].classList.add('LinkSticky')
        }
    }
    else{
       console.log('test3');
        nav.classList.remove("sticky");
        for (let i = 0; i < linkMenu.length; i++) {
           linkMenu[i].classList.remove('LinkSticky')
       }
    }

console.log(windowScroll_1)



//=================JS hieu ung 
    
if (testerOffset <= windowScroll_1){
    picAbout.classList.add('Move')
    borderC2.classList.add('Move')
    picAbout.classList.remove('Re--move')
    borderC2.classList.remove('Re--move')
}
else{
   picAbout.classList.remove('Move')
   borderC2.classList.remove('Move')
   picAbout.classList.add('Re--move')
   borderC2.classList.add('Re--move')
}
if ( testerOffset2 <= windowScroll_1){
   titleC2.classList.add('Move')
   text1C2.classList.add('Move')
   titleC2.classList.remove('Re--move')
   text1C2.classList.remove('Re--move')
}
else{
   titleC2.classList.remove('Move')
   text1C2.classList.remove('Move')      
   titleC2.classList.add('Re--move')
   text1C2.classList.add('Re--move')      
}
if  ( testerOffset3 <= windowScroll_1){
   smallText1.classList.add('Move')
   smallText2.classList.add('Move')
   smallText1.classList.remove('Re--move')
   smallText2.classList.remove('Re--move')

}
else{
   smallText1.classList.remove('Move')
   smallText2.classList.remove('Move') 
   smallText1.classList.add('Re--move')
   smallText2.classList.add('Re--move')      

}
//----------quality
if ( testerOffset1_Q <= windowScroll_1 ){
   text1BoxC3.classList.add('Move')
   text1BoxC3.classList.remove('Re--move')
   borderBox1.classList.add('Show')
   borderBox1.classList.remove('Re--show')
}
else{
   text1BoxC3.classList.remove('Move')
   text1BoxC3.classList.add('Re--move')
   borderBox1.classList.remove('Show')
   borderBox1.classList.add('Re--show')
}
if ( testerOffset2_Q <= windowScroll_1 ){
   borderBox2.classList.add('Show')
   borderBox2.classList.remove('Re--show')
   text2BoxC3.classList.add('Move')
   text2BoxC3.classList.remove('Re--move')
}
else{
   borderBox2.classList.remove('Show')
   borderBox2.classList.add('Re--show')
   text2BoxC3.classList.remove('Move')
   text2BoxC3.classList.add('Re--move')
}
if ( testerOffset3_Q <= windowScroll_1 ){
   text3BoxC3.classList.add('Move')
   text3BoxC3.classList.remove('Re--move')
   borderBox3.classList.add('Show')
   borderBox3.classList.remove('Re--show')
}
else{
   borderBox3.classList.remove('Show')
   borderBox3.classList.add('Re--show')
   text3BoxC3.classList.remove('Move')
   text3BoxC3.classList.add('Re--move')
}
//----------Aurora
if ( testerOffset1_AUR <= windowScroll_1 ){
   AuroraA.classList.add('Move--1')
   AuroraA.classList.remove('Re--move--1')
}
else{
   AuroraA.classList.remove('Move--1')
   AuroraA.classList.add('Re--move--1')
}
if ( testerOffset2_AUR  <= windowScroll_1 ){
   AuroraB.classList.add('Show--1')
   AuroraB.classList.remove('Re--show--1')
}
else{
   AuroraB.classList.add('Show--1')
   AuroraB.classList.add('Re--show--1')
}
if ( testerOffset3_AUR <= windowScroll_1 ){
   AuroraC.classList.add('Move--1')  
   AuroraC.classList.remove('Re--move--1')

}
else{
   AuroraC.classList.remove('Move--1')  
   AuroraC.classList.add('Re--move--1')
}
// -------------------Menu con   | | Content 5
var logoMenuCon = document.querySelector('.logo-menu-con'); 
var MenuInfor = document.querySelector('.menu--infor');
var menuBottom = document.querySelector('#menu--bottom') ,
   menuConOffset = menuBottom.offsetTop - 480;
   menuConOffset1 = menuBottom.offsetTop + 1600;

var effect1 = document.querySelector('.effect1') ;
var effect2 = document.querySelector('.effect2') ;
   
var Content5 = document.querySelector('#content5'),
     c5Offset = Content5.offsetTop,
   c5Offset_1 =c5Offset - 500 ;
   c5Offset_2 =c5Offset - 380 ;
   // c5Offset_3 =c5Offset + 330 ;
if (menuConOffset <= windowScroll_1){
   logoMenuCon.classList.add('Show--1')
   logoMenuCon.classList.remove('Re--show--1')

}
else {
   logoMenuCon.classList.remove('Show--1')
   logoMenuCon.classList.add('Re--show--1')
}
if ( menuConOffset1 <= windowScroll_1){
   MenuInfor.classList.remove('Re--show--1')
   MenuInfor.classList.add('Move--1')
}
else {
   MenuInfor.classList.remove('Move--1')
   MenuInfor.classList.add('Re--show--1')

}
if ( c5Offset_1<= windowScroll_1 ){
   effect1.classList.add('Show--1')
   effect1.classList.remove('Re--show--1')
}
else{
   effect1.classList.remove('Show--1')
   effect1.classList.add('Re--show--1')
}
if ( c5Offset_2 <= windowScroll_1){
   effect2.classList.add('Show--1')
   effect2.classList.remove('Re--show--1')
}
else{
   effect2.classList.remove('Show--1')
   effect2.classList.add('Re--show--1')
}







//------------------------------ --------- JS cho header--mobile

    var slides = document.querySelectorAll('.slide--header')   
    var numberOfSlides = slides.length;
    var slideNumber = 0;

    var playslider ;
    repeater = () => {
        playslider = setInterval(function(){
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active')                
            }
            slideNumber++;
            if (slideNumber > numberOfSlides-1){
                slideNumber = 0;
            }
            slides[slideNumber].classList.add('active')
        }, 3500)
    }
    repeater();






//------------------------------ ---------JS cho phần địa chỉ cửa hàng
    

})
