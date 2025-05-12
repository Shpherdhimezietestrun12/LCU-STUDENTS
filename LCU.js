// this is for the up end detectio...
// const ForArrow = document.querySelector('.img_sec_last');


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
