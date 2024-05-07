"use client"
import { MathJax } from "better-react-mathjax";
import React, { useState } from 'react';
import Image from 'next/image'

export default function Guide() {
  return (
    <div>
      <div className="flex flex-row justify-center w-full max-w-7xl gap-6">
        <div className="flex flex-row flex-wrap gap-2 w-full max-w-7xl my-2 self-start">
          <div className="container mx-auto w-5/6" >
            <div className="container my-6 w-5/6 text-4xl font-bold font-serif text-primary">History.</div>
            <div className="flex flex-row gap-4">
              <Image
              src="/ThomasSimpson.jpg"
              width={500}
              height={500}
              alt="Picture of Thomas Simpson"
              />
                <div className="container mb-6 mx-auto px-9 w-5/6 text-justify text-2xl font-serif"><b className="text-primary">Thomas Simpson</b> initially published <b className="text-primary">Simpson&apos;s rule</b> for approximating definite integrals in 1743. It was not Thomas Simpson who made the initial discovery, despite it being named after him. An early version of this rule was discovered in 1639 by Bonaventura Cavalieri. James Gregory published this modification and various other numerical techniques for approximating definite integrals in 1668.</div>
            </div>
              <div className="columns-2">
              <div className="container my-6 w-5/6 text-4xl font-bold font-serif text-primary ">Definition.</div>
              <div className="container my-6 mx-auto w-5/6 text-justify text-2xl font-serif ">Simpson&apos;s Rule is <span className="text-primary">a numerical method</span> for approximating the integral of a function between two limits, a and b. It&apos;s based on knowing the area under a parabola, or a plane curve. It uses parabolas to approximate the area under the curve by creating subintervals, calculating the area and adding them together. </div>
              <Image
              src="/simpsonsrule.png"
              width={500}
              height={500}
              alt="Picture of Simpson's Rule"
              />
            </div>
            <div className="container my-6 mx-auto w-5/6 text-justify text-2xl font-serif  text-primary ">Below is the <b>Simpson&apos;s Rule</b>: Assume that <MathJax inline>{"$f(x)$"}</MathJax> is continuous over <MathJax inline>{"$[a, b]$"}</MathJax>. Let <MathJax inline>{"$n$"}</MathJax> be a positive even integer and <MathJax inline>{"$\Delta x=\\frac{b-a}{n}$"}</MathJax>. Let <MathJax inline>{"$[a, b]$"}</MathJax> be divided into <MathJax inline>{"$n$"}</MathJax> subintervals, each of length <MathJax inline>{"$\Delta x$"}</MathJax>, with endpoints at <MathJax inline>{"$\P=\{\\x_0, \\x_1, \\x_2, \\cdots, \\x_n\\}$"}</MathJax>.</div>
            <div className="container bg-secondary p-8 mx-auto w-5/6">
              <div className="container my-6 text-2xl font-bold font-serif text-primary"> Formula: </div>
              <div className="container my-6 mx-auto text-center text-lg font-serif text-primary"> <MathJax inline>{"$\\S_n = \\frac{\Delta x}{3} (f(\\x_0)+4f(\\x_1)+2f(\\x_2)+4f(\\x_3)+2f(\\x_4)+\\cdots+2f(\\x_{n-2})+4f(\\x_{n-1})+f(\\x_n))$"}</MathJax></div>
            </div>
            <div className="container my-6 w-5/6 text-4xl font-bold font-serif text-primary">Real World Applications.</div>
            <div className="container my-6 mx-auto w-5/6 text-justify font-serif text-2xl">We typically apply the fundamental theorem of calculus to obtain the definite integral, which requires the employment of antiderivative integration techniques. Finding the antiderivative of an integral is challenging in different situations, however, such as scientific experiments where the function needs to be derived from observable data. Numerical methods are applied to approximate the integral in such cases.</div>
            <div className="container my-6 mx-auto w-5/6 text-justify text-2xl font-serif">Simpson&apos;s rule finds the values of the definite integral using quadratic or cubic curves, depending on the precision required. Cubic curves provide more precision.</div>
            <div className="container my-6 mx-auto w-4/6 text-2xl font-serif">a. Determining static and dynamic reaction forces on surfaces and volumes.</div>
            <div className="container my-6 mx-auto w-4/6 text-2xl font-serif">b. When developing a new maritime vessel, resolving buoyancy and stability issues.</div>
            <div className="container my-6 mx-auto w-4/6 text-2xl font-serif">c. Calculating average power across an infinite number of voltage and current cycles.</div>
            <div className="container my-6 w-5/6 text-4xl font-bold font-serif text-primary ">Scope and Limitations.</div>
            <ul className="list-disc container my-6 mx-auto w-5/6 text-justify text-2xl font-serif flex-col space-y-6">
              <li><span className="font-bold text-primary">Subintervals must be even.</span> We divide the area into even number of segments. The reason for this is because we integrate two subsections at a time (remember that we are using parabolas to approximate the area)</li>
              <li><span className="font-bold text-primary">Inapplicable to Improper Integrals.</span> Integrals with infinite interval, the given function approaches zero as x approaches infinity.</li>
              <li className="text-primary">Integral with Infinite Interval. The function approaches zero as x approaches infinity</li>
              <div className="flex flex-row items-center justify-center">
                <MathJax  inline>{"$int_{1}^{infty} frac{1}{x^2} , dx$"}</MathJax>
              </div>
              <li className="text-primary">Integral with a Singularity. Has a singularity at 𝑥 = 0 . As 𝑥 approaches 0 from the right, the function approaches infinity. </li>
              <div className="flex flex-row items-center justify-center">
                <MathJax  inline>{"$int_{0}^{1} frac{1}{sqrt{x}} , dx$"}</MathJax>
              </div>
            </ul>
            <div className="container my-6 w-5/6 text-4xl font-bold font-serif text-primary ">Conclusion.</div>
            <div className="container my-6 mx-auto w-5/6 text-justify font-serif text-2xl">Simpson&apos;s Rule is a numerical integration method used to approximate the definite integral of a function. What makes it unique compared to other numerical integration techniques like the trapezoidal rule is its use of quadratic approximations. Instead of approximating the function with straight lines (as in the trapezoidal rule), Simpson&apos;s Rule uses quadratic polynomials to approximate the curve of the function between each pair of points.</div>
            <div className="container my-6 mx-auto w-5/6 text-justify font-serif text-2xl">This quadratic approximation allows Simpson&apos;s Rule to provide a more accurate estimation of the integral, especially for functions that are well-behaved and smooth. It typically converges to the exact value of the integral faster than the trapezoidal rule for functions that are sufficiently smooth.</div>
            <div className="container my-6 mx-auto w-5/6 text-justify font-serif text-2xl">Another unique aspect of Simpson&apos;s Rule is its simplicity in implementation. It involves dividing the interval of integration into subintervals and applying a formula that combines the function values at the endpoints and midpoint of each subinterval to compute the approximation. This simplicity makes it a popular choice for numerical integration in various fields, including mathematics, physics, engineering, and computer science.</div>
            <div className="container my-6 w-5/6 text-4xl font-bold font-serif text-primary ">Learning Outcomes.</div>
            <div className="container my-6 mx-auto w-5/6 text-justify font-serif text-2xl">We created this website in order to fully understand Simpson&apos;s Rule and to create a calculator that shows the process of the this numerical integration.</div>
            <div className="container my-6 w-5/6 text-4xl font-bold font-serif text-primary ">Other Sources.</div>
            <div className="grid grid-flow-row grid-cols-2 gap-y-8">
              <iframe width="500" height="315" src="https://www.youtube.com/embed/IGC_tEOsdQ8?si=AGzRZG8xiyVpLq5q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe width="500" height="315" src="https://www.youtube.com/embed/JjUn5waLJ-o?si=qcZ0k43DpfMuoFB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe width="500" height="315" src="https://www.youtube.com/embed/DdNAcv_rezc?si=bajm0tUiP8QejNP3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe width="500" height="315" src="https://www.youtube.com/embed/7MoRzPObRf0?si=mIS9xsa1ttuboyRr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
