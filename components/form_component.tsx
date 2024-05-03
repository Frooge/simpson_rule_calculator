"use client"

import { approximateIntegral } from '@/utils/calculate';
import React, { useState } from 'react';
import AnswerComponent from '@/components/answer_component';
import { MathJax } from 'better-react-mathjax';

export default function FormComponent() {
  const [functionValue, setFunctionValue] = useState('');
  const [minValue, setMinValue] = useState('0');
  const [maxValue, setMaxValue] = useState('1');
  const [epsilon, setEpsilon] = useState('');
  const [subintervalsValue, setSubintervalsValue] = useState(0);
  const [answerValue, setAnswerValue] = useState(0.0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showError, setError] = useState('');

  const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`;


  const handleCalculate = () => {
    if(functionValue && minValue && maxValue && subintervalsValue){
      const val = approximateIntegral(functionValue, minValue, maxValue, subintervalsValue)
      setAnswerValue(val);
      setShowAnswer(true);
      setError('');
    }else{
      setError('Please provide values before we can proceed calculating.')
    }
  };

  const handleClearAll = () => {
    setFunctionValue('');
    setMinValue('0');
    setMaxValue('1');
    setError('');
    setSubintervalsValue(0);
    setEpsilon('');
    setShowAnswer(false);
  };

  return (
    <>
    <div>
      <div className="flex flex-col space-y-2 p-4 bg-white shadow-lg text-sm min-w-[350px] top-[95px] sticky">
        <label htmlFor="function" className="text-md font-semibold text-dark_green">Function:</label>
        <input type="text" id="function" className="input-design"
          value={functionValue} onChange={(e) => setFunctionValue(e.target.value)} disabled={showAnswer} />
        <label htmlFor="min" className="text-md font-semibold text-dark_green">Min:</label>
        <input type="text" id="min" className="input-design"
           value={minValue} onChange={(e) => setMinValue(e.target.value)} disabled={showAnswer} />
        <label htmlFor="max" className="text-md font-semibold text-dark_green">Max:</label>
        <input type="text" id="max" className="input-design"
           value={maxValue} onChange={(e) => setMaxValue(e.target.value)} disabled={showAnswer}  />
        <div className='flex flex-row gap-2 items-center'>
          <div className={(epsilon) ? 'hidden': 'w-full'}>
            <label htmlFor="subintervals" className="text-md font-semibold text-dark_green">Enter Subintervals:</label>
            <input type="number" id="subintervals" step={2} className="input-design w-full"
               min={0} value={subintervalsValue}  onChange={(e) => setSubintervalsValue(parseInt(e.target.value))} disabled={showAnswer}/>
          </div>
          <div className={(subintervalsValue) ? 'hidden': 'w-full'}>
            <label htmlFor="epsilon" className="text-md font-semibold text-dark_green">Error Bound (Find n):</label>
            <input type="text" id="epsilon" className="input-design w-full" value={epsilon} onChange={(e) => setEpsilon(e.target.value)} disabled={showAnswer} />
          </div>
        </div>
           
        <div className="flex flex-col justify-between space-y-2">
          {showError && (<div className='text-red-600'>
            {showError}
          </div>)}
          <button className="bg-tertiary text-white px-4 py-2  hover:bg-dark_green w-full" onClick={handleCalculate}>Calculate</button>
          <button className="border-2 border-secondary px-4 py-2 text-secondary hover:text-white hover:bg-secondary w-full" onClick={handleClearAll}>Clear All</button>
        </div>
        {showAnswer && (
          <div className=' p-4 bg-dark_green transition-all ease-in-out'>Answer:  <MathJax inline>{`$int_${minValue}^${maxValue} ${functionValue} dx approx ${answerValue}$`}</MathJax></div>
      )}
      </div>
      
    </div>
    <div className="flex flex-col space-y-6 basis-full border-white border p-4"> 
    <div className='text-2xl text-primary self-center'><span className='font-normal'>Simpson&apos;s Rule: </span>Approximate the integral <MathJax inline>{ `$int_${minValue}^${maxValue} ${functionValue} \\  dx$` }</MathJax> 
    {
      epsilon && (
        <span> accurate within <MathJax inline>{ `$${epsilon}$` }</MathJax></span>
      )
    }
     {
      subintervalsValue !== 0 && (
        <span> with <MathJax inline>{ `$n = ${subintervalsValue}$` }</MathJax></span>
      )
    }
  </div>
      {showAnswer &&
      <div>
          <AnswerComponent answerValue={answerValue} minValue={minValue} maxValue={maxValue} functionValue={functionValue} subintervalsValue={subintervalsValue}/>
      </div>
      }
    </div>
    </>
    
  );
}
