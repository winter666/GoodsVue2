export default {

    toCurrency(price) {
        return new Intl.NumberFormat('ru-RU', {
            currency: 'rub',
            style: 'currency'
        }).format(price)
    },

    priceFormat(nominal) {
        let price = nominal * 75;
        return this.toCurrency(price);
    },
}
