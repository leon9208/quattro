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
					nativeSelect.dispatchEvent(new Event('change'))
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


const phoneCode = document.querySelector('.phone-code')
const phoneNum = document.querySelector('.phone-number')
const cardNum = document.querySelector('.card-number')
const cardHolder = document.querySelector('.card-holder')
const cardDate = document.querySelector('.card-date')
const amountInput = document.querySelector('.amount-input')
const phoneCodes = {
	// Russia +7 555 444 22 11
	'ru': [3,3,2,2],
	// Brasil +55 55 4444 3333
	'br': [2,4,4],
	// USA +1 555 444 3333
	'us': [3,3,4],
};

if (phoneCode) {
	var phoneMask = new Cleave(phoneNum, {
		delimiters: [' '],
		blocks: phoneCodes[phoneCode.value],
		numericOnly: true,
	});
	
	phoneCode.addEventListener('change', function() {
		phoneNum.value = ''
		phoneMask.properties.blocks = phoneCodes[this.value]
	});
};

if (cardNum) {
	var cardNumInp = new Cleave(cardNum, {
		creditCard: true,
	});
};

if (cardDate) {
	var cardDateInp = new Cleave(cardDate, {
		date: true,
		datePattern: ['m', 'y']
	});
};

if (cardHolder) {
	cardHolder.addEventListener('input', () => {
		cardHolder.value = cardHolder.value.replace(/[^A-Za-z ]/g, '').toUpperCase()
	})
};
// End input mask