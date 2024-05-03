import React from 'react'
import { MathJax } from 'better-react-mathjax';
import Fraction from '@/utils/fraction';
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
            intervals.push(start.toString());
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
                index = index+1;
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
        const funcStr = replaceCaretWithDoubleStar(f);
        const func = (x: number) => eval(funcStr);
        return func(x);
    }

    const assignFunction = (func: string, x: string | number) => {
        const replacedFunc = func.replace(/x/g, `(${x.toString()})`);
        return replacedFunc;
    }

  return (
    <div className='max-w-[800px]'>
        <MathJax>
            <div >
                <div className='text-2xl text-primary'>Solution:</div>
                <div>We have <MathJax inline>{`$f(x) = ${functionValue}, a = ${minValue}, b = ${maxValue}, and n = ${subintervalsValue}$`}</MathJax></div>
                <div>Therefore, <MathJax inline>{`$Delta x = (${maxValue} - ${minValue})/${subintervalsValue} = ${new Fraction(parseInt(maxValue)-parseInt(minValue),subintervalsValue).toString()}$`}</MathJax></div>
                <div>
                    Divide the interval <MathJax inline>{`$[${minValue}, ${maxValue}]$`}</MathJax> into <MathJax inline>{`$n = ${subintervalsValue}$`} </MathJax>
                    subintervals of the length <MathJax inline>{`$Delta x = ${parseInt(maxValue)-parseInt(minValue)}/${subintervalsValue}$`}</MathJax>
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
                    Finally, just sum up the above values and multiply by <MathJax inline>{`$(Delta x) / 3 = ${new Fraction(parseInt(maxValue)-parseInt(minValue), subintervalsValue).mul(new Fraction(1,3)).toString()}$`}</MathJax>
                </div>
                
                <div>We can get the answer of  <MathJax inline>{`$int_${minValue}^${maxValue} ${functionValue} dx approx ${answerValue}$`}</MathJax></div>
            </div>
        </MathJax>
    </div>
  )
}
