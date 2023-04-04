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

const formSelect = document.querySelectorAll('select')

formSelect.forEach(fSelect => {
	let sValue = fSelect.value
	let sPlaceholder = fSelect.dataset.placeholder
	let sOptions = fSelect.querySelectorAll('option')
	
	let cSelect = document.createElement('div')
	let cSelectCurrent = document.createElement('div')
	let cSelectOptions = document.createElement('div')
	cSelect.classList.add('select')
	cSelectCurrent.classList.add('select-current')
	cSelectOptions.classList.add('select-options')

	let optionList = []

	sOptions.forEach(option => {
		optionList += `<button class="select-item" data-select-name="${option.value}">${option.textContent}</button>`
	});

	console.log(optionList);
})