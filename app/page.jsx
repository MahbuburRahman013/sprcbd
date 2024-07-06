"use client";

import Nav from "/components/Nav";
import Hero from "/components/Hero";
import Services from "/components/Services";
import Featured from "/components/Featured";
import Recent from "/components/Recent";
import Footer from "/components/Footer";
import Trust from "/components/Trust";
import Pricing from "/components/Pricing";
import Testimonial from "/components/Testimonial";
import { useRef, useState } from "react";
import Cta1 from "/components/Cta1";
import FourCard from "/components/FourCard";
import Cta2 from "/components/Cta2";
import Portfolio from "/components/Portfolio";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Cta1 />
      <Portfolio />
      <FourCard />
      <Services />
      <Featured />
      <Recent />
      <Trust />
      <Pricing />
      <Testimonial />
      <Cta2 />
      <Footer />
    </>
  );
}
