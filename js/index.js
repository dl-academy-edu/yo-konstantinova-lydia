var popup = document.querySelector('.feedback__wrap')
var popupBtn = document.querySelector('.btn-js')
var closeBtn = document.querySelector('.close__btn')
var submit = document.querySelector('.form__button');
var checkbox = document.querySelector('.form_checkbox')

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

checkbox.addEventListener('click', function () {
  if (checkbox.checked) {
    submit.removeAttribute('disabled', 'disabled');
  } 
  else {
    submit.setAttribute('disabled', 'disabled');
  }
});