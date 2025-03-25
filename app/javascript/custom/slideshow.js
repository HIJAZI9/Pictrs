
let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");

let isStopped = false;
let isResume = false;
let currentSlideIndex = null;

// we need two variables , to store Runtime before Pause process
let startTime  = null; // to store the start time  , at which slides[slideIndex] the was shown
let endTime =  null;   // to store the time ,at which Space Button was pressed



function setTimer() {
    if(timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides();
function currentSlide(index) {
    slideIndex = index;
    showSlides();

}
function plusSlides(step) {

    if(step < 0) {
        slideIndex -= 2;
        if(slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
    }
    showSlides();
}
function handleKeyUp(event) {
    if (event.key === 'ArrowLeft') {   //click ArrowLeft Button to show next Slide
        setLeftIcon();
        slides[slideIndex - 1].style.display = "none";
        if (slideIndex === 1) {
            slideIndex = slides.length - 1;
            slides[slideIndex].style.display = "block";
        } else {
            slideIndex = slideIndex - 1;
            slides[slideIndex].style.display = "block";
            slideIndex--;
        }
        showSlides();
    }
    if (event.key === 'ArrowRight') {  //click ArrowRight Button to show next Slide
        setRightIcon();
        slides[slideIndex - 1].style.display = "none";
        if (slideIndex === slides.length) {
            slideIndex = 0;
            slides[slideIndex].style.display = "block";
        } else {
            slides[slideIndex].style.display = "block";
        }
        showSlides();
    }
    else if (event.key === ' ' && isStopped === false) { //click Space Button to pause current Slide
        endTime = new Date().getSeconds();
        isStopped = true;
        clearTimeout(timeoutId);
        currentSlideIndex = slideIndex - 1;
        setPlay();
        window.addEventListener('keydown',function (event) {
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                currentSlideIndex = null;
                isStopped = false;
            }
        })
    }
    else if (event.key === ' ' && isStopped === true && currentSlideIndex === slideIndex - 1){ //click Space Button to resume current Slide
        isResume = true;
        isStopped = false;
        const lostTime = Math.floor((endTime - startTime));
        var setTimerTime = 5 - lostTime;
        if (setTimerTime > 5 || setTimerTime < 0){ // ensure that Timer will only take 5 sec
            setTimerTime = 5
        }
        setPause();
        timeoutId = setTimeout(showSlides, setTimerTime * 1000);
    }
}

function setPause() {
    let notificationPause = document.getElementsByClassName("pause");

    notificationPause[0].style.display = 'block';

    setTimeout(function() {
        notificationPause[0].style.display = 'none';
    }, 300);
}
function setPlay() {
    let notificationPlay = document.getElementsByClassName("play");

    notificationPlay[0].style.display = 'block';

    setTimeout(function() {
        notificationPlay[0].style.display = 'none';
    }, 300);

}
function setRightIcon() {
    let notificationRight = document.getElementsByClassName("right");

    notificationRight[0].style.display = 'block';

    setTimeout(function() {
        notificationRight[0].style.display = 'none';
    }, 300);

}
function setLeftIcon() {
    let notificationLeft = document.getElementsByClassName("left");

    notificationLeft[0].style.display = 'block';

    setTimeout(function() {
        notificationLeft[0].style.display = 'none';
    }, 300);

}
function showSlides() {

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        //dots[i].classList.remove('active');
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    startTime = new Date().getSeconds();

    //dots[slideIndex - 1].classList.add('active');
    setTimer();

    window.addEventListener('keydown', handleKeyUp); //add an event listener to the global window object
    window.removeEventListener('keyup',handleKeyUp); //remove an event listener
}


