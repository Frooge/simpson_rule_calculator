'use client'

import { useEffect } from "react";
import Fraction from "@/utils/fraction";

export default function Guide() {
  useEffect(() => {
    const test = new Fraction(3, 2).add(0.5)
    console.log(test, test.toString())
  })
  return (
    <div>Guides</div>
  );
}
