export default class Fraction {
    private _numerator: number;
    private _denominator: number; 

    get numerator() {
        return this._numerator;
    }

    get denominator() {
        return this._denominator;
    }

    public constructor(numerator: number | Fraction, denominator?: number) {
        if(denominator === undefined) {
            if(numerator instanceof Fraction) {
                const frac = numerator;
                this._numerator = frac._numerator;
                this. _denominator = frac._denominator;
            } else {
                this._numerator = numerator;
                this._denominator = 1;
            }
        } else {
            this._numerator = <number>numerator;
            this._denominator = denominator;
        }
        this._normalize();
    }

    private _clone() {
        return new Fraction(this._numerator, this._denominator);
    }

    private _rescale(factor: number) {
        this._numerator *= factor;
        this._denominator *= factor;
    }

    private _normalize() {
        const roundToPlaces = (n: number, places: number) => {
            if (!places) {
                return Math.round(n);
            } else {
                var scalar = Math.pow(10, places);
                return Math.round(n*scalar)/scalar;
            }
        }

        const makeString = (n: number) => {
            let ans = n.toString();
            if (ans.indexOf(".") === -1) {
                return ans  + ".0";
            }
            return ans;
        }

        const findGCF = (a: number, b: number) => {
            let c;
            a = Math.abs(a);
            b = Math.abs(b);
        
            while (b) {
                c = a % b;
                a = b;
                b = c;
            }
            return a;
        }

        if(this._denominator % 1 != 0) {
            const rounded = roundToPlaces(this._denominator, 9);
            const scaleup = Math.pow(10, makeString(rounded).split('.')[1].length);
            this._denominator = Math.round(this._denominator * scaleup);
            this._numerator *= scaleup;
        }
        if(this._numerator % 1 != 0) {
            const rounded = roundToPlaces(this._numerator, 9);
            const scaleup = Math.pow(10, makeString(rounded).split('.')[1].length);
            this._numerator = Math.round(this._numerator * scaleup);
            this._denominator *= scaleup;
        }
        const gcf = findGCF(this._numerator, this._denominator);
        this._numerator /= gcf;
        this._denominator /= gcf;
        if (this._denominator < 0) {
            this._numerator *= -1;
            this._denominator *= -1;
        }

        return this;
    }

    public toString() {
        return this._denominator === 1 ? this._numerator.toString() : `${this._numerator}/${this._denominator}`
    }

    public add(b: Fraction | number) {
        let a = this._clone();
        if(b instanceof Fraction) {
            b = b._clone();
        } else {
            b = new Fraction(b);
        }
        const td = a.denominator;
        a._rescale(b.denominator);
        a._numerator += b.numerator * td;

        return a._normalize();
    }
    
    public mul(b: Fraction | number): Fraction {
        let a = this._clone();
        if (b instanceof Fraction)
        {
            a._numerator *= b.numerator;
            a._denominator *= b.denominator;
        } else if (typeof b === 'number') {
            a._numerator *= b;
        } else {
            return a.mul(new Fraction(b));
        }
        return a._normalize();
    }
}