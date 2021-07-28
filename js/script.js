const btn = document.querySelector('.header-btn');
const popUp = document.querySelector('.popup');
let localStorageInput = document.querySelector('.popup-input');
let popUpBtn = document.querySelector('.popup-btn');
let btnForm = document.querySelector('.header-btn__form');

btn.addEventListener('click', ()=>{    
    btn.classList.toggle('header-btn1');
    if(btn.classList.contains('header-btn1')){
        btn.value = 'Выйти';
        btn.classList.remove('header-btn')
    }
    else {
        btn.value = 'Войти';
        btn.classList.add('header-btn')
    }
    btn.classList.add('header-btn1');
        popUp.classList.toggle('popup-visible');
        if(popUp.classList.contains('popup-visible')){        
            popUp.classList.remove('popup')
        }
        else {        
            popUp.classList.add('popup')
        }        
})

btn.addEventListener('click', ()=>{
    localStorageInput.value = localStorage.getItem('name');
})

popUpBtn.addEventListener('click', ()=>{    
    localStorage.setItem('name', localStorageInput.value);
    document.querySelector('.header-btn1').insertAdjacentHTML('beforebegin', `<p>${localStorageInput.value}</p>`);        
})

btnForm.addEventListener('click', ()=>{
    popUp.classList.toggle('popup-visible');
    if(popUp.classList.contains('popup-visible')){        
        popUp.classList.remove('popup')
    }
    else {        
        popUp.classList.add('popup')
    }    
})

