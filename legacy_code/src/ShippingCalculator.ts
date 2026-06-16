type ShippingType = "STANDARD" | "EXPRESS" | "OVERNIGHT";

export interface Order {
    orderId: number;
    shippingType: ShippingType | string;
    weightKg: number;
    distanceKm: number;
    fragile: boolean;
}

export interface IOrders {
    fetch(orderId: number): Promise<Order>;
}

export class Orders implements IOrders {
    async fetch(orderId: number): Promise<Order> {
        const response = await fetch(
            `https://codemanship.co.uk/api/orders.php?orderId=${orderId}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const json = await response.json();
        const order: Order = json;

        return order;
    }
}

export class ShippingCalculator {
    private orders: IOrders;

    constructor(orders: IOrders) {
        this.orders = orders;
    }

    async calculateShipping(orderId: number): Promise<number> {
        try {
            const order = await this.orders.fetch(orderId);

            switch (order.shippingType) {
                case "STANDARD":
                    return order.weightKg * 0.5;

                case "EXPRESS":
                    return order.weightKg * 0.8 + order.distanceKm * 0.1;

                case "OVERNIGHT":
                    return order.weightKg * 1.2 + 25;

                case "INTERNATIONAL":
                    return order.weightKg * 1.5;

                default:
                    throw new Error(`Unknown shipping type: ${order.shippingType}`);
            }

        } catch (e) {
            console.log(e);
            return -1;
        }
    }
}