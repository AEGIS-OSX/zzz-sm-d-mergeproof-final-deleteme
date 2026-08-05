"use client";

import ProjectCopy from "@/app/components/ProjectCopy";
import ProjectImage from "@/app/components/ProjectImage";

export default function Home() {
  return (
    <main id="top">
      <ProjectCopy />
      <ProjectImage id="hero" />
      <ProjectImage id="feature_1" />
      <ProjectImage id="feature_2" />
      <ProjectImage id="feature_3" />
      <ProjectImage id="social_proof" />
      <ProjectImage id="logo" />
    </main>
  );
}
