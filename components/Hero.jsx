"use client";

import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";

export default function Hero() {
  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const animatedDivRef = useRef(null);

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  const handleSlideChangeTransitionStart = () => {
    if (animatedDivRef.current) {
      const elements = animatedDivRef.current.querySelectorAll(
        ".slide-content h1, .slide-content p, .slide-content a"
      );
      elements.forEach((element) => {
        element.classList.remove("aos-init");
        element.classList.remove("aos-animate");
      });
    }
  };

  const handleSlideChangeTransitionEnd = () => {
    AOS.refresh();
    AOS.init();
  };
  return (
    <section className="hero">
     
    </section>
  );
}
