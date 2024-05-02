"use client"

import { MathJaxContext } from "better-react-mathjax";

export default function Providers({children}: {children: React.ReactNode}){
  const config = {
    "fast-preview": {
      disabled: false,
    },
    tex2jax: {
      inlineMath: [ ['$','$'], ["\\(","\\)"] ],
      displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
      processEscapes: true
    },
    messageStyle: "none",
    loader: {load: ['input/asciimath']},
    asciimath: {
      delimiters: [['$','$'], ['`','`']]
    },
  };
  
  return (
    <MathJaxContext
          version={3}
          config={config}
          hideUntilTypeset="first"
        >
      {children}
    </MathJaxContext>
  )

} 