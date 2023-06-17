//accordion
const acc = document.querySelectorAll('.acc-item__head')

if(acc.length > 0) {
	acc.forEach(item => {
		item.addEventListener('click', () => {
			var parent = item.closest('.acc-item')
			if(parent.classList.contains('isopen')) {
				parent.classList.remove('isopen')
				item.nextElementSibling.style.maxHeight = 0;
			} else {
				parent.classList.add('isopen')
				item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px';
			};
		});
	});
};
