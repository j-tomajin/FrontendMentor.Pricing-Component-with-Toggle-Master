const price = document.querySelectorAll('.price-box')
const check = document.querySelector('.check')

check.addEventListener('click', () => {
    price.forEach(element => {
        element.classList.toggle('toggle')
    })
})
