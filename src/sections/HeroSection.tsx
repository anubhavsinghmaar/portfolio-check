import { ContactButton } from "../components/Buttons";
import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";

const heroPortraitUrl =
  "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Price", href: "#price" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="z-20 flex items-center justify-between gap-4 px-6 pt-6 text-sm font-medium uppercase tracking-[0.3em] text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="transition duration-200 hover:opacity-70"
          >
            {item.label}
          </a>
        ))}
      </FadeIn>

      <FadeIn
        delay={0.15}
        y={40}
        className="relative z-20 mt-6 overflow-hidden px-4 sm:mt-4 sm:px-5 md:-mt-5 md:px-6"
      >
        <h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
          Hi, i&apos;m jack
        </h1>
      </FadeIn>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:w-[360px] sm:translate-y-0 sm:bottom-0 md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={heroPortraitUrl}
            alt="Jack portrait"
            className="h-auto w-full object-contain"
          />
        </Magnet>
      </FadeIn>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-6 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA]">
            a 3d creator driven by crafting striking and unforgettable
            projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton href="mailto:jack@creator.studio" />
        </FadeIn>
      </div>
    </section>
  );
}
