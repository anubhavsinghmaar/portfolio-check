import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

type AnimatedCharacterProps = {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function AnimatedCharacter({
  char,
  index,
  total,
  progress,
}: AnimatedCharacterProps) {
  const start = index / total;
  const end = Math.min(start + 0.18, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const displayChar = char === " " ? "\u00A0" : char;

  return (
    <span className="relative inline-block">
      <span className="invisible">{displayChar}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {displayChar}
      </motion.span>
    </span>
  );
}

type AnimatedTextProps = {
  text: string;
  className?: string;
};

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p
      ref={ref}
      className={`whitespace-pre-wrap text-center ${className}`}
      aria-label={text}
    >
      {[...text].map((char, index) => (
        <AnimatedCharacter
          key={`${char}-${index}`}
          char={char}
          index={index}
          total={text.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
