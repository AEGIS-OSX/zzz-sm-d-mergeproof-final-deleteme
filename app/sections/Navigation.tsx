import ProjectImage from "../components/ProjectImage";

export default function Navigation() {
  return (
    <nav aria-label="Primary" role="banner" className="fixed left-0 top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center px-4 md:px-8">
        <a href="/" className="block leading-none">
          <ProjectImage id="logo" alt="Margin" className="h-6 w-auto" />
        </a>
      </div>
    </nav>
  );
}
