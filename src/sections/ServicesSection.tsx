import { FadeIn } from "../components/FadeIn";

const services = [
  {
    number: "01",
    name: "3D Modeling",
    description:
      "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    number: "02",
    name: "Rendering",
    description:
      "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    number: "03",
    name: "Motion Design",
    description:
      "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    number: "04",
    name: "Branding",
    description:
      "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    number: "05",
    name: "Web Design",
    description:
      "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="price"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28">
        <h2 className="text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl border-y border-[rgba(12,12,12,0.15)]">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            y={30}
            className="border-b border-[rgba(12,12,12,0.15)] last:border-b-0"
          >
            <div className="flex flex-col gap-4 py-8 sm:gap-6 sm:py-10 md:flex-row md:gap-10 md:py-12">
              <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none tracking-tight">
                {service.number}
              </span>
              <div className="flex flex-col gap-3 md:pt-2">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase tracking-[0.12em]">
                  {service.name}
                </h3>
                <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
