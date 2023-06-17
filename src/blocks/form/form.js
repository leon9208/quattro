//form
const formInputText = document.querySelectorAll('.form-input, .search-input')

formInputText.forEach(inp => {
	function inpFilled() {
		inp.value != '' ? inp.classList.add('isfilled') : inp.classList.remove('isfilled')
	}
	inp.addEventListener('input', inpFilled)
	inpFilled()
});

const inputPass = document.querySelectorAll('input[type=password]')

if (inputPass.length > 0) {
	inputPass.forEach(el => {
		let elParent = el.closest('.form-field')
		let elBtn = elParent.querySelector('.form-pass-btn')
		if(elBtn != null) {
			elBtn.addEventListener('click', () => {
				el.type != 'text' ? el.type = 'text' : el.type = 'password'
				elBtn.classList.contains('show') ? elBtn.classList.remove('show') : elBtn.classList.add('show')
			})
		}
	})
};

//custom select
const customSelect = (selector) => {
	const allSelects = document.querySelectorAll(selector)
	
	allSelects.forEach(nSelect => {
		let nOptions = nSelect.querySelectorAll('option');
		let result
		let checkLabel = () => {
			if (nOptions[0].value == "" && nOptions[0].getAttribute('selected') != null) {
				return `<div class="cs-select__label">${nOptions[0].textContent}</div>`
			} else {
				return '';
			}
		};

		nOptions.forEach(nItem => {
			let label = nItem.value === "" && nItem.selected === true
			if (!label) {
				result += `<div class="cs-select__item ${nItem.getAttribute('selected') != null ? 'selected' : ''}" data-value="${nItem.value}">${nItem.textContent}</div>`
			}
		});

		let cSelect = `	
				<div class="cs-select__container">
					<div class="cs-select__opener">
						${checkLabel()}
						<div class="cs-select__current"></div>
					</div>
					<div class="cs-select__list">${result.replace('undefined', '')}</div>
				</div>
		`
		nSelect.insertAdjacentHTML('beforebegin', cSelect);
	})
	
	const cSelect = document.querySelectorAll('.cs-select')

		cSelect.forEach(el => {
			let nativeSelect = el.querySelector('select')
			let cOpener = el.querySelector('.cs-select__opener')
			let cCurrent = el.querySelector('.cs-select__current')
			let cItems = el.querySelectorAll('.cs-select__item')

			cOpener.addEventListener('click', (e) => {
				e.stopPropagation()
				el.classList.contains('isopen') ? el.classList.remove('isopen') : el.classList.add('isopen')
			});


			const checkSelectItem = ((csItem) => {
				if (csItem.classList.contains('selected')) {
					nativeSelect.value = csItem.dataset.value
					cCurrent.textContent = csItem.textContent
					el.classList.add('ischanged')
				}
			})

			cItems.forEach(item => {
				item.addEventListener('click', (e) => {
					e.stopPropagation()
					cItems.forEach(item => { item.classList.remove('selected') })
					item.classList.add('selected')
					checkSelectItem(item)
					el.classList.remove('isopen')
				});
				checkSelectItem(item)
			})
		})
}

const formAmountBtn = document.querySelectorAll('.form__btn')

if(formAmountBtn) {
	formAmountBtn.forEach(item => {
		item.addEventListener('click', () => {
			let itemCount = item.dataset.count
			let formAmounInput = item.closest('.form').querySelector('.amount-input')

			if (formAmounInput) {
				formAmounInput.value = itemCount
			}
		})
	})
}


//End custom select