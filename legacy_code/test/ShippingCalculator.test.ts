import { strict as assert } from "assert";
import {describe, it} from "node:test";
import {ShippingCalculator, IOrders, Order} from "../src/ShippingCalculator";

class FakeOrders implements IOrders {
    async fetch(orderId: number): Promise<Order> {
        switch (orderId)
        {
            case 1002:
                return {
                    "orderId":1002,
                    "shippingType":"EXPRESS",
                    "weightKg":8.5,
                    "distanceKm":300,
                    "fragile":true
                };
            case 1003:
                return {
                    "orderId":1003,
                    "shippingType":"OVERNIGHT",
                    "weightKg":2,
                    "distanceKm":50,
                    "fragile":false
                };
            case 1001:
            default:    
                return {
                    "orderId":1001,
                    "shippingType":"STANDARD",
                    "weightKg":5,
                    "distanceKm":120,
                    "fragile":false
                };
                
        }
    }
}

describe("ShippingCalculator", () => {
    const calculator = new ShippingCalculator(new FakeOrders());

    it("should calculate STANDARD shipping ", async () => {
        const result = await calculator.calculateShipping(1001);

        assert.equal(result, 2.5);
    });

    it("should calculate EXPRESS shipping", async () => {
        const result = await calculator.calculateShipping(1002);

        assert.equal(result, 36.8);
    });

    it("should calculate OVERNIGHT shipping", async () => {
        const result = await calculator.calculateShipping(1003);

        assert.equal(result, 27.4);
    });
});