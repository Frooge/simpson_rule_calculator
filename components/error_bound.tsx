import React from 'react'
import { MathJax } from 'better-react-mathjax';
import { derivative, parse, ceil, abs } from 'mathjs';
import AnswerComponent from '@/components/answer_component';

interface props {
    answerValue: number,
    minValue: number,
    maxValue: number,
    functionValue: string,
    epsilon: string,
}

export default function ErrorBound ({
    minValue, maxValue, functionValue, epsilon} : props
) {
    const a = minValue;
    const b = maxValue;
    const eps = parseFloat(epsilon);

    const findDerivatives  = () => {
        if(!functionValue) return;

        let derivs: string[] = [];
        let currentFunction: string = functionValue;
        for (let i = 0; i <= 3; i++) {
            derivs.push(derivative(currentFunction,'x').toString())
            currentFunction = derivs[i]
        }
        return derivs;
    }

    const findMaxValue = (f:string = functionValue) => {
        let M: number = 0;
        let fourth_deriv = derivative(derivative(derivative(derivative(functionValue,'x'),"x"),"x"),"x").toString();
        const xValues = [a,b]
        let value = xValues.map(x => abs(parse(fourth_deriv).evaluate({x:x})))
        return M = Math.max(...(value).filter(x => typeof x === 'number' && isFinite(x)));
    }

    const findN = (M: number) => {
        let N: number;
        N = parse(`((${M}*((${b}-${a})^5))/(180*${eps}))^(1/4)`).evaluate();
        return (N !== Infinity) ? N : NaN;
    }

    return (
        <div className='text-white text-[18px] flex flex-col space-y-6'>
        <MathJax inline>{`Here $a = ${a}, b=${b}, f(x) = ${functionValue}$`}</MathJax>
        <MathJax inline>{`Error Formula:  $bar{e} leq frac{M(b-a)^5}{180 n^4}$ `}</MathJax>
        <MathJax inline>{`Rearranging the variables gives: $n geq  4sqrt{frac{M(b-a)^5}{180 bar{e}}}$`}</MathJax>
        <MathJax inline>{`Where  $M$ is the maximum value of $|f^{(4)}(x)|$`}</MathJax>
        <div>Then, {
                findDerivatives()?.map((item,index,array) => (
                    <span key={index}>
                        <MathJax inline>{`$f^${index+1}(x) = ${item} ${index < array.length - 1 ? "," : " ."} $`}</MathJax>
                    </span>
                ))}
        </div>
        <MathJax inline>{`Therefore we set $M$ = $${findMaxValue()}$, since $|f^{(4)}(x)| leq$ $${findMaxValue()}$ for $${a}$ $leq x leq$ ${b}`}</MathJax>
        <MathJax inline>{`Solve for $n$,  $n geq  4sqrt{frac{${findMaxValue()}(${b}-${a})^5}{180(${eps})}} =  ${findN(findMaxValue())} = ${ceil(findN(findMaxValue()))}  $ iterations `}</MathJax>

        </div>
    )
}