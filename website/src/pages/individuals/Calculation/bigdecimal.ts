export default class BigDecimal {
    bigint: bigint;
    static decimals: number = 10;

    constructor(value: string) {
        let [ints, decis] = value.split(".").concat("");
        decis = decis.padEnd(BigDecimal.decimals, "0");
        this.bigint = BigInt(ints + decis);
    }
    static fromBigInt(bigint: bigint): BigDecimal {
        return Object.assign(Object.create(BigDecimal.prototype), { bigint });
    }
    divide(divisor: BigDecimal) { // You would need to provide methods for other operations
        return BigDecimal.fromBigInt(this.bigint * BigInt("1" + "0".repeat(BigDecimal.decimals)) / divisor.bigint);
    }
    toString() {
        const s = this.bigint.toString().padStart(BigDecimal.decimals + 1, "0");
        return s.slice(0, -BigDecimal.decimals) + "." + s.slice(-BigDecimal.decimals)
            .replace(/\.?0+$/, "");
    }
}