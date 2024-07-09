/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useMemo, useState } from "react";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: "y" });
  const test = [
    "This is the body",
    "This is the body",
    "This is the body",
    "This is the body",
  ];

  return (
    <section className="embla">
      <div
        className="full overflow-hidden border-2 border-solid border-black rounded-3xl"
        ref={emblaRef}
      >
        <div className="embla__container">
          {test.map((item, index) => (
            <div key={item + index} className="embla-slide">
              This is the body
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
