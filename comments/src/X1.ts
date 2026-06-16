export class X1 {
    static sumOfSquares(lowerBound: number, upperBound: number): number {
        let accumulatedSum = 0;

        for (let i = lowerBound; i <= upperBound; i++) {
            accumulatedSum += i * i;
        }

        return accumulatedSum;
    }
}