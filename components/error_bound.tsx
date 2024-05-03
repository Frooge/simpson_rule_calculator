import React from 'react'
import { MathJax } from 'better-react-mathjax';
import { derivative } from 'mathjs';

interface props {
    answerValue: number,
    minValue: string,
    maxValue: string,
    functionValue: string,
    epsilon: string,
}

export default function ErrorBound ({
    minValue, maxValue, functionValue, epsilon} : props
) {



    return (
        <div className='text-white text-[18px]'>
        <div>Here <MathJax inline>{`$a = ${minValue}, b=${maxValue}, f(x) = ${functionValue}$`}</MathJax></div>
        <div>Error Formula for the Simpson&apos;s Rule: <MathJax inline>{`$ bar{e} leq frac{M(b-a)^5}{180 n^4}$`}</MathJax></div>
        </div>
    )
}