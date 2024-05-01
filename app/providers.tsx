"use client"

import { MathJaxContext } from "better-react-mathjax";

export default function Providers({children}: {children: React.ReactNode}){
  const config = {
    "fast-preview": {
      disabled: true,
    },
    tex2jax: {
      inlineMath: [ ['$','$'], ["\\(","\\)"] ],
      displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
      processEscapes: true
    },
    messageStyle: "none",
  };
  
  return (
    <MathJaxContext
          version={2}
          config={config}
        >
      {children}
    </MathJaxContext>
  )

} 