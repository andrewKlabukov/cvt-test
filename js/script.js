const loginButton = document.querySelector('#popup-in')
const popUp = document.querySelector('.popup');
const popUpBtn = document.querySelector('.popup-btn')
const loginInput = document.querySelector('.popup input')
const passwordInput = document.querySelector('.popup [type=password]')
const rememberMeLabel = document.querySelector('[for=checkbox-1]')
const rememberMeCheckbox = document.querySelector('[type=checkbox]')
// let localstorageLogin = localStorage.getItem('login')
// let localStoragePass = localStorage.getItem('password')
// let isLoggedIn = false

// Событие на чекбоксе
rememberMeLabel.addEventListener('click', event => {
    let isChecked = rememberMeCheckbox.getAttribute('checked')
    if (isChecked) rememberMeCheckbox.removeAttribute('checked')
    else {
        rememberMeCheckbox.setAttribute('checked', 'checked')
        localStorage.removeItem('login')
        localStorage.removeItem('password')
    }
})

// Событие на кнопке поп ап
popUpBtn.addEventListener('click', event => {
    const loginValue = loginInput.value.trim()
    const passwordValue = passwordInput.value.trim()
    // Убираем пробелы логина и пароля
    if(!loginValue || !passwordValue){
        alert('логин и пароль должны быть заполнены!')
        return
    }
    // Проверка на длинну логина
    if(loginValue.length < 3){
        alert('Слишком короткий логин!')
    }
    // Проверка на длинну пароля
    if(passwordValue.length < 7){
        alert('Слишком короткий пароль!')
    }
    // Проверка если чекбокс checked сохраняем логин и пароль в localStorage
    if(rememberMeCheckbox.checked){
        localStorage.setItem('login', loginValue)
        localStorage.setItem('password', passwordValue)        
    } else {
        alert('Нужно поставить галочку чтобы сохранить логин и пароль')
        localStorage.removeItem('login')
        localStorage.removeItem('password')
    }    
    
    document.querySelector('.header-btn').insertAdjacentHTML('beforebegin', `<p class="user-name">${localStorage.getItem('login')}</p>`);
    hideModal();    
})

// Событие на кнопке регистрации
loginButton.addEventListener('click', event => {    
    isLogedIn();
    showModal();
    isLoggedOut();
    loginInput.value = localStorage.getItem('login');  
    passwordInput.value = localStorage.getItem('password');  
})

function isLogedIn(event) {
    loginButton.classList.toggle('header-btn1')
    if (loginButton.classList.contains('header-btn1')){
        loginButton.value = 'выйти';
    }
}

function isLoggedOut(event) {   
    console.log('exit')
    if (!loginButton.classList.contains('header-btn1')){
        loginButton.value = 'войти';
        hideModal();
        document.querySelector('.user-name').remove();
    }    
}

// Функция добавляет убирает класс поп апу
function showModal() {
    popUp.classList.add('popup')
    popUp.classList.add('popup-visible')
    console.log('in')
}

// Функция 
function hideModal() {
    popUp.classList.remove('popup-visible')
    console.log('out')
}