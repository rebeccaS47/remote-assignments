//Request 1: Click to Change Text
const banner = document.querySelector('.banner');
banner.addEventListener('click', () => {
    document.querySelector('.banner-content').textContent = "Have a Good Time!";
});

//Request 2: Click to Show/Close Menu
const dropdown = document.querySelector('.dropdown');
const closebtn = document.querySelector('.closebtn');
dropdown.addEventListener('click', () => {
    document.querySelector('.dropdown-content').style.display = "block";
});
closebtn.addEventListener('click', (event) => {
    document.querySelector('.dropdown-content').style.display = "none";
    event.stopPropagation();
});

//Request 3: Click to Show More Content Boxes
const callbtn = document.querySelector('.callbtn');
callbtn.addEventListener('click', () => {
    document.querySelector('.hidcon').removeAttribute('style');
    //both work：document.querySelector('.hidcon').style.display = "flex";
});