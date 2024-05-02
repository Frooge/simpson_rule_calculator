"use client"

import { approximateIntegral } from '@/utils/calculate';
import React, { useState } from 'react';
import AnswerComponent from './answer_component';



export default function FormComponent() {
  const [functionValue, setFunctionValue] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [subintervalsValue, setSubintervalsValue] = useState(0);
  const [answerValue, setAnswerValue] = useState(0.0);
  const [showAnswer, setShowAnswer] = useState(false);

  const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`;


  const handleCalculate = () => {
    const val = approximateIntegral(functionValue, minValue, maxValue, subintervalsValue)
    setAnswerValue(val);
    setShowAnswer(true);
  };

  const handleClearAll = () => {
    setFunctionValue('');
    setMinValue('');
    setMaxValue('');
    setSubintervalsValue(0);
    setShowAnswer(false);
  };

  return (
    <>
    <div>
      <div className="flex flex-col space-y-2 p-4 bg-white shadow-lg text-sm min-w-[350px]">
        <label htmlFor="function" className="text-lg font-semibold text-dark_green">Function:</label>
        <input type="text" id="function" className="border border-gray-300 focus:outline-0 outline-2  p-2 text-black"
          placeholder="1/(x^5+7)^(1/3)" value={functionValue} onChange={(e) => setFunctionValue(e.target.value)} />
        <label htmlFor="min" className="text-lg font-semibold text-dark_green">Min:</label>
        <input type="text" id="min" className="border border-gray-300 focus:outline-0 outline-2  p-2 text-black"
          placeholder="0" value={minValue} onChange={(e) => setMinValue(e.target.value)} />
        <label htmlFor="max" className="text-lg font-semibold text-dark_green">Max:</label>
        <input type="text" id="max" className="border border-gray-300 focus:outline-0 outline-2  p-2 text-black"
          placeholder="1" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} />
        <label htmlFor="subintervals" className="text-lg font-semibold text-black">Number of Subintervals:</label>
        <input type="number" id="subintervals" step={2} className="border border-gray-300 focus:outline-0 outline-2  p-2 text-black"
          placeholder="0" min={0} value={subintervalsValue} onChange={(e) => setSubintervalsValue(parseInt(e.target.value))} />
        <div className="flex flex-col justify-between space-y-2">
          <button className="bg-tertiary text-white px-4 py-2  hover:bg-dark_green w-full" onClick={handleCalculate}>Calculate</button>
          <button className="border-2 border-secondary px-4 py-2 text-secondary hover:text-white hover:bg-secondary w-full" onClick={handleClearAll}>Clear All</button>
        </div>
      </div>
    </div>
    <div className="flex flex-start basis-full border-white border p-4"> 
      {showAnswer &&
        <AnswerComponent answerValue={answerValue} minValue={minValue} maxValue={maxValue} functionValue={functionValue} subintervalsValue={subintervalsValue}/>
      }
    </div>
    </>
    
  );
}
