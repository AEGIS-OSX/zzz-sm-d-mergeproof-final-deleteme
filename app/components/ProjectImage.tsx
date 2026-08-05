import assets from "../../public/assets.json";

type AssetKey = keyof typeof assets;

interface ProjectImageProps {
  id: AssetKey;
  className?: string;
  alt?: string;
  priority?: boolean;
  fetchpriority?: "high" | "low" | "auto";
}

export function ProjectImage({
  id,
  className,
  alt,
  priority,
  fetchpriority,
}: ProjectImageProps) {
  const asset = assets[id];

  if (!asset?.url) {
    return (
      <div className={className}>
        {alt ?? ""}
      </div>
    );
  }

  const resolvedAlt = alt ?? asset.alt;
  const resolvedFetchPriority = priority
    ? "high"
    : fetchpriority ?? undefined;
  const resolvedLoading = priority ? "eager" : "lazy";

  return (
    <img
      src={asset.url}
      alt={resolvedAlt}
      width={asset.width}
      height={asset.height}
      className={className}
      loading={resolvedLoading}
      fetchpriority={resolvedFetchPriority}
    />
  );
}
