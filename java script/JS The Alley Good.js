    window.addEventListener('load' , function() {


//================ Menu 
        var linkMenu = document.querySelectorAll('.link--menu');
        var logoBlackTopMenu = this.document.querySelector('.logo_black--menu');
        var logoWhiteTopMenu = this.document.querySelector('.logo_white--menu');
        var multiLanguage = document.querySelector('#show-option_language--menu');
        var multiMoney = this.document.querySelector('#show-option_money--menu');
        var numberShopping = document.querySelector('#number-shopping')
        var iconsMenu = document.querySelectorAll('.fas')
        var menu = document.querySelector('#menu');
        var menuTop = menu.offsetTop;
//******************************Menu khi không scroll nhưng load page tại vị trí chính nó */        
            var windowScroll = document.documentElement.scrollTop;
                if (windowScroll > 0){
                    console.log('hello')
                    menu.style.backgroundColor = '#fff';
                    for (let i = 0; i < linkMenu.length; i++) {
                        linkMenu[i].classList.add('textColor--menu')
                    }
                    logoWhiteTopMenu.classList.add('logoDisplayHide--menu')
                    logoBlackTopMenu.classList.add('logoDisplayShow--menu')
                    multiLanguage.classList.add('textColor--menu');
                    multiMoney.classList.add('textColor--menu');
                    for (let j = 0; j < iconsMenu.length; j++) {
                        iconsMenu[j].classList.add('textColor--menu')
                    }
                    numberShopping.classList.add('textColor--menu')
                }
                else{
                    menu.style.backgroundColor= '';
                    for (let i = 0; i < linkMenu.length; i++) {
                        linkMenu[i].classList.remove('textColor--menu')
                    }
                    logoWhiteTopMenu.classList.remove('logoDisplayHide--menu')
                    logoBlackTopMenu.classList.remove('logoDisplayShow--menu')
                    multiLanguage.classList.remove('textColor--menu');
                    multiMoney.classList.remove('textColor--menu');
                    for (let j = 0; j < iconsMenu.length; j++) {
                        iconsMenu[j].classList.remove('textColor--menu')
                    }
                    numberShopping.classList.remove('textColor--menu')
                }

                
//******************************MAG khi không scroll nhưng load page tại vị trí chính nó*/        
                    var Mag = document.querySelector('.MAG')
                    var titleMag = document.querySelector('.title--mag')
                    var textBoxMag = document.querySelectorAll('.text-box--mag')
                    var titleTextBox = document.querySelectorAll('.title_text-box')
                    var dateTextBox = document.querySelectorAll('.date_text-box')
                    var imgBoxMag = document.querySelectorAll('.img_box--mag')
                    var tester = document.querySelector('.tester--mag')
                    var testerOffSet = tester.offsetTop;
                    console.log('tester' , testerOffSet)
                    let calculate = testerOffSet - windowScroll;
                    if ( calculate < 350 ){
                        console.log('hello')
                        titleMag.classList.add('move--mag')
                        for (let i = 0 ; i < textBoxMag.length ; i++ ){
                        textBoxMag[i].classList.add('move--mag')
                        titleTextBox[i].classList.add('move--mag')
                        dateTextBox[i].classList.add('move--mag')
                        imgBoxMag[i].classList.add('scale-img--mag')
                        }
                        
                    }

//************************************** JS Footer khi không scroll nhưng load page tại vị trí chính nó

            var subscribe = document.querySelector('.subscribe'),
            subscribeOffSet = subscribe.offsetTop
            textSubscribe = document.querySelector('.text_subscribe');
            
       console.log('subscribeOffSet' , subscribeOffSet)
       if ( windowScroll > 1800){
           textSubscribe.classList.add('move--mag')
       }
            
       var OptionFt = document.querySelector('.option-money--footer')
       var showOptionFt = document.querySelector('.text-show--footer') 
       showOptionFt.addEventListener('click' , () => {
           if ( OptionFt.getAttribute('data-optionFt') === ''){
            OptionFt.classList.add('show')
            OptionFt.setAttribute('data-optionFt' , 'show')
           }
           else {
            OptionFt.setAttribute('data-optionFt' , '')
            OptionFt.classList.remove('show')
            
           }
       })





        window.onscroll = function(){
            var windowScroll = document.documentElement.scrollTop;
            if( windowScroll > menuTop ){
                menu.style.backgroundColor = '#fff';
                for (let i = 0; i < linkMenu.length; i++) {
                    linkMenu[i].classList.add('textColor--menu')
                }
                logoWhiteTopMenu.classList.add('logoDisplayHide--menu')
                logoBlackTopMenu.classList.add('logoDisplayShow--menu')
                multiLanguage.classList.add('textColor--menu');
                multiMoney.classList.add('textColor--menu');
                for (let j = 0; j < iconsMenu.length; j++) {
                    iconsMenu[j].classList.add('textColor--menu')
                }
                numberShopping.classList.add('textColor--menu')
            }
            else{
                menu.style.backgroundColor= '';
                for (let i = 0; i < linkMenu.length; i++) {
                    linkMenu[i].classList.remove('textColor--menu')
                }
                logoWhiteTopMenu.classList.remove('logoDisplayHide--menu')
                logoBlackTopMenu.classList.remove('logoDisplayShow--menu')
                multiLanguage.classList.remove('textColor--menu');
                multiMoney.classList.remove('textColor--menu');
                for (let j = 0; j < iconsMenu.length; j++) {
                    iconsMenu[j].classList.remove('textColor--menu')
                }
                numberShopping.classList.remove('textColor--menu')
            }

            //======================MAG       
            var Mag = document.querySelector('.MAG')
            var titleMag = document.querySelector('.title--mag')
            var textBoxMag = document.querySelectorAll('.text-box--mag')
            var titleTextBox = document.querySelectorAll('.title_text-box')
            var dateTextBox = document.querySelectorAll('.date_text-box')
            var imgBoxMag = document.querySelectorAll('.img_box--mag')
            var tester = document.querySelector('.tester--mag')
            var testerOffSet = tester.offsetTop;
            let calculate = testerOffSet - windowScroll;
            if ( calculate < 350 ){
                console.log('hello')
                titleMag.classList.add('move--mag')
                for (let i = 0 ; i < textBoxMag.length ; i++ ){
                textBoxMag[i].classList.add('move--mag')
                titleTextBox[i].classList.add('move--mag')
                dateTextBox[i].classList.add('move--mag')
                imgBoxMag[i].classList.add('scale-img--mag')
                }
                
            }
            console.log('scroll', windowScroll)
            //======================JS Footer 

            var subscribe = document.querySelector('.subscribe'),
                 subscribeOffSet = subscribe.offsetTop
                 textSubscribe = document.querySelector('.text_subscribe');
                 
            console.log('subscribeOffSet' , subscribeOffSet)
            if ( windowScroll > 1800){
                textSubscribe.classList.add('move--mag')
            }

    }   










            var showLanguage = document.querySelector('#show-option_language--menu');
            var choceLanguage = document.querySelector('.option_language--menu');

            var showMoney = document.querySelector('#show-option_money--menu');
            var choceMoney = document.querySelector('.option_money--menu');
        // ---------phương thức toggle
        //====== language 
            showLanguage.addEventListener('click' , function() {
                
                if (choceLanguage.getAttribute('data-show')===''){
                    choceLanguage.classList.add('show');
                    choceLanguage.setAttribute('data-show' , 'show')
                }
                else{
                    choceLanguage.setAttribute('data-show' , '')
                    choceLanguage.classList.remove('show');
                }                    
                choceMoney.setAttribute('data-show' , '')
                choceMoney.classList.remove('show');
            })

        //======== money
            showMoney.addEventListener('click' , function(){
                if (choceMoney.getAttribute('data-show')===''){
                    choceMoney.classList.add('show');
                    choceMoney.setAttribute('data-show' , 'show')
                }
                else {
                    // choceMoney.style.display = 'none';
                    // choceMoney.style.transition = '1s ease';
                    choceMoney.setAttribute('data-show' , '')
                    choceMoney.classList.remove('show');

                }
                choceLanguage.setAttribute('data-show' , '')
                choceLanguage.classList.remove('show');
            })
            
//==================Content 1            
                var next = document.querySelector('#next');
                var prev = document.querySelector('#prev');
        
                var slides = document.querySelectorAll('.slide')
        
                var numberOfSlides = slides.length;
                var slideNumber = 0;
                // console.log(numberOfSlides)
                
          // auto play 
          var playslider ;
        
          var repeater = () => {
              playslider = this.setInterval(function(){
                  for (let i = 0; i < slides.length; i++) {
                      slides[i].classList.remove('active')
                      
                  }
                  slideNumber++;
                  if (slideNumber > numberOfSlides - 1){
                      slideNumber = 0;
                  }
                  slides[slideNumber].classList.add('active');
              },4000)
          }
          repeater();
        
        
                // next 
                next.addEventListener('click' , () => {
        
                    for (let i = 0; i < slides.length; i++) {
                        slides[i].classList.remove('active')
                        
                    }
                    slideNumber++;
                    if (slideNumber > numberOfSlides - 1){
                        slideNumber = 0;
                    }
                    slides[slideNumber].classList.add('active');
        
                    console.log(slideNumber)
                    this.clearInterval(playslider);
                    repeater();
                })
        
                // prev 
                prev.addEventListener('click' , () => {
        
                    for (let i = 0; i < slides.length; i++) {
                        slides[i].classList.remove('active')
                        
                    }
                    slideNumber--;
                    if (slideNumber < 0 ){
                        slideNumber = numberOfSlides -1 ;
                    }
                    slides[slideNumber].classList.add('active');
                    this.clearInterval(playslider);
                    repeater();
        
                    console.log(slideNumber)
                })
              
 //===========================Responsive

 /**************Menu Mobile******** */
          
    var barMobile = document.querySelector('.navbar--mobile')
    var menuMobile = document.querySelector('.menu--mobile')
    var Overlay = document.querySelector('.overlay')
    const body = document.querySelector('body');
    var closeMenuMobile = document.querySelector('.btn--close')  
    var imgCloseMobile = document.querySelector('.img_btn--close')
    barMobile.addEventListener('click' , () => {
        Overlay.classList.add('moveOverlay-menu--mobile')
        menuMobile.classList.add('moveBar-menu--mobile')
        body.classList.add('body--overflow')
        closeMenuMobile.style.backgroundColor = ''
    })

    Overlay.addEventListener('click' , () => {
        Overlay.classList.remove('moveOverlay-menu--mobile')
        menuMobile.classList.remove('moveBar-menu--mobile')
        body.classList.remove('body--overflow')
        closeMenuMobile.style.backgroundColor = ''
    })

    closeMenuMobile.addEventListener('click' , () => {
        Overlay.classList.remove('moveOverlay-menu--mobile')
        menuMobile.classList.remove('moveBar-menu--mobile')
        body.classList.remove('body--overflow')
        closeMenuMobile.style.backgroundColor = 'rgb(180, 179, 179)'
    })
    closeMenuMobile.addEventListener('mouseover' , () => {
        imgCloseMobile.classList.add('HoverAnimaClose')
    })
    closeMenuMobile.addEventListener('mouseout' , () => {
        imgCloseMobile.classList.remove('HoverAnimaClose')
    })

    var languageMobile = document.querySelector('.language_menu--mobile')
    var boxLanguageMobile = document.querySelector('.box_language--mobile')
    var moneyMobile = document.querySelector('.money_menu--mobile')
    var boxMoneyMobile = document.querySelector('.box_money--mobile')
    languageMobile.addEventListener('click' , () =>{
        console.log('checked')
        if ( boxLanguageMobile.getAttribute('data-show--mobile') === ''  ){
            boxLanguageMobile.classList.add('ShowBoxLanguage')
            boxLanguageMobile.setAttribute('data-show--mobile' , ' Show')
        console.log('ok1')
        }
        else {
            boxLanguageMobile.classList.remove('ShowBoxLanguage')
            boxLanguageMobile.setAttribute('data-show--mobile' , '')
            console.log('ok2')
            
        }
       
    })

    moneyMobile.addEventListener('click' , () =>{
        console.log('checked')
        if ( boxMoneyMobile.getAttribute('data-show--mobile') === ''  ){
            boxMoneyMobile.classList.add('ShowBoxLanguage')
            boxMoneyMobile.setAttribute('data-show--mobile' , ' Show')
        console.log('ok1')
        }
        else {
            boxMoneyMobile.classList.remove('ShowBoxLanguage')
            boxMoneyMobile.setAttribute('data-show--mobile' , '')
            console.log('ok2')
            
        }
       
    })

    var searchMobile = document.querySelector('.search--mobile')
    var searchIcon = document.querySelector('#search--menu');
    var btnCloseSearch = document.querySelector('.btnclose--search')
    var overlay1 = document.querySelector('.overlay-1')
    searchIcon.addEventListener('click' , () =>{
        searchMobile.classList.add('ShowSearchBox')
        body.classList.add('body--overflow')
        overlay1.classList.add('MoveOverlay-1')
    })
    btnCloseSearch.addEventListener('click' , () =>{
        searchMobile.classList.remove('ShowSearchBox')
        body.classList.remove('body--overflow')
        overlay1.classList.remove('MoveOverlay-1')
    })
    overlay1.addEventListener('click' , () => {
        searchMobile.classList.remove('ShowSearchBox')
        body.classList.remove('body--overflow')
        overlay1.classList.remove('MoveOverlay-1')
    })
    btnCloseSearch.addEventListener('mouseover' , () => {
        btnCloseSearch.classList.add('HoverAnimaClose')
    })
    btnCloseSearch.addEventListener('mouseout' , () => {
        btnCloseSearch.classList.remove('HoverAnimaClose')
    })

    var shoppingMobile = document.querySelector('.shopping--mobile')
    var shoppingIcon = document.querySelector('#shopping--menu');
    var btnCloseShopping = document.querySelector('.btnclose--shop')

    shoppingIcon.addEventListener('click' , () =>{
        shoppingMobile.classList.add('ShowSearchBox')
        body.classList.add('body--overflow')
        overlay1.classList.add('MoveOverlay-1')
    })
    btnCloseShopping.addEventListener('click' , () =>{
        shoppingMobile.classList.remove('ShowSearchBox')
        body.classList.remove('body--overflow')
        overlay1.classList.remove('MoveOverlay-1')
    })
    overlay1.addEventListener('click' , () => {
        shoppingMobile.classList.remove('ShowSearchBox')
        body.classList.remove('body--overflow')
        overlay1.classList.remove('MoveOverlay-1')
    })
    btnCloseShopping.addEventListener('mouseover' , () => {
        btnCloseShopping.classList.add('HoverAnimaClose')
    })
    btnCloseShopping.addEventListener('mouseout' , () => {
        btnCloseShopping.classList.remove('HoverAnimaClose')
    })

    var loginMobile = document.querySelector('.login--mobile')
    var loginIcon = document.querySelector('#user--menu');
    var btnCloselogin = document.querySelector('.btnclose--login')

    loginIcon.addEventListener('click' , () =>{
        loginMobile.classList.add('ShowSearchBox')
        body.classList.add('body--overflow')
        overlay1.classList.add('MoveOverlay-1')
    })
    btnCloselogin.addEventListener('click' , () =>{
        loginMobile.classList.remove('ShowSearchBox')
        body.classList.remove('body--overflow')
        overlay1.classList.remove('MoveOverlay-1')
    })
    overlay1.addEventListener('click' , () => {
        loginMobile.classList.remove('ShowSearchBox')
        body.classList.remove('body--overflow')
        overlay1.classList.remove('MoveOverlay-1')
    })
    btnCloselogin.addEventListener('mouseover' , () => {
        btnCloselogin.classList.add('HoverAnimaClose')
    })
    btnCloselogin.addEventListener('mouseout' , () => {
        btnCloselogin.classList.remove('HoverAnimaClose')
    })


    // <!-- Initialize Swiper -->
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + ('') + "</span>";
          },
        },
      });


































    })