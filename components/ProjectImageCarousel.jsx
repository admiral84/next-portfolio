"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  require("../assets/ecole_att/i1.png"),
  require("../assets/ecole_att/i2.png"),
  require("../assets/ecole_att/i3.png"),
  require("../assets/ecole_att/i4.png"),
  require("../assets/ecole_att/i5.png"),
  require("../assets/ecole_att/i6.png"),
  require("../assets/ecole_att/i7.png"),
  require("../assets/ecole_att/i8.png"),
  require("../assets/ecole_att/i9.png"),
  require("../assets/ecole_att/i10.png"),
  
];
export default function ProjectImageCarousel() {
const [current, setCurrent] = useState(0);

const previous = () => {
setCurrent((index) => (index - 1 + images.length) % images.length);
};

const next = () => {
setCurrent((index) => (index + 1) % images.length);
};

return ( <div className="mt-6"> <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-line bg-bg">
<Image
src={images[current]}
alt={`Project screenshot ${current + 1}`}
fill
sizes="(max-width: 1024px) 100vw, 33vw"
className="object-contain"
priority={current === 0}
/>


    <button
      type="button"
      onClick={previous}
      aria-label="Previous screenshot"
      className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
    >
      <ChevronLeft size={22} />
    </button>

    <button
      type="button"
      onClick={next}
      aria-label="Next screenshot"
      className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
    >
      <ChevronRight size={22} />
    </button>

    <span className="absolute bottom-3 right-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
      {current + 1} / {images.length}
    </span>
  </div>

  <div className="mt-3 flex flex-wrap justify-center gap-2">
    {images.map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setCurrent(index)}
        aria-label={`Show screenshot ${index + 1}`}
        aria-current={current === index ? "true" : undefined}
        className={`h-2.5 w-2.5 rounded-full transition-colors ${
          current === index
            ? "bg-accent"
            : "bg-line hover:bg-accent/50"
        }`}
      />
    ))}
  </div>
</div>


);
}
