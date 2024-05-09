'use client'

import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import Fraction from '@/utils/fraction';
import { parse } from 'mathjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface props {
  minValue: number,
  maxValue: number,
  functionValue: string,
  subintervalsValue: number,
}

export default function chart_component({minValue,maxValue,functionValue,subintervalsValue}:props) {
  const points = [11,25,3,50,1,19,100]

  const getIntervals = (): string[] => {
    const a = minValue;
    const b = maxValue;
    const x = new Fraction((b-a), subintervalsValue);

    let intervals: string[] = [];
    intervals.push(minValue.toString())
    
    let start = new Fraction(a).add(x);
    
    while(start.numerator/start.denominator !== maxValue) {
        intervals.push(start.toString());
        start = start.add(x);
    }
    
    intervals.push(maxValue.toString())

    return intervals;
}

const isFraction = (str:string):boolean => {
  const fractionPattern = /^-?\d+\/\d+$/;
  return fractionPattern.test(str);
}

const fractionToNumber = (fractionString: string): number => {
  const parts = fractionString.split('/');
  const numerator = parseInt(parts[0], 10);
  const denominator = parseInt(parts[1], 10);
  if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
  }
  return numerator / denominator;
}

const getPoints = (): number[] => {
    let arrayPoints: number[] = [];
    let intervals = getIntervals();

    for( let i = 0; i < intervals.length ; i++ ){
      let num: number;
      if(isFraction(intervals[i])){
        num = fractionToNumber(intervals[i])
      }else{
        num = parseInt(intervals[i])
      }
      let result = parse(functionValue).evaluate({x:num})
      arrayPoints.push(result);
    }
    return arrayPoints;
  }
  
const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        color: 'white', // Set color of y-axis labels to white
      },
      grid: {
        color: (context:any) => context.tick.value === 0 ? 'red' : 'rgba(0, 0, 0, 0.1)',
      },
    },
    x: {
      ticks: {
        color: 'white', // Set color of x-axis labels to white
      },
      grid: {
        color: (context:any) => context.tick.value === 0 ? 'red' : 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

 const data = {
  labels: getIntervals(),
  datasets: [
    {
      fill: true,
      label: `Simpson's Calculator`,
      data: getPoints(),
      borderColor: 'rgb(35,200,135)',
      backgroundColor: 'rgba(35,200,135,0.2)',
      tension: .4,
    },
  ],
};
  return (
    <Line data={data} options={options}></Line>
  )
}
