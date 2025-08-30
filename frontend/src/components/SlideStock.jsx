import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const stocks = [
  { name: "Apple", price: 184.2, change: "+1.5%" },
  { name: "Google", price: 2741.5, change: "-0.8%" },
  { name: "Amazon", price: 3450.1, change: "+2.3%" },
  { name: "Tesla", price: 691.8, change: "-1.2%" },
  { name: "Microsoft", price: 299.4, change: "+0.9%" },
  { name: "Meta", price: 325.7, change: "-0.5%" },
];

const SlideStock = () => {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;

    // Duplicate content for seamless loop
    const tickerWidth = ticker.scrollWidth / 2;

    // GSAP infinite scrolling animation
    gsap.to(ticker, {
      x: -tickerWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    // Pause on hover
    ticker.addEventListener("mouseenter", () => gsap.to(ticker, { timeScale: 0, duration: 0.3 }));
    ticker.addEventListener("mouseleave", () => gsap.to(ticker, { timeScale: 1, duration: 0.3 }));

    return () => {
      ticker.removeEventListener("mouseenter", () => { });
      ticker.removeEventListener("mouseleave", () => { });
    };
  }, []);

  return (
    <div className="w-full bg-[#F9F0D3]
 py-3 overflow-hidden">
      <div className="relative flex w-max" ref={tickerRef}>
        {/* Stocks duplicated for seamless loop */}
        {[...stocks, ...stocks].map((stock, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-6 py-2 bg-white shadow mx-2 rounded-lg min-w-[200px]"
          >
            <span className="font-semibold text-gray-800">{stock.name}</span>
            <span className="text-gray-600">${stock.price}</span>
            <span
              className={`font-bold ${stock.change.startsWith("+") ? "text-green-600" : "text-red-600"
                }`}
            >
              {stock.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideStock;
