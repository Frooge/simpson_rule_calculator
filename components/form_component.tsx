"use client"

import { approximateIntegral } from '@/utils/calculate';
import React, { useState } from 'react';

export default function FormComponent() {
  const [functionValue, setFunctionValue] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [subintervalsValue, setSubintervalsValue] = useState(0);
  const [answerValue, setAnswerValue] = useState(0.0);

  const handleCalculate = () => {
    const val = approximateIntegral(functionValue, minValue, maxValue, subintervalsValue)
    setAnswerValue(val);
  };

  const handleClearAll = () => {
    setFunctionValue('');
    setMinValue('');
    setMaxValue('');
    setSubintervalsValue(0);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="function" className="text-lg font-semibold text-black">Function:</label>
      <input type="text" id="function" className="border border-gray-300 rounded-md p-2 text-black"
        placeholder="1/(x^5+7)^(1/3)" value={functionValue} onChange={(e) => setFunctionValue(e.target.value)} />

      <label htmlFor="min" className="text-lg font-semibold text-black">Min:</label>
      <input type="text" id="min" className="border border-gray-300 rounded-md p-2 text-black"
        placeholder="0" value={minValue} onChange={(e) => setMinValue(e.target.value)} />

      <label htmlFor="max" className="text-lg font-semibold text-black">Max:</label>
      <input type="text" id="max" className="border border-gray-300 rounded-md p-2 text-black"
        placeholder="1" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} />

      <label htmlFor="subintervals" className="text-lg font-semibold text-black">Number of Subintervals:</label>
      <input type="number" id="subintervals" className="border border-gray-300 rounded-md p-2 text-black"
        placeholder="0" min={0} value={subintervalsValue} onChange={(e) => setSubintervalsValue(parseInt(e.target.value))} />

      <div className="flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleCalculate}>Calculate</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={handleClearAll}>Clear All</button>
      </div>

      <div>
        Answer: {answerValue}
      </div>
    </div>
  );
}
