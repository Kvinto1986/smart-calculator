class SmartCalculator {
    constructor(initialValue) {
        this.signs = [];
        this.val = [];
        this.val.push(initialValue)
    }

    add(number) {
        this.signs.push('+');
        this.val.push(number);
        return this
    }

    subtract(number) {
        this.signs.push('-');
        this.val.push(number);
        return this
    }

    multiply(number) {
        this.signs.push('*');
        this.val.push(number);
        return this
    }

    devide(number) {
        this.signs.push('/');
        this.val.push(number);
        return this
    }

    pow(number) {
        this.signs.push('**');
        this.val.push(number);
        return this
    }

    valueOf() {

        while (this.signs.length > 0) {
            for (let i = 0; i < this.signs.length; i++) {
                if (this.signs[i] === '**' && this.signs[i + 1] !== '**') {
                    this.val[i] = Math.pow(this.val[i], this.val[i + 1]);
                    this.signs.splice(i, 1);
                    this.val.splice(i + 1, 1);
                    break

                }
                if (!this.signs.includes('**')) {
                    if (this.signs[i] === '*') {
                        this.val[i] = this.val[i] * this.val[i + 1];
                        this.signs.splice(i, 1);
                        this.val.splice(i + 1, 1);
                        break
                    }
                    if (this.signs[i] === '/') {
                        this.val[i] = this.val[i] / this.val[i + 1];
                        this.signs.splice(i, 1);
                        this.val.splice(i + 1, 1);
                        break
                    }
                }
                if (!this.signs.includes('**') && !this.signs.includes('*') && !this.signs.includes('/')) {

                    if (this.signs[i] === '+') {
                        this.val[0] += this.val[i + 1];
                        this.signs.splice(i, 1);
                        this.val.splice(i + 1, 1);
                        break
                    }
                    if (this.signs[i] === '-') {
                        this.val[0] -= this.val[i + 1];
                        this.signs.splice(i, 1);
                        this.val.splice(i + 1, 1);
                        break
                    }
                }
            }

        }

        return this.val[0];
    }
}
module.exports = SmartCalculator;
