// Підключення плагіна з node_modules
import SimpleBar from 'simplebar';
// Підключення стилів з node_modules
import 'simplebar/dist/simplebar.css';

// Додаємо до блоку атрибут data-simplebar

// Також можна ініціалізувати наступним кодом, застосовуючи налаштування
/*
if (document.querySelectorAll('[data-simplebar]').length) {
	document.querySelectorAll('[data-simplebar]').forEach(scrollBlock => {
		new SimpleBar(scrollBlock, {
			autoHide: false
		});
	});
}
*/