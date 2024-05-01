import React from 'react'
import MathJax from 'react-mathjax2'
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
            ...[`f(x_0) = f(${a}) = ${toStringFraction(new Fraction(solveFunction(a)))} = ${solveFunction(a)}`],
            ...intervals.map((interval, index) => {
                sub = index;
                const simpson = index%2 == 0 ? '4' : '2';
                const solution = `${simpson}f(x_${index}) = ${simpson}f(${interval}) = ${toStringFraction(new Fraction(solveFunction(a+(x * (index+1)), `${simpson}*${functionValue}`)))} approx ${solveFunction(a+(x * (index+1)), `${simpson}*${functionValue}`)}`
                return solution
            }),
            ...[`f(x_${sub+1}) = f(${b}) = ${toStringFraction(new Fraction(solveFunction(b)))} = ${solveFunction(b)}`]
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

  return (
    <div>
       

        <MathJax.Context input='ascii'>
            <div>
                Your Input:
                <div>Approximate the integral <MathJax.Node inline>{ `int_${minValue}^${maxValue} ${functionValue} dx` }</MathJax.Node> with <MathJax.Node inline>{ `n = ${subintervalsValue}` }</MathJax.Node></div> 
                Solution:
                <div>We have <MathJax.Node inline>{`f(x) = ${functionValue}, a = ${minValue}, b = ${maxValue}, and n = ${subintervalsValue}`}</MathJax.Node></div>
                <div>Therefore, <MathJax.Node inline>{`Delta x = (${maxValue} - ${minValue})/${subintervalsValue} = ${toStringFraction(new Fraction(parseInt(maxValue)-parseInt(minValue)/subintervalsValue))}`}</MathJax.Node></div>
                <div>
                    Divide the interval <MathJax.Node inline>{`[${minValue}, ${maxValue}]`}</MathJax.Node> into <MathJax.Node inline>{`n = ${subintervalsValue}`}</MathJax.Node>
                    subintervals of the length <MathJax.Node inline>{`Delta x = ${parseInt(maxValue)-parseInt(minValue)}/${subintervalsValue}`}</MathJax.Node>
                    with the following endpoints:
                    <MathJax.Node inline>{`a = ${minValue}, ${getIntervals().join(', ')},${maxValue} = b`}</MathJax.Node> 
                </div>
                <div>Now, just evaluate the function at these endpoints:</div> 
                <div>
                    {getSolutions().map((solution) => (
                        <div>
                        <MathJax.Node inline>{solution}</MathJax.Node>
                        </div>
                    ))}
                </div>

                <div>
                    Finally, just sum up the above values and multiply by <MathJax.Node inline>{`(Delta x) / 3 = ${toStringFraction(new Fraction(parseInt(maxValue)-parseInt(minValue), subintervalsValue).multiply(new Fraction(1,3)))}`}</MathJax.Node>
                </div>
                
                <div>We can get the answer of  <MathJax.Node inline>{`int_${minValue}^${maxValue} ${functionValue} dx approx ${answerValue}`}</MathJax.Node></div>
            </div>
        </MathJax.Context>
    </div>
  )
}
