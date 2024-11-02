const burger = document.querySelector('.burger-icon')
const headerInfo = document.querySelector('.header-info')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-icon_close')
  headerInfo.classList.toggle('header-info_active')
  body.style.overflow = body.style.overflow != 'hidden' ? 'hidden' : 'visible'
})