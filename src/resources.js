export const getResources = (culture) => {
    let resp = {}
    let source = {}

    Object.assign(source, resources)
    Object.assign(resp, resources)

    Object.keys(source).map((k)=>(resp[k] = resources[k][culture]))

    return resp
}

const resources = {
    ok: { TR: 'Tamam', EN: 'Ok' },
    sort_priceDesc: { TR: 'Fiyata göre azalan', EN: 'Price high to low' },
    sort_priceAsc: { TR: 'Fiyata göre artan', EN: 'Price low to high' },
    sort_dateDesc: { TR: 'Eskiden yeniye', EN: 'Old to new' },
    sort_dateAsc: { TR: 'Yeniden eskiye', EN: 'New to old' },
    search: { TR: 'Ara', EN: 'Search' },
    all: { TR: 'Tümü', EN: 'All' },
    add: { TR: 'Ekle', EN: 'Add' },
    sorting: { TR: 'Sıralama', EN: 'Sorting' },
    tags: { TR: 'Etiketler', EN: 'Tags' },
    brands: { TR: 'Markalar', EN: 'Brands' },
    searchBrand: { TR: 'Marka ara', EN: 'Search brand' },
    searchTag: { TR: 'Etiket ara', EN: 'Search tag' },
    mug: { TR: 'Kupa', EN: 'Mug' },
    shirt: { TR: 'TShirt', EN: 'Shirt' },
    selectedProducts: { TR: 'Seçtiğiniz Ürünler', EN: 'Selected Products' },
    close: { TR: 'Kapat', EN: 'Close' },
    noProductsAdded: { TR: 'Henüz seçili ürününüz yok.', EN: 'You do not have any selected product yet.' },
    products: { TR: 'Ürünler', EN: 'Products' }
}