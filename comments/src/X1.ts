export class X1 {
    static m(lowerBound: number, upperBound: number): number {
        let accumulatedSum = 0;

        for (let i = lowerBound; i <= upperBound; i++) {
            accumulatedSum += X1.square(i);
        }

        return accumulatedSum;
    }

    static square(k: number): number {
        return k * k;
    }
}