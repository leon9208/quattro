// collapse content
var collapseContent = document.querySelectorAll('.collapse')

if(collapseContent.length > 0) {
	collapseContent.forEach(collapse => {
		let collapseBtn = collapse.querySelector('.collapse-btn')
		let collapseBtnFirstText = collapseBtn.textContent
		let collapseBtnLastText = collapseBtn.getAttribute('data-text')

		collapseBtn.addEventListener('click', ()=> {
			collapse.classList.toggle('isopen')
			collapse.classList.contains("isopen") ? collapseBtn.textContent = collapseBtnLastText : collapseBtn.textContent = collapseBtnFirstText
		})
	})
};

// END collapse content


const formInputText = document.querySelectorAll('.form-input')

formInputText.forEach(inp => {
	inp.addEventListener('blur', () => {
		inp.value != '' ? inp.classList.add('isfilled') : inp.classList.remove('isfilled')
	})
});