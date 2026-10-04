"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type AnimationEvent,
  type CSSProperties,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { PALETTE, DEFAULT_SIZE_INDEX } from "@/data/raifa/ameelee/sizes";
import styles from "./AmeeleeProvider.module.css";

type Ctx = {
  size: number;
  setSize: (i: number) => void;
  go: (href: string, x: number, y: number) => void;
};

type Phase =
  | { state: "idle" }
  | { state: "cover"; href: string; x: number; y: number }
  | { state: "reveal"; x: number; y: number };

const AmeeleeContext = createContext<Ctx | null>(null);

export function useAmeelee() {
  const ctx = useContext(AmeeleeContext);
  if (!ctx) throw new Error("useAmeelee must be used inside AmeeleeProvider");
  return ctx;
}

export default function AmeeleeProvider({ children }: { children: ReactNode }) {
  const [size, setSize] = useState(DEFAULT_SIZE_INDEX);
  const [phase, setPhase] = useState<Phase>({ state: "idle" });
  const router = useRouter();
  const pathname = usePathname();

  const go = useCallback(
    (href: string, x: number, y: number) => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced || href === pathname) {
        router.push(href);
        return;
      }
      setPhase({ state: "cover", href, x, y });
    },
    [pathname, router],
  );

  // new route mounted: open the eclipse
  useEffect(() => {
    setPhase((p) =>
      p.state === "cover" ? { state: "reveal", x: p.x, y: p.y } : p,
    );
  }, [pathname]);

  function onAnimationEnd(e: AnimationEvent<HTMLDivElement>) {
    if (phase.state === "cover" && e.pseudoElement === "::after") {
      router.push(phase.href);
    } else if (phase.state === "reveal" && e.pseudoElement === "") {
      setPhase({ state: "idle" });
    }
  }

  const p = PALETTE[size];
  const vars = { "--c1": p.c1, "--c2": p.c2, "--bg": p.bg } as CSSProperties;

  return (
    <AmeeleeContext.Provider value={{ size, setSize, go }}>
      <div className={styles.root} style={vars}>
        {children}
        {phase.state !== "idle" && (
          <div
            className={`${styles.eclipse} ${phase.state === "cover" ? styles.cover : styles.reveal}`}
            style={
              { "--x": `${phase.x}px`, "--y": `${phase.y}px` } as CSSProperties
            }
            onAnimationEnd={onAnimationEnd}
            aria-hidden="true"
          />
        )}
      </div>
    </AmeeleeContext.Provider>
  );
}
