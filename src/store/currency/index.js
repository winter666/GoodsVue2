export default {

    toCurrency(price) {
        return new Intl.NumberFormat('ru-RU', {
            currency: 'rub',
            style: 'currency'
        }).format(price)
    },

    priceFormat(nominal) {
        return this.toCurrency(nominal);
    }
}
