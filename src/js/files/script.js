// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const womanList = document.querySelector('.tabs__spec-list_woman');

document.querySelector('.add-spec__body_woman').addEventListener("submit", function (e) {
	e.preventDefault();

	if (!document.querySelector('.add-spec__inp-text_woman').value || document.querySelector('.add-spec__inp-text_woman').value == ' ') {
		e.target.reset();
	} else {
		womanList.insertAdjacentHTML('beforeend',
			`<li class="tabs__spec-item">${document.querySelector('.add-spec__inp-text_woman').value}</li >`);
	}
	e.target.reset();
});

const manList = document.querySelector('.tabs__spec-list_man');

document.querySelector('.add-spec__body_man').addEventListener("submit", function (e) {
	e.preventDefault();

	if (!document.querySelector('.add-spec__inp-text_man').value || document.querySelector('.add-spec__inp-text_man').value == ' ') {
		e.target.reset();
	} else {
		manList.insertAdjacentHTML('beforeend',
			`<li class="tabs__spec-item">${document.querySelector('.add-spec__inp-text_man').value}</li >`);
	}
	e.target.reset();
});