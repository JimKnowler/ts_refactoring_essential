export class X1 {
    static m(lowerBound: number, upperBound: number): number {
        let p = 0;

        for (let i = lowerBound; i <= upperBound; i++) {
            p += X1.square(i);
        }

        // Return accumulated sum
        return p;
    }

    static square(k: number): number {
        return k * k;
    }
}