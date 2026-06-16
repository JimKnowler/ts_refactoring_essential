export class PriceCalculator {
    public calculateFinalPrice(product: Product): number {
        return product.calculateFinalPrice();
    }
}

export class Product {
    private readonly price: number;
    private readonly onSale: boolean;

    constructor(price: number, onSale: boolean) {
        this.price = price;
        this.onSale = onSale;
    }

    public calculateFinalPrice(): number {
        let price = this.price;

        if (this.onSale) {
            price = price * 0.8;
        }

        return price;
    }
}