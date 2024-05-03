export function approximateIntegral(funcStr: string, aStr: string, bStr: string, n: number) {

    // Define the function from the string
    const func = replaceCaretWithDoubleStar(funcStr);
    const f = (x: number) => eval(func);
    const a = parseInt(aStr);
    const b = parseInt(bStr);

    if (n % 2 !== 0) {
        throw new Error("Number of subintervals must be even.");
    }

    const h = (b - a) / n;
    let integral = f(a) + f(b); // endpoints

    // Odd indexed points
    let oddSum = 0;
    for (let i = 1; i <= n; i += 2) {
        oddSum += f(a + i * h);
    }

    // Even indexed points
    let evenSum = 0;
    for (let i = 2; i <= n - 1; i += 2) {
        evenSum += f(a + i * h);
    }

    integral += 4 * oddSum + 2 * evenSum;
    integral *= h / 3;

    return integral;
}

export function replaceCaretWithDoubleStar(expression: string): string {
    return expression.replace(/\^/g, '**');
}



