const modalWrappers = document.querySelectorAll('.modal-wrapper')
modalWrappers.forEach(modalWrapper => {
    const modalCloseBtn = modalWrapper.querySelector('.modal__close-btn')
    modalCloseBtn.addEventListener('click', () => {
        modalWrapper.classList.remove('modal-wrapper_active')
    })
})

// wc
const wcModalWrapper = document.querySelector('.modal-wrapper.wc')
const wcModalOpenBtn = document.querySelector('.modal__wc-open')

wcModalOpenBtn.addEventListener('click', () => {
    wcModalWrapper.classList.add('modal-wrapper_active')
})