import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"] });

const colors = ["#ecee15", "#f03636", "#36cbf0", "#DD71b0", "#22DDb9"];
const sizes = [0, 1, 2, 3, 4];

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider({
    drag: false,
    loop: false,
    initial: 0,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 0,
    },
    defaultAnimation: { duration: 600 },
    vertical: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  return (
    <main>
      <div ref={sliderRef} className="keen-slider h-screen relative">
        {/* COLORS */}
        <section className="relative keen-slider__slide section section-1 bg-blue-500">
          <div className="flex justify-center items-center flex-col h-full">
            <h2 className="text-white text-5xl font-neoSansProRegular mb-10">
              Farbe wählen
            </h2>
            <div className="flex gap-4 mb-20">
              {colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    className={cn(
                      "cursor-pointer rounded-xl h-20 w-20 shadow-2xl",
                      selectedColorIndex === index
                        ? "border-8 border-white "
                        : ""
                    )}
                    style={{ backgroundColor: colors[index] }}
                    onClick={(e) => {
                      setSelectedColorIndex(index);
                    }}
                  />
                );
              })}
            </div>
            {loaded && instanceRef.current && (
              <button
                className="z-10 cursor-pointer px-10 py-5 bg-green-500 text-white font-bold text-4xl rounded-xl shadow-2xl"
                onClick={(e: any) => {
                  console.log("klacked");
                  instanceRef.current?.next();
                }}
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              >
                WEITER &darr;
              </button>
            )}
          </div>
        </section>

        {/* SIZES */}
        <section className="keen-slider__slide section section-1 bg-red-600">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-white text-5xl font-neoSansProRegular mb-10">
              Größe wählen
            </h2>
            <div className="flex gap-4 mb-20 items-baseline">
              {sizes.map((color, index) => {
                return (
                  <div
                    key={index}
                    className={cn(
                      "cursor-pointer rounded-xl h-20 w-20 shadow-2xl",
                      selectedSizeIndex === index
                        ? "border-8 border-white "
                        : ""
                    )}
                    onClick={() => setSelectedSizeIndex(index)}
                    style={{
                      width: 5 + index + "rem",
                      height: 5 + index + "rem",
                      backgroundColor: colors[selectedColorIndex],
                    }}
                  />
                );
              })}
            </div>
            {loaded && instanceRef.current && (
              <button
                className="z-10 cursor-pointer px-10 py-5 bg-green-500 text-white font-bold text-4xl rounded-xl shadow-2xl"
                onClick={(e: any) => {
                  console.log("klacked");
                  instanceRef.current?.next();
                }}
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              >
                WEITER &darr;
              </button>
            )}
            {loaded && instanceRef.current && (
              <button
                className="absolute top-36 left-20 z-10 cursor-pointer px-10 py-5 text-white font-bold text-4xl rounded-xl shadow-2xl border-2"
                onClick={(e: any) => {
                  console.log("klacked");
                  instanceRef.current?.prev();
                }}
              >
                ZURÜCK &uarr;
              </button>
            )}
          </div>
        </section>

        {/* 3 */}
        <section className="keen-slider__slide section section-1 bg-green-600">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-white text-5xl font-neoSansProRegular mb-10">
              Größe wählen
            </h2>
            <div className="flex gap-4 mb-20 items-baseline">
              {sizes.map((color, index) => {
                return (
                  <div
                    key={index}
                    className={cn(
                      "cursor-pointer rounded-xl h-20 w-20 shadow-2xl",
                      selectedSizeIndex === index
                        ? "border-8 border-white "
                        : ""
                    )}
                    onClick={() => setSelectedSizeIndex(index)}
                    style={{
                      width: 5 + index + "rem",
                      height: 5 + index + "rem",
                      backgroundColor: colors[selectedColorIndex],
                    }}
                  />
                );
              })}
            </div>
            {loaded && instanceRef.current && (
              <button
                className="absolute top-36 left-20 z-10 cursor-pointer px-10 py-5 text-white font-bold text-4xl rounded-xl shadow-2xl border-2"
                onClick={(e: any) => {
                  console.log("klacked");
                  instanceRef.current?.prev();
                }}
              >
                ZURÜCK &uarr;
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
