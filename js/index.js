var popup = document.querySelector('.feedback__wrap')
var popupBtn = document.querySelector('.btn-js')
var closeBtn = document.querySelector('.close__btn')

popupBtn.addEventListener('click', function() {
    popup.classList.add('feedback__wrap_open')
})

closeBtn.addEventListener('click', function() {
    popup.classList.remove('feedback__wrap_open')
})

window.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && popup.classList.contains('feedback__wrap_open')) {
        popup.classList.remove('feedback__wrap_open')
    }
})
