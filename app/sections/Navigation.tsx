import { ProjectImage } from "../components/ProjectImage";

export default function Navigation() {
  return (
    <nav aria-label="Primary" className="fixed top-0 left-0 right-0 w-full z-50 bg-transparent">
      <div className="mx-auto flex h-[var(--space-lg)] max-w-[1280px] items-center px-[var(--space-2xs)] md:px-[var(--space-sm)]">
        <a href="/" className="block leading-none">
          <ProjectImage id="logo" alt="Margin" className="h-6 w-auto" />
        </a>
      </div>
    </nav>
  );
}
