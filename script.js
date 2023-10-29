// $(document).ready(function () {
//     $(window).scroll(function () {
//         if($(window).scrollTop() < 30) {
//             $("header").css("background-color","transparent");
//         }
//    });
// });

// window.onload = function() {
//     if(window.scrollY==0){
//         const element = document.querySelector('header');
//         element.style.backgroundColor = 'transparent';
//     } else {
//         const element = document.querySelector('header');
//         element.style.backgroundColor = 'var(--darkmode-primary)';
//     }
// }

window.onscroll = function() {
    if(window.scrollY < 10){
        const element = document.querySelector('header');
        element.style.backgroundColor = 'transparent';
        document.documentElement.style.setProperty('--header-height', '12vh');
        document.documentElement.style.setProperty('--logo-height', '8vh');
        document.documentElement.style.setProperty('--font-size-header', '40px');
        document.documentElement.style.setProperty('--show-button-border', '#FFFFFF');
        document.documentElement.style.setProperty('--button-margin', '1.5rem');
    } else {
        const element = document.querySelector('header');
        element.style.backgroundColor = 'var(--darkmode-secondary)';
        document.documentElement.style.setProperty('--header-height', '8vh');
        document.documentElement.style.setProperty('--logo-height', '6vh');
        document.documentElement.style.setProperty('--font-size-header', '30px');
        document.documentElement.style.setProperty('--show-button-border', 'transparent');
        document.documentElement.style.setProperty('--button-margin', '1rem');
    }
}

window.onload = function() {
    let pan1 = document.getElementById('pan1');
    let pan2 = document.getElementById('pan2');
    let pan3 = document.getElementById('pan3');
    let pan4 = document.getElementById('pan4');

    function animate() {
        let { scrollY } = window;
    
        pan1.style.top = (23 + (-0.015 * scrollY)) + "vh";
        pan2.style.top = (60 + (-0.05 * scrollY)) + "vh";
        pan3.style.top = (18 + (-0.01 * scrollY)) + "vh";
        pan4.style.top = (270 + (-0.1 * scrollY)) + "vh";
    
        requestAnimationFrame(animate);
    }
    
    animate();
};

window.addEventListener("load", function() {
    const canvas = document.getElementById("canvas");
    canvas.width = 1200;
    canvas.height = 1200;

    const context = canvas.getContext("2d");
    const frameCount = 250;

    const currentFrame = (index) => `./render/${(index + 1).toString()}.png`;
    const images = [];
    let rend = {frame : 0};

    for(let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
    }

    gsap.to(rend, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: true,
            pin: "canvas",
            start: "-5%",
            end: "1000%",
            markers: false,
        },
        onUpdate: render,
    });

    gsap.fromTo('#text1', {opacity: 0}, {opacity: 1, scrollTrigger: {
        scrub: true,
        start: '30%',
        end: '60%',
        markers: false,
    },
        onComplete: () => {
            gsap.to('#text1', {opacity: 0, scrollTrigger: {
                scrub: true,
                start: '80%',
                end: '110%',
                markers: false,
            }})
        }
    });

    gsap.fromTo('#text2', {opacity: 0}, {opacity: 1, scrollTrigger: {
        scrub: true,
        start: '30%',
        end: '60%',
        markers: false,
        },
        onComplete: () => {
            gsap.to('#text2', {opacity: 0, scrollTrigger: {
                scrub: true,
                start: '80%',
                end: '110%',
                markers: false,
            }})
        }
    });

    gsap.fromTo('#text3', {opacity: 0}, {opacity: 1, scrollTrigger: {
        scrub: true,
        start: '120%',
        end: '150%',
        markers: false,
    },
        onComplete: () => {
            gsap.to('#text3', {opacity: 0, scrollTrigger: {
                scrub: true,
                start: '170%',
                end: '200%',
                markers: false,
            }})
        }
    });

    gsap.fromTo('#text4', {opacity: 0}, {opacity: 1, scrollTrigger: {
        scrub: true,
        start: '120%',
        end: '150%',
        markers: false,
    },
        onComplete: () => {
            gsap.to('#text4', {opacity: 0, scrollTrigger: {
                scrub: true,
                start: '170%',
                end: '200%',
                markers: false,
            }})
        }
    });

    gsap.fromTo('#text5', {opacity: 0}, {opacity: 1, scrollTrigger: {
        scrub: true,
        start: '210%',
        end: '260%',
        markers: false,
    },
        onComplete: () => {
            gsap.to('#text5', {opacity: 0, scrollTrigger: {
                scrub: true,
                start: '280%',
                end: '300%',
                markers: false,
            }})
        }
    });

    gsap.fromTo('#text6', {opacity: 0}, {opacity: 1, scrollTrigger: {
        scrub: true,
        start: '210%',
        end: '260%',
        markers: false,
    },
        onComplete: () => {
            gsap.to('#text6', {opacity: 0, scrollTrigger: {
                scrub: true,
                start: '280%',
                end: '300%',
                markers: false,
            }})
        }
    });

    gsap.fromTo('#text7', {opacity: 0}, {opacity: 1, scrollTrigger: {
        scrub: true,
        start: '300%',
        end: '350%',
        markers: false,
    },
        onComplete: () => {
            gsap.to('#text7', {opacity: 0, scrollTrigger: {
                scrub: true,
                start: '370%',
                end: '390%',
                markers: false,
            }})
        }
    });

    gsap.fromTo('#text8', {opacity: 0}, {opacity: 1, scrollTrigger: {
        scrub: true,
        start: '300%',
        end: '350%',
        markers: false,
    },
        onComplete: () => {
            gsap.to('#text8', {opacity: 0, scrollTrigger: {
                scrub: true,
                start: '370%',
                end: '390%',
                markers: false,
            }})
        }
    });

    console.log(images);

    images[0].onload = render;

    function render(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[rend.frame], 0, 0);
    }
});

// jQuery(document).ready(function() {
// // var rect = element.getBoundingClientRect();
// // console.log(rect.top, rect.right, rect.bottom, rect.left); 

//     var mouseX = 0, mouseY = 0;
//     var xp = 0, yp = 0;
    
//     $(document).mousemove(function(e){
//     mouseX = e.pageX - 35;
//     mouseY = e.pageY - 83;
//     });
    
//     setInterval(function(){
//     xp += ((mouseX - xp)/4);
//     yp += ((mouseY - yp)/4);
//     if (yp <= 3000) {
//     $("#blob").css({left: xp +'px', top: yp +'px'});
//     } else {
//     $("#blob").css({left: xp +'px', top: "12200px"});
//     }
//     }, 20);

// });