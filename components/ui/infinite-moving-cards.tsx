"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    region1: string;
    region2: string;
    image1?: string;
    image1Width?: number;
    image1Height?: number;
    image1Style?: string;
    image2?: string;
    image2Width?: number;
    image2Height?: number;
    image2Style?: string;
    // date: string;
    // content: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden  !font-pretendard",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          // pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[200px] max-w-full shrink-0 rounded-2xl border border-b-0 px-8 py-6 md:w-[250px] md:h-[150px] border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)] overflow-hidden"
            key={item.region1}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="relative z-20 flex flex-row items-center z-[2]">
                <span className="relative z-20 text-3xl leading-[1] font-bold text-gray-200">
                  {item.region1}
                </span>
              </div>
              <div className="relative z-20 flex flex-row items-center mt-3 z-[2]">
                <span className="relative z-20 text-[14px] leading-[1] font-semibold text-gray-300 break-words">
                  {item.region2}
                </span>
              </div>
              <Image src={`/assets/trip/${item.region1}_me.png`} alt={item.region1} width={200} height={200} className={`absolute top-0 right-0 z-[3] ${item?.image1Style ?? ''}`} style={{ width: item?.image1Width ?? 'auto', height: item?.image1Height ?? 'auto' }} />
              <Image src={`/assets/trip/${item.region1}_background.png`} alt={item.region1} width={200} height={200} className={`absolute bottom-0 right-0 h-[100px] w-auto object-cover z-[1] ${item?.image2Style ?? ''}`} style={{ width: item?.image2Width ?? 'auto', height: item?.image2Height ?? 'auto' }} />

              {/* <div className="relative z-20 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-gray-400">
                    {item.date}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-gray-400">
                    {item.content}
                  </span>
                </span>
              </div> */}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
