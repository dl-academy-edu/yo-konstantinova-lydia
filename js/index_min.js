var popup=document.querySelector(".feedback__wrap"),popupBtn=document.querySelector(".btn-js"),closeBtn=document.querySelector(".close__btn"),submit=document.querySelector(".form__button"),checkbox=document.querySelector(".form_checkbox");popupBtn.addEventListener("click",function(){popup.classList.add("feedback__wrap_open")}),closeBtn.addEventListener("click",function(){popup.classList.remove("feedback__wrap_open")}),window.addEventListener("keydown",function(e){"Escape"===e.key&&popup.classList.contains("feedback__wrap_open")&&popup.classList.remove("feedback__wrap_open")}),checkbox.addEventListener("click",function(){checkbox.checked?submit.removeAttribute("disabled","disabled"):submit.setAttribute("disabled","disabled")});