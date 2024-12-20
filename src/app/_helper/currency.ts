export class Currency {

    display(value) {
        const currencyValue = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value);
        return currencyValue;
    }
}
