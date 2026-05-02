import { motion } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren } from "react";

type FadeInProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    as?: keyof JSX.IntrinsicElements;
    delay?: number;
    duration?: number;
    x?: number;
    y?: number;
  }
>;

export function FadeIn({
  as = "div",
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...props
}: FadeInProps) {
  const MotionTag = motion.create(as as never);

  return (
    <MotionTag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
