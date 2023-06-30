
export const setCurrenyValue = (value) => {
    const currencyFormater = new Intl.NumberFormat('en-EU', {
        style: 'currency',
        currency: 'EUR'
    })
    return currencyFormater.format(value);
}
