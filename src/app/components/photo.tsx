import Image from "next/image";

// Foto com moldura; data-reveal e data-parallax são animados pelo HomeMotion
export default function Photo({
  src,
  alt,
  className = "",
  sizes = "100vw",
  parallax = false,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  parallax?: boolean;
  priority?: boolean;
}) {
  return (
    <div
      data-reveal
      data-parallax={parallax || undefined}
      className={`relative overflow-hidden bg-coal ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${parallax ? "scale-[1.16]" : ""}`}
      />
    </div>
  );
}
