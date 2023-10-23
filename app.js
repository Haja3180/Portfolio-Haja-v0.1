//===== burger menu =====

const burgerButton = document.querySelector('.burger-container');
const nav = document.querySelector('nav');
const menuAllItems = document.querySelectorAll('.menu-items');
const contact = document.querySelector('.contact');

const switchDisplay = () => {
    burgerButton.classList.toggle('xify-burger');
    nav.classList.toggle('display-mobile-nav');
    return ;
}

burgerButton.addEventListener('click', switchDisplay);

if(window.matchMedia('(max-width:1300px)')){
    menuAllItems.forEach(item =>
        {
            item.addEventListener('click', switchDisplay)
    })
    contact.addEventListener('click', switchDisplay)
}

//===== Animation TypeWriter =====
let txtAnim = document.querySelector('.fields');

let typewriter = new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 5
})

typewriter
    .changeDelay(30)

    .typeString('<span style="color:#08a015; font-weihgt:bold">Pilotage de Projets Informatiques</span>')
    .pauseFor(500)
    .deleteChars(33)
    .pauseFor(500)

    .typeString('<span style="color:#08a015; font-weihgt:bold">Scrum Master</span>')
    .pauseFor(500)
    .deleteChars(12)
    .pauseFor(500)

    .typeString('<span style="color:#08a015; font-weihgt:bold">JIRA, Confluence</span>')
    .pauseFor(500)
    .deleteChars(16)
    .pauseFor(500)


    .typeString('<span style="color:#08a015; font-weihgt:bold">Product Owner</span>')
    .pauseFor(500)
    .deleteChars(13)
    .pauseFor(500)

    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Développement Web</span>')
    .pauseFor(500)
    .deleteChars(17)
    .pauseFor(500)

    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Front End : </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(255,0,0); font-weihgt:bold">HTML, </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">CSS, </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Javascript</span>')
    .pauseFor(500)
    .deleteChars(33)
    .pauseFor(500)

    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Back End : </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(255,0,0); font-weihgt:bold">PHP, </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">NodeJs</span>')
    .pauseFor(500)
    .deleteChars(22)
    .pauseFor(500)

    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Frameworks : </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(255,0,0); font-weihgt:bold">ReactJS, </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Bootstrap</span>')
    .pauseFor(500)
    .deleteChars(31)
    .pauseFor(500)

    .typeString('<span style="color:#08a015; font-weihgt:bold">CMS : </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Wordpress</span>')
    .pauseFor(500)
    .deleteChars(15)
    .pauseFor(500)


    .typeString('<span style="color:rgb(255,0,0); font-weihgt:bold">AMOA centres de contacts</span>')
    .pauseFor(500)
    .deleteChars(24)
    .pauseFor(500)

    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Genesys : </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Expertise fonctionnelle Routage, </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Supervision, </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Statistiques</span>')
    .pauseFor(500)
    .deleteChars(68)
    .pauseFor(500)

    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Solution multi-canal : </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">AKIO</span>')
    .pauseFor(500)
    .deleteChars(27)
    .pauseFor(500)

    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">Téléphonie : </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">OXE, </span>')
    .pauseFor(500)
    .typeString('<span style="color:rgb(0,0,255); font-weihgt:bold">CCS</span>')
    .pauseFor(500)
    .deleteChars(21)
    .pauseFor(500)

    .start()





















