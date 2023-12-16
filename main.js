const button = document.querySelectorAll('.tab-button')

button.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active')
        const content = this.nextElementSibling
        const plusIcon = this.querySelector('.plus-icon')
        const minusIcon = this.querySelector('.minus-icon')

        if(content.style.maxHeight) {
            content.style.maxHeight = null
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        }
    })
})