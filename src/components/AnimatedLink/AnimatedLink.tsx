import Link, { LinkProps } from "next/link";
import styles from "./style.module.css";
import { motion, useAnimate } from "framer-motion";
import { ComponentProps } from "react";
const MotionLink = motion(Link);
type Props = ComponentProps<typeof MotionLink>;

export default function AnimatedLink({
  href,
  children,
  className,
  onHoverStart,
  onHoverEnd,
  ...rest
}: Props) {
  const [scope, animate] = useAnimate();

  return (
    <MotionLink
      ref={scope}
      className={`${className} uppercase relative text-mydark font-extrabold lg:font-semibold text-lg lg:text-base`}
      href={href}
      onHoverStart={() => {
        animate(".link", { width: "100%" }, { duration: 0.1 });
      }}
      onHoverEnd={() => {
        animate(".link", { width: 0 }, { duration: 0.1 });
      }}
      {...rest}
    >
      <span className="link w-0 h-[1.4px] bg-mydark absolute bottom-0 left-1/2 -translate-x-1/2"></span>
      {children}
    </MotionLink>
  );
}
