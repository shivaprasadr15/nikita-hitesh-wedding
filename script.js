const landing = document.getElementById("landing");

const mainWebsite = document.getElementById("mainWebsite");

const button = document.getElementById("openInvitation");

const music = document.getElementById("bgMusic");

button.onclick = () => {

    music.play();

    landing.style.opacity = "0";

    landing.style.transition = "1s";

    setTimeout(() => {

        landing.style.display = "none";

        mainWebsite.style.display = "block";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },1000);

}

/* Countdown */

const wedding = new Date("August 3, 2026 12:30:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = wedding - now;

document.getElementById("days").innerHTML=Math.floor(distance/(1000*60*60*24));

document.getElementById("hours").innerHTML=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML=Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML=Math.floor((distance%(1000*60))/1000);

},1000);