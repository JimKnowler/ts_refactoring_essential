export class X1 {
    static m(lowerBound: number, upperBound: number): number {
        let p = 0;

        // Iterate from lower bound (q) to upper bound (z)
        for (let i = lowerBound; i <= upperBound; i++) {
            // Add square of each number in the range
            p += X1.square(i);
        }

        // Return accumulated sum
        return p;
    }

    static square(k: number): number {
        return k * k;
    }
}