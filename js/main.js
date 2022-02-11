// addEventListener('DOMContentLoaded', () => {
    
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
    // =============================REMOVE ON CLICK MENU=============================
    var removeActiveMenu = function(){
        document.querySelectorAll('nav ul li a').forEach( el => {
            el.addEventListener("click", () => {
                remove();
            })
        })
    }
    removeActiveMenu();

    //==============================SCROLLREVEAL==============================//

    const escroll = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1200,
    });
    escroll.reveal('.main');
    escroll.reveal('.about-principal', {origin : 'left'});
    escroll.reveal('.datos-personales', {origin : 'left'});
    escroll.reveal('.main-logos', {origin : 'left'});
    escroll.reveal('.about-imagen', {origin : 'right'});
    escroll.reveal('.contacto-content');
    escroll.reveal('.questions, .questions-item', {interval: 200});
    


    /* ==============================SCROLL NAV MENU============================== */
    function menuScrolled(){
                 
                 var scrollPosition = document.documentElement.scrollTop;
                 // console.log(scrollPosition);
                 if(scrollPosition>= 200){
                     document.querySelector('.menu').classList.add("menu-scrolled");
                 }else{
                     document.querySelector('.menu').classList.remove("menu-scrolled");
                 }       
                  
    };

    

    var removeAllActiveClasses = function(){
        document.querySelectorAll('li a').forEach( el => {
            el.classList.remove('active')
        })
    }
    /* ==============================SCROLL NAV MENU============================== */


/*==============================ACTIVE MENU==============================*/

    var addActiveClass = function(id){
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

            window.scroll({
            top: sectionPos,
            behavior: "smooth",
            });
        });
    });
    function secctionsValidate(){
        const sections = document.querySelectorAll('.seccion');
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
    }
    secctionsValidate();

/*==============================ACTIVE MENU==============================*/

 /*==============================SCROLL CIRCLE CHARTS==============================*/   
 function loadSkills(){
    var scrollPosition = document.documentElement.scrollTop;
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

     if(scrollPosition >= 1200 && scrollPosition <=2000){                       
         activeCircle();
     }else{
         removeCircle();
     }
 };      
    
/*==============================SCROLL CIRCLE CHARTS==============================*/ 

    

/*==============================ONSCROLL FUNCTIONS==============================*/ 
onscroll = function () {
       
        secctionsValidate();

        menuScrolled();
        
        loadSkills();

};


   

 
/*==============================ONSCROLL FUNCTIONS==============================*/ 
   
/*==============================ACTIVE MENU==============================*/
 



document.querySelectorAll('a[href^="#"]').forEach( e => {
    
    e.addEventListener("click", (ev) => {
        function goSection(){
            var currentId = ev.target.attributes.href.value;
            var section = document.querySelector(currentId);
            var sectionPos = section.offsetTop;
            
            window.scrollTo(window.scrollX, sectionPos - 80);

        };
        
        window.setTimeout (function(){
            goSection();
        }, 40);
    });
});

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.




                                        // =========================VALIDACION DE FORMULARIO========================== //

const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form div input')

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarForm = (e) => {
    switch (e.target.name){
        case "Nombre":
            if(expresiones.nombre.test(e.target.value) ){
                document.getElementById('nombre').classList.remove('check-false');
                document.getElementById('nombre').classList.add('check-true');
                document.getElementById('nombre').classList.remove('text-aviso');
            }else{
                document.getElementById('nombre').classList.add('check-false');
                document.getElementById('nombre').classList.remove('check-true');
                document.getElementById('nombre').classList.add('text-aviso');
            }

             
        break;

        case "e-mail":
            if(expresiones.correo.test(e.target.value) ){
                document.getElementById('correo').classList.remove('check-false');
                document.getElementById('correo').classList.add('check-true');
                document.getElementById('correo').classList.remove('text-aviso');
            }else{
                document.getElementById('correo').classList.add('check-false');
                document.getElementById('correo').classList.remove('check-true');
                document.getElementById('correo').classList.add('text-aviso');
            }
        
        break;

        case "Telefono":
            if(expresiones.telefono.test(e.target.value) ){
                document.getElementById('telefono').classList.remove('check-false');
                document.getElementById('telefono').classList.add('check-true');
                document.getElementById('telefono').classList.remove('text-aviso');
            }else{
                document.getElementById('telefono').classList.add('check-false');
                document.getElementById('telefono').classList.remove('check-true');
                document.getElementById('telefono').classList.add('text-aviso');
            }
        
        break;

        case "Empresa":
           if(e.target.value){
            document.getElementById('empresa').classList.remove('check-false');
            document.getElementById('empresa').classList.add('check-true');
            document.getElementById('empresa').classList.remove('text-aviso');
           }else{
    
            document.getElementById('empresa').classList.add('check-false');
            document.getElementById('empresa').classList.remove('check-true');
            document.getElementById('empresa').classList.add('text-aviso');
           }
        break;
    }
}
// formulario.addEventListener('submit', (e) =>{
//     e.preventDefault
// });
inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm)
    input.addEventListener('blur', validarForm)
    
});

// ==============QUESTION ACCORDION================//

const accordionItems = document.querySelectorAll('.questions-item');

accordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector('.questions-header');

    accordionHeader.addEventListener('click',()=>{
        const openItem =document.querySelector('.accordion-open')

        toggleItem(item);
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
    
});

const toggleItem = (item)=>{
    const accordionContent = item.querySelector('.question-content');

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        // accordionItems.style.border = 'border: 1px solid var(--verde-coral);';
        item.classList.add('accordion-open');
    }

}






                                                // =========================VALIDACION DE FORMULARIO========================== //



