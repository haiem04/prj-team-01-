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
            var MagOfSet = Mag.offsetTop;
            // MagOfSet = Number(MagOfSet);
            // windowGet = Number(windowGet);
            let calculate = MagOfSet - windowScroll;
            console.log('scroll', windowScroll)
            console.log('calculate' , calculate);
            if ( calculate < 535 ) {
                console.log('hello')
            }
//ảnh scale chữ trượt mờ 



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
              
 

          

    })