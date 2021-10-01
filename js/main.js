addEventListener('DOMContentLoaded', () => {

/* ==============================MENU RESPOSIVE==============================*/    
    var menu = document.querySelector('.menu-texto');
    var menuBtn = document.querySelector('.menu-btn');
    var closeBtn = document.querySelector('.close-btn');

    function remove(){
        menu.classList.remove('active');
    } 
    function add(){
        menu.classList.add('active');
    }

    closeBtn.addEventListener("click", () => {
        remove();
    });
    menuBtn.addEventListener("click", () => {
        add();
    });

    var removeActiveMenu = function(){
        document.querySelectorAll('nav ul li a').forEach( el => {
            el.addEventListener("click", () => {
                remove();
            })
        })
    }
    removeActiveMenu();

    //==============================SCROLLREVEAL==============================//

    ScrollReveal().reveal('.main');
    ScrollReveal().reveal('.about-content', {delay:400});
    ScrollReveal().reveal('.skills-content',{delay:400});
    /* let animacion = document.getElementsByClassName('.circle');
    animacion.style.animation = 'progress 2s ease-out forwards'; */
    
 


/*==============================ACTIVE MENU==============================*/

    const sections = document.querySelectorAll('.seccion');

/*==============================ONSCROLL FUNCTIONS==============================*/ 
    onscroll = function () {
        var scrollPosition = document.documentElement.scrollTop;
      
        sections.forEach((section) => {
          if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
            scrollPosition <
              section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
          ) {
            var currentId = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(currentId);
           
          }
        });

         /* ==============================SCROLL NAV MENU============================== */
        var scrollPosition = document.documentElement.scrollTop;
        console.log(scrollPosition);
        if(scrollPosition>= 200){
            document.querySelector('.menu').classList.add("menu-scrolled");
        }else{
            document.querySelector('.menu').classList.remove("menu-scrolled");
        }       
         /* ==============================-SCROLL NAV MENU==============================*/

        
        /*==============================SCROLL CIRCLE CHARTS==============================*/         
        var activeCircle = function(){
            document.querySelectorAll('.circle').forEach( el => {
                el.classList.add('active')
            })
        }
        var removeCircle = function(){
            document.querySelectorAll('.circle').forEach( el => {
                el.classList.remove('active')
            })
        }
         if(scrollPosition >= 1100){                       
             activeCircle();
         }else{
             removeCircle();
         }
        /*==============================SCROLL CIRCLE CHARTS==============================*/ 


       }
/*==============================ONSCROLL FUNCTIONS==============================*/ 
   
        var removeAllActiveClasses = function(){
            document.querySelectorAll('li a').forEach( el => {
                el.classList.remove('active')
            })
        }
        
        var addActiveClass = function(id){
            console.log(id)
            var selector = `li a[href="#${id}"]`;
            document.querySelector(selector).classList.add("active");
        }


        var navLinks = document.querySelectorAll("li a");

        navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            var currentId = e.target.attributes.href.value;
            var section = document.querySelector(currentId);
            var sectionPos = section.offsetTop;
            // section.scrollIntoView({
            //   behavior: "smooth",
            // });

            window.scroll({
            top: sectionPos,
            behavior: "smooth",
            });
    });
    });
/*==============================ACTIVE MENU==============================*/
   

 
       
});
