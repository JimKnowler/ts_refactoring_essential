export class X1 {
    static m(q: number, z: number): number {
        let p = 0;

        // Iterate from lower bound (q) to upper bound (z)
        for (let i = q; i <= z; i++) {
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