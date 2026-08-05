"use client";

import Navigation from "@/app/components/Navigation";
import Hero from "@/app/components/Hero";
import CraftStory from "@/app/components/CraftStory";
import ProductTiers from "@/app/components/ProductTiers";
import Preview from "@/app/components/Preview";
import Footer from "@/app/components/Footer";

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
