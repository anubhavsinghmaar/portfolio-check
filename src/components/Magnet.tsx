import {
  type PropsWithChildren,
  type HTMLAttributes,
  useEffect,
  useRef,
} from "react";

type MagnetProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    padding?: number;
    strength?: number;
    activeTransition?: string;
    inactiveTransition?: string;
  }
>;

export function Magnet({
  children,
  className = "",
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  ...props
}: MagnetProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const reset = () => {
      node.style.transition = inactiveTransition;
      node.style.transform = "translate3d(0px, 0px, 0px)";
    };

    const handlePointerMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const isActive =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding &&
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding;

      if (!isActive) {
        reset();
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const translateX = (event.clientX - centerX) / strength;
      const translateY = (event.clientY - centerY) / strength;

      node.style.transition = activeTransition;
      node.style.transform = `translate3d(${translateX}px, ${translateY}px, 0px)`;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, [activeTransition, inactiveTransition, padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform" }}
      {...props}
    >
      {children}
    </div>
  );
}
