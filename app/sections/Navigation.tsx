import ProjectImage from "../components/ProjectImage";
import assets from "../../public/assets.json";

export default function Navigation() {
  const logoAsset = assets["logo" as keyof typeof assets];

  return (
    <nav aria-label="Primary" role="banner" className="fixed left-0 top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 md:px-8">
        <a href="/" className="block leading-none">
          {logoAsset?.url ? (
            <ProjectImage id="logo" alt="Margin" className="h-6 w-auto" />
          ) : (
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "14px",
                lineHeight: "1.2",
                fontWeight: 500,
              }}
            >
              Margin
            </span>
          )}
        </a>
      </div>
    </nav>
  );
}
