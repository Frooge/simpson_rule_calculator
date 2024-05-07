"use client"
import { MathJax } from "better-react-mathjax";
import React, { useState } from 'react';
import Image from 'next/image'

export default function Guide() {
  return (
    <div>
      <div className="flex flex-row justify-center w-full max-w-7xl gap-6">
        <div className="flex flex-row bg-tertiary flex-wrap gap-2 w-full max-w-7xl my-2 self-start">
          <div className="container mx-auto w-5/6" >
            <div className="container my-6 w-5/6 text-2xl font-bold font-serif">HISTORY:</div>
            <div className="columns-2">
              <div className="container mb-6 mx-auto w-5/6 text-justify text-lg font-serif"><b>Thomas Simpson</b> initially published <b>Simpson&apos;s rule</b> for approximating definite integrals in 1743. It was not Thomas Simpson who made the initial discovery, despite it being named after him. An early version of this rule was discovered in 1639 by Bonaventura Cavalieri. James Gregory published this modification and various other numerical techniques for approximating definite integrals in 1668.</div>
              <div className="container my-6 w-5/6 text-2xl font-bold font-serif">DEFINITION</div>
              <div className="container my-6 mx-auto w-5/6 text-justify text-lg font-serif">Simpson&apos;s Rule is a numerical method for approximating the integral of a function between two limits, a and b. It&apos;s based on knowing the area under a parabola, or a plane curve. It uses parabolas to approximate the area under the curve by creating subintervals, calculating the area and adding them together. </div>
              <Image
              src="/simpsonsrule.png"
              width={500}
              height={500}
              alt="Picture of Simpson's Rule"
              />
            </div>
            <div className="container my-6 mx-auto w-5/6 text-justify text-lg font-serif">Below is the <b>Simpson&apos;s Rule</b>: Assume that <MathJax inline>{"$f(x)$"}</MathJax> is continuous over <MathJax inline>{"$[a, b]$"}</MathJax>. Let <MathJax inline>{"$n$"}</MathJax> be a positive even integer and <MathJax inline>{"$\Delta x=\\frac{b-a}{n}$"}</MathJax>. Let <MathJax inline>{"$[a, b]$"}</MathJax> be divided into <MathJax inline>{"$n$"}</MathJax> subintervals, each of length <MathJax inline>{"$\Delta x$"}</MathJax>, with endpoints at <MathJax inline>{"$\P=\{\\x_0, \\x_1, \\x_2, \\cdots, \\x_n\\}$"}</MathJax>.</div>
            <div className="container bg-secondary p-8 mx-auto w-5/6">
              <div className="container my-6 text-lg font-bold font-serif"> Formula: </div>
              <div className="container my-6 mx-auto text-center text-lg font-serif"> <MathJax inline>{"$\\S_n = \\frac{\Delta x}{3} (f(\\x_0)+4f(\\x_1)+2f(\\x_2)+4f(\\x_3)+2f(\\x_4)+\\cdots+2f(\\x_{n-2})+4f(\\x_{n-1})+f(\\x_n))$"}</MathJax></div>
            </div>
            <div className="container my-6 w-5/6 text-2xl font-bold font-serif">APPLICATION:</div>
            <div className="container my-6 mx-auto w-5/6 text-justify text-lg font-serif">We typically apply the fundamental theorem of calculus to obtain the definite integral, which requires the employment of antiderivative integration techniques. Finding the antiderivative of an integral is challenging in different situations, however, such as scientific experiments where the function needs to be derived from observable data. Numerical methods are applied to approximate the integral in such cases.</div>
            <div className="container my-6 mx-auto w-5/6 text-justify text-lg font-serif">Simpson&apos;s rule finds the values of the definite integral using quadratic or cubic curves, depending on the precision required. Cubic curves provide more precision.</div>
            <div className="container my-6 mx-auto w-4/6 text-lg font-serif">a. Determining static and dynamic reaction forces on surfaces and volumes.</div>
            <div className="container my-6 mx-auto w-4/6 text-lg font-serif">b. When developing a new maritime vessel, resolving buoyancy and stability issues.</div>
            <div className="container my-6 mx-auto w-4/6 text-lg font-serif">c. Calculating average power across an infinite number of voltage and current cycles.</div>
            <div className="container my-6 w-5/6 text-2xl font-bold font-serif">LIMITATIONS:</div>
            <ul className="list-disc container my-6 mx-auto w-5/6 text-justify text-lg font-serif">
              <li>Subintervals must be even. We divide the area into even number of segments. The reason for this is because we integrate two subsections at a time (remember that we are using parabolas to approximate the area)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
