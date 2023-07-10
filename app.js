const searchIcon = document.getElementById('search-icon');
const inputField = document.getElementById('input');


// console.log(searchIcon);
searchIcon.addEventListener('click', () =>{
    inputField.classList.toggle('input');
    inputField.value = '';
});

inputField.addEventListener('focus',() =>{
    inputField.classList.add('input')
})