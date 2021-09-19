export default {
    currencyCoeff: 75,

    toCurrency(price) {
        return new Intl.NumberFormat('ru-RU', {
            currency: 'rub',
            style: 'currency'
        }).format(price)
    },

    priceFormat(nominal) {
        let price = nominal * this.currencyCoeff;
        return this.toCurrency(price);
    },

    setCurrencyCoeff(coeff) {
      this.currencyCoeff = coeff;
    },

    setCurrencyCoeffRand() {
        this.currencyCoeff = Math.floor(Math.random() * 80);
    }
}
