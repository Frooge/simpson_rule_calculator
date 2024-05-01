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

  const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`


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
    <div className="flex flex-col space-y-2">
      <label htmlFor="function" className="text-lg font-semibold text-white">Function:</label>
      <input type="text" id="function" className="border border-gray-300 rounded-md p-2 text-black"
        placeholder="1/(x^5+7)^(1/3)" value={functionValue} onChange={(e) => setFunctionValue(e.target.value)} disabled={showAnswer}/>

      <label htmlFor="min" className="text-lg font-semibold text-white">Min:</label>
      <input type="text" id="min" className="border border-gray-300 rounded-md p-2 text-black"
        placeholder="0" value={minValue} onChange={(e) => setMinValue(e.target.value)} disabled={showAnswer}/>

      <label htmlFor="max" className="text-lg font-semibold text-white">Max:</label>
      <input type="text" id="max" className="border border-gray-300 rounded-md p-2 text-black"
        placeholder="1" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} disabled={showAnswer}/>

      <label htmlFor="subintervals" className="text-lg font-semibold text-black">Number of Subintervals:</label>
      <input type="number" id="subintervals" step={2} className="border border-gray-300 rounded-md p-2 text-black"
        placeholder="0" min={0} value={subintervalsValue} onChange={(e) => setSubintervalsValue(parseInt(e.target.value))} disabled={showAnswer}/>

      <div className="flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleCalculate}>Calculate</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={handleClearAll}>Clear All</button>
      </div>
      {showAnswer &&
        <AnswerComponent answerValue={answerValue} minValue={minValue} maxValue={maxValue} functionValue={functionValue} subintervalsValue={subintervalsValue}/>
      }
    </div>
  );
}
