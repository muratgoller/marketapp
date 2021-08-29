export const getSortTypesArray = () => {
    return Object.keys(sortTypes)
}

export const sortTypes = {
    priceAsc: 'priceAsc',
    priceDesc: 'priceDesc',
    dateAsc: 'dateAsc',
    dateDesc: 'dateDesc'
}