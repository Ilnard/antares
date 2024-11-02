const navigationSectionWrapper = document.querySelector('.navigation-map__svg-wrapper')
const navigationSection = document.querySelector('.navigation-map')
const navigationSvg = document.querySelector('svg')
const navigationSvgZoomPlus = document.querySelector('.navigation-map__zoom-btn_plus')
const navigationSvgZoomMinus = document.querySelector('.navigation-map__zoom-btn_minus')

// align bootiques name
function calculateFontSize(text, rectWidth, fontSize) {
    const textWidth = text.getBBox().width
    text.setAttribute('font-size', fontSize)
    if (textWidth + 10 > rectWidth) {
        fontSize--
        return calculateFontSize(text, rectWidth, fontSize)
    }
    else return fontSize
}

const gAll = navigationSvg.querySelectorAll('g')
gAll.forEach(gItem => {
    const rect = gItem.querySelector('rect')
    const text = gItem.querySelector('text')

    const rectParams = {
        x: Number(rect.getAttribute('x')),
        y: Number(rect.getAttribute('y')),
        width: Number(rect.getAttribute('width')),
        height: Number(rect.getAttribute('height'))
    }
    if (!text) return
    text.setAttribute('x', rectParams.x + (rectParams.width / 2))
    text.setAttribute('y', rectParams.y + (rectParams.height / 2))
    textSizes = text.getBBox()
    calculateFontSize(text, rectParams.width, 64)
})

// zoom
let zoom = 100
const zoomMax = 300
const zoomMin = 40
const zoomStep = 40

navigationSvgZoomPlus.addEventListener('click', () => {
    if (zoom + zoomStep > zoomMax) return
    zoom += zoomStep
    navigationSvg.style.height = zoom + '%'
    navigationSvg.style.width = zoom + '%'
    navigationSectionWrapper.scrollTop = navigationSectionWrapper.scrollHeight / 2 - navigationSectionWrapper.clientHeight / 2
    navigationSectionWrapper.scrollLeft = navigationSectionWrapper.scrollWidth / 2 - navigationSectionWrapper.clientWidth / 2
})
navigationSvgZoomMinus.addEventListener('click', () => {
    if (zoom - zoomStep < zoomMin) return
    zoom -= zoomStep
    navigationSvg.style.height = zoom + '%'
    navigationSvg.style.width = zoom + '%'
    navigationSectionWrapper.scrollTop = navigationSectionWrapper.scrollHeight / 2 - navigationSectionWrapper.clientHeight / 2
    navigationSectionWrapper.scrollLeft = navigationSectionWrapper.scrollWidth / 2 - navigationSectionWrapper.clientWidth / 2
})

// router
const boutiques = navigationSvg.querySelectorAll('.boutique')
const boutiqueModal = document.querySelector('.modal-boutique__wrapper')
boutiques.forEach(boutique => {
    boutique.addEventListener('click', () => {
        boutiques.forEach(boutique => {
            boutique.classList.remove('boutique_active')
        })
        boutique.classList.add('boutique_active')
        boutiqueModal.classList.add('modal-boutique__wrapper_active')
    })
})

// modal
const boutiqueCloseBtn = document.querySelector('.modal-boutique__close-btn')
boutiqueCloseBtn.addEventListener('click', () => {
    boutiqueModal.classList.remove('modal-boutique__wrapper_active')
})