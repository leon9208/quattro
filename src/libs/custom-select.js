// const formSelect = document.querySelectorAll('select')

// formSelect.forEach(fSelect => {
// 	let sValue = fSelect.value
// 	let sPlaceholder = fSelect.dataset.placeholder
// 	let sOptions = fSelect.querySelectorAll('option')
	
// 	let optionItems = []

// 	sOptions.forEach(option => {
// 		optionItems += `<button class="select-item" type="button" data-select-name="${option.value}">${option.textContent}</button>`
// 	});

// 	let cSelect = `
// 		<div class="select">
// 			<button type="button" class="select-current">${sOptions[0].textContent}</button>
// 			<div class="select-options">
// 				${optionItems}
// 			</div>
// 		</div>
// 	`
// 	fSelect.insertAdjacentHTML("beforebegin", cSelect);
// })


// 	const customSelect = document.querySelectorAll('.select')

// 	customSelect.forEach(cs => {
// 		cs.addEventListener('click', () => {
// 			const isClosed = !cs.classList.contains("isopen");

// 			console.log(isClosed)
// 			isClosed === true ? cs.classList.add("isopen") : cs.classList.remove("isopen")
// 		})
// 	})


// !function customSelect() {
// 	const allSelect = document.querySelectorAll('select')
// 	// console.log(allSelect);

// 	allSelect.forEach(s => {
// 		let cSelectValue = s.value
// 		let cSelectLabel = s.getAttribute('data-select-label')
// 		let cSelectOptions = s.querySelectorAll('option')
// 		let cSelectOptionsItems = []

// 		cSelectOptions.forEach(el => {
// 			if (el.value != '') {
// 				cSelectOptionsItems += `<div class="select-custom__item" data-option-value="${el.value}">${el.textContent}</div>`
// 			}
// 		});

// 		let cSelect = `
// 			<div class="select-custom">
// 				${cSelectLabel ? `<div class="select-custom__label">${cSelectLabel}</div>` : ''}
// 				${cSelectLabel ? `<div class="select-custom__current"></div>` : `<div class="select-custom__current">${cSelectOptions[0].textContent}</div>`}
// 				<div class="select-custom__options">
// 					${cSelectOptionsItems}
// 				</div>
// 			</div>
// 		`
// 		s.insertAdjacentHTML("beforebegin", cSelect);
// 	})
// }();
const allSelect = document.querySelectorAll('select')

if (allSelect.length > 0) {
	allSelect.forEach(el => {
		el.outerHTML = `
			<div class="select">
				<div class="select-native">
					${el.outerHTML}
					${el.dataset.selectLabel != undefined && el.dataset.selectLabel ? `<div class="select-native__label">${el.dataset.selectLabel}</div>` : ''}
				</div>
			</div>
		`;
	})
}