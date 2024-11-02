const searchInput = document.querySelector('.catalog-search-field__input')
const searchBtn = document.querySelector('.catalog-search-field__btn')
const categoryInput = document.querySelector('.catalog-category__dropdown')
const emptyNotification = document.querySelector('.empty')

const filters = {
    search: '',
    category: 'все'
}

searchBtn.addEventListener('click', () => {
    filters.search = searchInput.value.toLowerCase()
    filterCatalog()
})

categoryInput.addEventListener('change', () => {
    filters.category = categoryInput.value.toLowerCase()
    filterCatalog()
})

const catalogItems = document.querySelectorAll('.catalog-card')
let filteredCatalogItems = []

function filterCatalog() {
    if (filters.search.length) {
        filteredCatalogItems = [...catalogItems].filter(catalogItem => {
            catalogItem.style.display = 'block'
            const catalogItemName = catalogItem.querySelector('.catalog-card__name').innerHTML.toLowerCase()
            if (!catalogItemName.includes(filters.search)) {
                catalogItem.style.display = 'none'
                return false
            }
            return true
        })
    }
    else {
        catalogItems.forEach(catalogItem => {
            catalogItem.style.display = 'block'
        })
        filteredCatalogItems = [...catalogItems]
    }
    if (!filters.category == 'все') {
        filteredCatalogItems = filteredCatalogItems.filter(catalogItem => {
            console.log(catalogItem.getAttribute('data-category'))
            console.log(filters.category)
            if (catalogItem.getAttribute('data-category').toLowerCase() != filters.category) {
                catalogItem.style.display = 'none'
                return false
            }
            return true
        })
    }
    if (!filteredCatalogItems.length) emptyNotification.style.display = 'flex'
    else emptyNotification.style.display = 'none'
}