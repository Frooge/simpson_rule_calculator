import React from 'react'
import { MathJax } from 'better-react-mathjax';
import Fraction from '@/utils/fraction';
import { parse } from 'mathjs';

interface props {
    answerValue: number,
    minValue: number,
    maxValue: number,
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
        const a = minValue;
        const b = maxValue;
        const x = new Fraction((b-a), subintervalsValue);

        let intervals: string[] = [];
        
        let start = new Fraction(a).add(x);

        while(start.numerator/start.denominator !== maxValue) {
            intervals.push(start.toString());
            start = start.add(x);
        }

        return intervals;
    }

    const getSolutions = (): string[] => {
        const a = minValue;
        const b = maxValue;
        const x = (b-a)/subintervalsValue;
        const intervals = getIntervals();
        const rule = ['4', '2'];
        const calculations = allCalculations();

        let sub = 0;
        const solutions = [
            ...[`f(x_0) = f(${a}) = ${assignFunction(functionValue, a)} = ${calculations[0]}`],
            ...intervals.map((interval, index) => {
                const r = rule[index%2];
                index = index+1;
                sub = index;
                const solution = `${r}f(x_${index}) = ${r}f(${interval}) = ${r} * ${assignFunction(functionValue, interval)} approx ${calculations[index]}`
                return solution
            }),
            ...[`f(x_${sub+1}) = f(${b}) = ${assignFunction(functionValue, b)} = ${calculations[calculations.length-1]}`]
        ]

        return solutions;
    }

    const solveFunction = (x: number, f: string = functionValue) => {
        const evalue = parse(f).evaluate({x:x})
        return evalue;
    }

    const assignFunction = (func: string, x: string | number) => {
        const replacedFunc = func.replace(/x/g, `(${x.toString()})`);
        return replacedFunc;
    }

    const allCalculations = (): string[] => {
        const a = minValue;
        const b = maxValue;
        const x = (b-a)/subintervalsValue;
        const intervals = getIntervals();
        const rule = ['4', '2'];

        const calculations = [
            ...[solveFunction(a)],
            ...intervals.map((interval, index: number) => {
                const r = rule[index%2];
                index = index+1;
                return solveFunction(a+(x * (index)), `${r}*${functionValue}`)
            }),
            ...[solveFunction(b)]
        ]
        return calculations;
    }

  return (
    <div className='max-w-[800px]'>
        <MathJax>
            <div >
                <div className='text-2xl text-primary'>Solution:</div>
                <div className='text-md bg-primary p-4 my-4'>
            <MathJax>{`The formula for approximating areas using Simpson's rule is defined as follows: $S_n= frac{ Delta x}{3} left(f left(x_0 right)+4 f left(x_1 right)+2 f left(x_2 right)+4 f left(x_3 right)+2 f left(x_4 right)+ ldots+f left(x_n right) right)$`}</MathJax>
        </div>
                <div>We have <MathJax inline>{`$f(x) = ${functionValue}, a = ${minValue}, b = ${maxValue}, and n = ${subintervalsValue}$`}</MathJax></div>
                <div>Therefore, <MathJax inline>{`$Delta x = (${maxValue} - ${minValue})/${subintervalsValue} = ${new Fraction(maxValue-minValue,subintervalsValue).toString()}$`}</MathJax></div>
                <div>
                    Divide the interval <MathJax inline>{`$[${minValue}, ${maxValue}]$`}</MathJax> into <MathJax inline>{`$n = ${subintervalsValue}$`} </MathJax>
                    subintervals of the length <MathJax inline>{`$Delta x = ${maxValue-minValue}/${subintervalsValue}$`}</MathJax>
                    with the following endpoints:   
                    <div className='flex flex-wrap overflow-auto'>
                        <MathJax inline>{`$a = ${minValue}, ${getIntervals().join(', ')},${maxValue} = b$`}</MathJax> 
                    </div>
                </div>
                <div className='bg-primary p-4 my-4'>Now, just evaluate the function at these endpoints:</div> 
                <div>
                    {getSolutions().map((solution, index) => (
                        <div key={index + solution}>
                        <MathJax inline>{`$${solution}$`}</MathJax>
                        </div>
                    ))}
                </div>

                <div>
                    Finally, just sum up the above values and multiply by <MathJax inline>{`$(Delta x) / 3 = ${new Fraction(maxValue-minValue, subintervalsValue).mul(new Fraction(1,3)).toString()}$`}</MathJax>
                </div>
                <div className='overflow-auto'>
                    <MathJax inline>{`$=(${allCalculations().join('+')})*${new Fraction(maxValue-minValue, subintervalsValue).mul(new Fraction(1,3)).toString()}$`}</MathJax>
                </div>
                
                <div>We can get the answer of  <MathJax inline>{`$int_${minValue}^${maxValue} ${functionValue} \\ dx approx ${answerValue}$`}</MathJax></div>
            </div>
        </MathJax>
    </div>
  )
}
