import Image from "next/image";
import assets from "../../public/assets.json";

interface ProjectImageProps {
  id: string;
  alt: string;
  className?: string;
}

function ProjectImage({ id, alt, className }: ProjectImageProps) {
  const asset = assets[id as keyof typeof assets];

  if (!asset?.url) {
    return (
      <div
        className={className}
        role="img"
        aria-label={alt}
        style={{
          aspectRatio: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--color-bg)",
          border: "1px solid var(--color-divider)",
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="8"
            y="12"
            width="32"
            height="24"
            rx="1"
            stroke="var(--color-text-muted)"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="18"
            cy="22"
            r="3"
            stroke="var(--color-text-muted)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M10 34L18 26L24 32L30 24L38 34"
            stroke="var(--color-text-muted)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  const aspectRatio = asset.width / asset.height;

  return (
    <div
      className={className}
      style={{ aspectRatio: String(aspectRatio), position: "relative" }}
    >
      <Image
        src={asset.url}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default ProjectImage;
