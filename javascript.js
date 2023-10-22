var cur = document.querySelector('#cursor');
var cur_blur = document.querySelector('#cursor-blur');

document.addEventListener("mousemove",(dets)=>{
    cur.style.left = dets.x + -13 +"px"
    cur.style.top = dets.y + -15 + "px"
    cur_blur.style.left = dets.x+ -120 +"px"
    cur_blur.style.top = dets.y+ -140 + "px"
})

var h4all =document.querySelectorAll('nav>.navbar>h4');
h4all.forEach((ele)=>{
    // console.log(ele);
    ele.addEventListener('mouseenter',()=>{
        cur.style.scale = 3;
        cur.style.border = "1px solid #95C11E";
        cur.style.backgroundColor = "transparent"
    })
    ele.addEventListener('mouseleave',()=>{
        cur.style.scale = 1;
        cur.style.border = "0px";
        cur.style.backgroundColor = "#95C11E"
    })
})



gsap.to("nav",{
    backgroundColor:"black",
    height:"9vh",
    duration:0.5,
    scrollTrigger:{
        trigger:'nav',
        scroller:'body',
        // markers:true
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to(".main-div",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main-div",
        scroller:"body",
        // markers:true
        start:"top -50%",
        end:"top -100vh",
        scrub:2
    }
})

gsap.from("#about-us>#abt-left,#abt-center,#abt-right",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:'#about-us',
        scroller:"body",
        // marker:true
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})

gsap.from(".card",{
    // y:90,
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:'.card',
        scroller:"body",
        marker:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        marker:true,
        start:"top 60%",
        end:"top 45%",
        scrub:1,
    }
})


gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        marker:true,
        start:"top 55%",
        end:"top 45%",
        scrub:1,
    }
})

gsap.from("#page4>h1",{
    y:-70,
    scrollTrigger:{
        trigger:"#page4>h1",
        scroller:"body",
        // marker:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2,
    }


})