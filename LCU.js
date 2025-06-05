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

    if (container_two.style.display === "block") {
        container_two.style.display = "none";
        document.body.style.overflow = "auto";
        document.body.classList.remove("dark-overlay");
        div_two.classList.remove("dark-overlay");
        MessageLoading.innerHTML = ''; // clear messages when container is closed
    } else {
        container_two.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.classList.add("dark-overlay");
        div_two.classList.add("dark-overlay");


        // this will be for the presenting message..
        const welcomeMessageCont = document.createElement('.div');
        welcomeMessageCont.classList.add('.message-box');
        const welcomeMessage = document.createElement('p');
        welcomeMessage.innerText = 'Hello Student, This is your chat assistance for 200L Software Eng.';
        welcomeMessageCont.appendChild(welcomeMessage);
        MessageLoading.appendChild(welcomeMessageCont);

        const assistanceMessageCont = document.createElement('div');
        assistanceMessageCont.classList.add('message-box');
        assistanceMessageCont.style.marginTop = '15px';
        const assistanceMessage = document.createElement('p');
        assistanceMessage.innerText = 'How may I be of assistance.';
        assistanceMessageCont.appendChild(assistanceMessage);
        MessageLoading.appendChild(assistanceMessageCont);

        MessageLoading.scrollTop = MessageLoading.scrollHeight;

    }
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



// this is too chnage the picture randomly on diff notes ...


const DivOne = document.querySelector('.div-one');
const ImgaesOne = [
    './Pictures/FOR_SCH/PLAY_ONE.png',
    './Pictures/FOR_SCH/PLAY_TWO.png',
    './Pictures/FOR_SCH/PLAY_THREE.png',
    './Pictures/FOR_SCH/PLAY_FOUR.png',
    './Pictures/FOR_SCH/PLAY_FIVE.png',

];
let currentImageIndex = 0;

setInterval(() => {
    DivOne.style.backgroundImage = `url(${ImgaesOne[currentImageIndex]})`;
    DivOne.style.backgroundRepeat = 'no-repeat';
    DivOne.style.backgroundPosition = '70% 20%';
    DivOne.style.backgroundSize = 'cover';

    currentImageIndex = (currentImageIndex + 1) % ImgaesOne.length;
}, 9000); // 3000 milliseconds = 9 seconds



// this is for the chat bot page... 
const DataGotten = document.querySelector('.input-one');
const ImgPlay = document.querySelector('.img-play-one');
const MessageLoading = document.querySelector('.message-container');

ImgPlay.addEventListener('click', () => {
    const InputedValue = DataGotten.value;
    const messageElement = document.createElement('p');
    messageElement.innerText = InputedValue;
    MessageLoading.appendChild(messageElement);
    DataGotten.value = ''; // clear the input field 
    MessageLoading.scrollTop = MessageLoading.scrollHeight; // this is for scrolling too the bottom of the message container 
});
