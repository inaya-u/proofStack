"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { useAmeelee } from "./AmeeleeProvider";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function EclipseLink({
  href,
  children,
  className,
  onClick,
}: Props) {
  const { go } = useAmeelee();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    // let new-tab / modified clicks behave normally
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
      return;
    e.preventDefault();
    onClick?.();

    let x = e.clientX;
    let y = e.clientY;
    // keyboard activation reports 0,0: grow from the link itself
    if (e.detail === 0) {
      const r = e.currentTarget.getBoundingClientRect();
      x = r.left + r.width / 2;
      y = r.top + r.height / 2;
    }
    go(href, x, y);
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
