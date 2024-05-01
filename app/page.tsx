"use client"

import FormComponent from "@/components/form_component";
import { MathJax } from "better-react-mathjax";

export default function Home() {

  return (
      <div className="flex flex-row justify-center w-full max-w-7xl gap-6">
        <FormComponent/>
        <div className="flex flex-start basis-full bg-white"> 
        <MathJax className="text-dark_green">{'$f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi$'}</MathJax>
        </div>
      </div>
  );
}
