let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
/*функция при клике на меню розворачивается бутерброд (для мобильных)*/ 
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

const buttonUA = document.querySelector('.side_btn-ua');
const buttonEN = document.querySelector('.side_btn-en');
const allLang = ['en', 'ua']

buttonUA.addEventListener('click', changeURLLanguageUA);
buttonEN.addEventListener('click', changeURLLanguageEN);

// Перенаправляет URL с указанием языка
function changeURLLanguageUA(){
	let lang = buttonUA.value;
	location.href = window.location.pathname + '#'+lang;
}
function changeURLLanguageEN(){
	let lang = buttonEN.value;
	location.href = window.location.pathname + '#'+lang;
}

// Функции перевода
buttonUA.addEventListener('click', function() {
	hash = buttonUA.value
	for (let key in langland) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langland[key][hash];
		}
	}
});
buttonEN.addEventListener('click', function() {
	hash = buttonEN.value
	for (let key in langland) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langland[key][hash];
		}
	}
});