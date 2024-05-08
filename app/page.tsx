"use client"

import FormComponent from "@/components/form_component";
import { MathJax } from "better-react-mathjax";
import React, { useState } from 'react';

interface ExampleProps {
  func: string;
  mn: number;
  mx: number;
  n: number; 
  eps: string;
}

const ExampleComponent: React.FC<{example:ExampleProps}> = ({example}) => {
  return (
    <div className="flex flex-row justify-start items-center bg-primary text-sm p-4 h-[50px] ">
      <MathJax>{`$int_${example.mn}^${example.mx}  ${example.func} dx $`}</MathJax>
    </div>
  )
}

export default function Home() {
  const [selectedFunc, setSelectedFunc] = useState<ExampleProps> ({ func: '', mn: 0, mx: 0, n: 0, eps: '' });
  const examples: ExampleProps[] = [
    { func: 'x^3', mn: 0, mx: 1, n: 2, eps: '' },
    { func: '1/x^2', mn: 0, mx: 1, n: 0, eps: '0.001' },
    { func: '4/(1+x^2)', mn: 0, mx: 1, n: 4, eps: '' },
    { func: 'x^3+x^2+x', mn: 1, mx: 2, n: 8, eps: '' },
    { func: 'sqrt(x^2)', mn: 0, mx: 2, n: 8, eps: '' },
    // { func: 'e^(-x^2)', mn: -1, mx: 1, n: 8, eps: '' },
    { func: '1/x^2', mn: 1, mx: 2, n: 0, eps: '0.001' },
  ]

  return (
    <div>
   
      <div className="flex flex-row justify-center w-full max-w-7xl gap-6">
        <FormComponent {...selectedFunc}/>
        <div className="flex flex-row flex-wrap gap-2 w-full max-w-7xl my-2 self-start">
          <div>Examples:</div>
          <div className="flex flex-col gap-2">
              {
                examples.map((example, index) => (
                  <button key={index} onClick={() => setSelectedFunc(examples[index])}>
                    <ExampleComponent key={index} example={example}/>
                  </button>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  );
}
