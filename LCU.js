// this is for the up end detectio...
const ForArrow = document.querySelector('.img_sec_last');


window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        ForArrow.classList.add('show');
    } else {
        ForArrow.classList.remove('show');
    }
});




/// this is for the down button container ...
function FirstContainer() {
    var container = document.querySelector(".play-one");
    container.style.display = container.style.display === "block" ? "none" : "block";
}




// this is for the second container....
function SecondContainer() {
    var container_two = document.querySelector(".play-two");
    var div_two = document.querySelector(".div-two");
    container_two.style.display = container_two.style.display === "block" ? "none" : "block";
    document.body.style.overflow = container_two.style.display === "block" ? "hidden" : "auto";
    document.body.classList.toggle("dark-overlay", container_two.style.display === "block");
    div_two.classList.toggle("dark-overlay", container_two.style.display === "block");

}

// this is for the chat backing seqeunce...
const backArrow = document.querySelector('.bit-img-one');
backArrow.addEventListener('click', () => {
    window.location.href = document.referrer;
});




// this is for the up arrow and down arrow function
const UpArrow = document.querySelector('.img_sec_last');
const DownArrow = document.querySelector('.img_sec_last_two');

//initially show the down arrow first..
DownArrow.style.display = 'block';



DownArrow.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    DownArrow.style.display = 'none';
    UpArrow.style.display = 'block';
});


UpArrow.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    UpArrow.style.display = 'none';
    DownArrow.style.display = 'block';
});

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        // At the bottom, show up arrow
        DownArrow.style.display = 'none';
        UpArrow.style.display = 'block';
    } else if (window.scrollY === 0) {
        // At the top, show down arrow
        UpArrow.style.display = 'none';
        DownArrow.style.display = 'block';
    } else {
        // You can add logic here if you want to show/hide arrows when not at top or bottom
    }
});




// this is for the login authentication code..

function checkLogin(url) {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        window.location.href = url;

    } else {
        window.location.href = `login.html?redirect=${encodeURIComponent(url)}`;
    }
}
