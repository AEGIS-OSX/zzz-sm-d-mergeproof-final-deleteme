"use client";

import Navigation from "@/app/sections/Navigation";
import Hero from "@/app/sections/Hero";
import CraftStory from "@/app/sections/CraftStory";
import ProductTiers from "@/app/sections/ProductTiers";
import Preview from "@/app/sections/Preview";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <main id="top">
      <Navigation />
      <Hero />
      <CraftStory />
      <ProductTiers />
      <Preview />
      <Footer />
    </main>
  );
}
