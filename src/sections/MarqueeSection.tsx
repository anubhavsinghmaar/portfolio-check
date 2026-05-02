import { useEffect, useRef, useState } from "react";

const marqueeImages = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

function tripleImages(images: string[]) {
  return [...images, ...images, ...images];
}

function MarqueeRow({
  images,
  translateX,
}: {
  images: string[];
  translateX: number;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-3"
        style={{
          transform: `translateX(${translateX}px)`,
          willChange: "transform",
        }}
      >
        {images.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt={`Portfolio showcase ${index + 1}`}
            loading="lazy"
            className="h-[270px] w-[420px] rounded-2xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateOffset = () => {
      frame = 0;

      if (!sectionRef.current) {
        return;
      }

      const sectionTop =
        window.scrollY + sectionRef.current.getBoundingClientRect().top;
      const nextOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      setOffset(nextOffset);
    };

    const handleScroll = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const rowOne = tripleImages(marqueeImages.slice(0, 11));
  const rowTwo = tripleImages(marqueeImages.slice(11));
  const translate = offset - 200;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] px-3 pb-10 pt-24 sm:px-4 sm:pt-32 md:px-5 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={rowOne} translateX={translate} />
        <MarqueeRow images={rowTwo} translateX={-translate} />
      </div>
    </section>
  );
}
