import React from 'react'
import { MathJax } from 'better-react-mathjax';
import { Fraction } from 'fractional'
import { replaceCaretWithDoubleStar } from '@/utils/calculate';

interface props {
    answerValue: number,
    minValue: string,
    maxValue: string,
    functionValue: string,
    subintervalsValue: number,
}

export default function AnswerComponent(
    {
        answerValue,
        minValue, 
        maxValue, 
        functionValue,
        subintervalsValue
    }: props
) {
    const getIntervals = (): string[] => {
        const a = parseInt(minValue);
        const b = parseInt(maxValue);
        const x = new Fraction((b-a), subintervalsValue);

        let intervals: string[] = [];

        

        let start = new Fraction(a).add(x);

        while(start.toString() !== maxValue) {
            intervals.push(toStringFraction(start));
            start = start.add(x);
        }

        return intervals;
    }

    const getSolutions = (): string[] => {
        const a = parseInt(minValue);
        const b = parseInt(maxValue);
        const x = (b-a)/subintervalsValue;
        const intervals = getIntervals();

        let sub = 0;
        const solutions = [
            ...[`f(x_0) = f(${a}) = ${assignFunction(functionValue, a)} = ${solveFunction(a)}`],
            ...intervals.map((interval, index) => {
                console.log('hello')
                sub = index;
                const simpson = index%2 == 0 ? '4' : '2';
                const solution = `${simpson}f(x_${index}) = ${simpson}f(${interval}) = ${simpson} * ${assignFunction(functionValue, interval)} approx ${solveFunction(a+(x * (index+1)), `${simpson}*${functionValue}`)}`
                return solution
            }),
            ...[`f(x_${sub+1}) = f(${b}) = ${assignFunction(functionValue, b)} = ${solveFunction(b)}`]
        ]

        return solutions;
    }

    const solveFunction = (x: number, f: string = functionValue) => {
        console.log(f);
        const funcStr = replaceCaretWithDoubleStar(f);
        const func = (x: number) => eval(funcStr);
        return func(x);
    }

    const toStringFraction = (frac: Fraction) => {
        return `${frac.numerator}/${frac.denominator}`
    }

    const assignFunction = (func: string, x: string | number) => {
        const replacedFunc = func.replace(/x/g, `(${x.toString()})`);
        return replacedFunc;
    }

  return (
    <div>
       

        <MathJax>
            <div>
                Your Input:
                <div>Approximate the integral <MathJax inline>{ `$int_${minValue}^${maxValue} ${functionValue} dx$` }</MathJax> with <MathJax inline>{ `$n = ${subintervalsValue}$` }</MathJax></div> 
                Solution:
                <div>We have <MathJax inline>{`$f(x) = ${functionValue}, a = ${minValue}, b = ${maxValue}, and n = ${subintervalsValue}$`}</MathJax></div>
                <div>Therefore, <MathJax inline>{`$Delta x = (${maxValue} - ${minValue})/${subintervalsValue} = ${toStringFraction(new Fraction(parseInt(maxValue)-parseInt(minValue),subintervalsValue))}$`}</MathJax></div>
                <div>
                    Divide the interval <MathJax inline>{`$[${minValue}, ${maxValue}]$`}</MathJax> into <MathJax inline>{`$n = ${subintervalsValue}$`}</MathJax>
                    subintervals of the length <MathJax inline>{`$Delta x = ${parseInt(maxValue)-parseInt(minValue)}/${subintervalsValue}$`}</MathJax>
                    with the following endpoints:
                    <MathJax inline>{`$a = ${minValue}, ${getIntervals().join(', ')},${maxValue} = b$`}</MathJax> 
                </div>
                <div>Now, just evaluate the function at these endpoints:</div> 
                <div>
                    {getSolutions().map((solution) => (
                        <div>
                        <MathJax inline>{`$${solution}$`}</MathJax>
                        </div>
                    ))}
                </div>

                <div>
                    Finally, just sum up the above values and multiply by <MathJax inline>{`$(Delta x) / 3 = ${toStringFraction(new Fraction(parseInt(maxValue)-parseInt(minValue), subintervalsValue).multiply(new Fraction(1,3)))}$`}</MathJax>
                </div>
                
                <div>We can get the answer of  <MathJax inline>{`$int_${minValue}^${maxValue} ${functionValue} dx approx ${answerValue}$`}</MathJax></div>
            </div>
        </MathJax>
    </div>
  )
}
