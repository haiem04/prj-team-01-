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
    



//------------------------------ ---------JS cho phần sticky menu
    //*************var của menu ********* */

    var nav = document.getElementById('menu');
    var linkMenu = document.querySelectorAll('.link--menu');
    var navbar = nav.offsetTop ;

     //*************var của hiệu ứng scroll ********* */
     var tester = document.querySelector('.tester') ,
     testerOffset = tester.offsetTop;
     var testerOffset2 = testerOffset + 50 ;
     var testerOffset3 = testerOffset2 + 50 ;
     console.log('testerOffsett2' , testerOffset2)
     var picAbout = document.querySelector('.pic_content_2') ,
            borderC2 = document.querySelector('.border_content_2'),
            titleC2 = document.querySelector('.title_content_2'),
            text1C2 = document.querySelector('.text1_content_2'),
            smallText1 = document.querySelector('.small_1-text--C2'),
            smallText2 = document.querySelector('.small_2-text--C2');
            //------------quality
    var tester2 = document.querySelector('.tester2'),
          testerOffset_Q = tester2.offsetTop ;
          console.log('Q',  testerOffset_Q)
    var testerOffset1_Q = testerOffset_Q - 500 ; 
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
    var testerOffset2_AUR = testerOffset_AUR - 370;
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

     console.log('Scroll',window_pos)



    //=================JS hieu ung 
         
         
        //  if (testerOffset <= window_pos){
        //      picAbout.classList.add('Move')
        //      borderC2.classList.add('Move')
        //  }
        //  else{
        //     picAbout.classList.remove('Move')
        //     borderC2.classList.remove('Move')
        //  }
        //  if ( testerOffset2 <= window_pos){
        //     titleC2.classList.add('Move')
        //     text1C2.classList.add('Move')
        //  }
        //  else{
        //     titleC2.classList.remove('Move')
        //     text1C2.classList.remove('Move')            
        //  }
        // if  ( testerOffset3 <= window_pos){
        //     smallText1.classList.add('Move')
        //     smallText2.classList.add('Move')
        // }
        // else{
        //     smallText1.classList.remove('Move')
        //     smallText2.classList.remove('Move') 
        // }
        // //----------quality
        // if ( testerOffset1_Q <= window_pos ){
        //     text1BoxC3.classList.add('Move')
        //     borderBox1.classList.add('Show')
        // }
        // else{
        //     text1BoxC3.classList.remove('Move')
        //     borderBox1.classList.remove('Show')
        // }
        // if ( testerOffset2_Q <= window_pos ){
        //     borderBox2.classList.add('Show')
        //     text2BoxC3.classList.add('Move')
        // }
        // else{
        //     borderBox2.classList.remove('Show')
        //     text2BoxC3.classList.remove('Move')
        // }
        // if ( testerOffset3_Q <= window_pos ){
        //     text3BoxC3.classList.add('Move')
        //     borderBox3.classList.add('Show')
        // }
        // else{
        //     borderBox3.classList.remove('Show')
        //     text3BoxC3.classList.remove('Move')
        // }
        // //----------Aurora
        // if ( testerOffset1_AUR <= window_pos ){
        //     AuroraA.classList.add('Move--1')
        // }
        // else{
        //     AuroraA.classList.remove('Move--1')
        // }
        // if ( testerOffset2_AUR  <= window_pos ){
        //     AuroraC.classList.add('Move--1')  
        //     AuroraB.classList.add('Show--1')
        // }
        // else{
        //     AuroraC.classList.remove('Move--1')
        //     AuroraB.classList.remove('Show--1')
        // }

        //-------------------Menu con   | | Content 5
        // var logoMenuCon = document.querySelector('.logo-menu-con'); 
        // var MenuInfor = document.querySelector('.menu--infor');
        // var menuBottom = document.querySelector('#menu--bottom') ,
        //     menuConOffset = menuBottom.offsetTop + 150;
        // var effect1 = document.querySelector('.effect1') ;
        // var effect2 = document.querySelector('.effect2') ;
            
        // var Content5 = document.querySelector('#content5'),
        //       c5Offset = Content5.offsetTop,
        //     c5Offset_1 =c5Offset - 200 ;
        //     c5Offset_2 =c5Offset + 130 ;
        //     c5Offset_3 =c5Offset + 330 ;
        // if (menuConOffset <= window_pos){
        //     logoMenuCon.classList.add('Show--1')
        // }
        // else {
        //     logoMenuCon.classList.remove('Show--1')
        // }
        // if ( c5Offset_1 <= window_pos){
        //     MenuInfor.classList.add('Move--1')
        // }
        // else {
        //     MenuInfor.classList.remove('Move--1')
        // }
        // if ( c5Offset_2 <= window_pos ){
        //     effect1.classList.add('Show--1')
        // }
        // else{
        //     effect1.classList.remove('Show--1')
        // }
        // if ( c5Offset_3 <= window_pos){
        //     effect2.classList.add('Show--1')
        // }
        // else{
        //     effect2.classList.remove('Show--1')
        // }





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
    }
    else{
       picAbout.classList.remove('Move')
       borderC2.classList.remove('Move')
    }
    if ( testerOffset2 <= windowScroll_1){
       titleC2.classList.add('Move')
       text1C2.classList.add('Move')
    }
    else{
       titleC2.classList.remove('Move')
       text1C2.classList.remove('Move')            
    }
   if  ( testerOffset3 <= windowScroll_1){
       smallText1.classList.add('Move')
       smallText2.classList.add('Move')
   }
   else{
       smallText1.classList.remove('Move')
       smallText2.classList.remove('Move') 
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
