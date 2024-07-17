
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navPart2 = document.querySelector('.navPart2');
    const logo = document.getElementById('logo');
  
    menuIcon.addEventListener('click', function() {
      navPart2.classList.toggle('show-menu');
      menuIcon.classList.toggle('hide-menu');
      logo.classList.toggle('hide');
    });
  });
  
  

var tl = gsap.timeline()

tl.from("header",{
    duration:1,
    delay:1,
    opacity:-0,
    stagger:0.5,
})

tl.from("#home-Page div",{
    y:100,
    opacity:0,
    stagger:0.5
})

tl.from("#about-Page h1",{
    y:100,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#about-Page h1",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})
tl.from("#about-Page .aboutMe",{
    y:100,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#about-Page .aboutMe",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})

tl.from("#skill-Page h1",{
    y:100,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#skill-Page h1",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})
tl.from("#skill-Page .skills",{
    y:100,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#skill-Page .skills",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})
tl.from("#project-Page h1",{
    y:100,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#project-Page h1",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})

tl.from("#project-Page .projects",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:"#project-Page .projects",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})
tl.from("#contact-loc",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#contact-loc",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})







