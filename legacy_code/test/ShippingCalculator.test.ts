import { strict as assert } from "assert";
import {describe, it} from "node:test";
import {ShippingCalculator} from "../src/ShippingCalculator";

describe("ShippingCalculator", () => {
    const calculator = new ShippingCalculator();

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