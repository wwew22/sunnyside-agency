const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn img');
const dropDownMenu = document.querySelector('.dropdown_menu');

const onMouseClick = function () {
    dropDownMenu.classList.toggle('open');
    dropDownMenu.addEventListener('click', () => {
        dropDownMenu.classList.toggle('open');
    });
}