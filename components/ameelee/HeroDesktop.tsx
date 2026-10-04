"use client";

import {
  useMemo,
  useRef,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { SIZES } from "@/data/raifa/ameelee/sizes";
import { useAmeelee } from "./AmeeleeProvider";
import EclipseLink from "./EclipseLink";
import styles from "./HeroDesktop.module.css";

type Props = {
  /** 1 calm, 2 default, 3 unhinged */
  insanity?: 1 | 2 | 3;
};

// how far the moon is allowed to slide off the sun, as a fraction of dial width
const MOON_REACH = { 1: 0.2, 2: 0.32, 3: 0.46 } as const;

function polar(deg: number, r: number) {
  const a = (deg * Math.PI) / 180;
  return { x: r * Math.cos(a), y: r * Math.sin(a) };
}

export default function HeroDesktop({ insanity = 2 }: Props) {
  const { size, setSize } = useAmeelee();

  const stageRef = useRef<HTMLElement>(null);
  const dialRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<SVGLineElement>(null);

  // 60 ticks, 10 per size segment. Segment i is centred on angle -90 + i*60.
  const ticks = useMemo(
    () =>
      Array.from({ length: 60 }, (_, k) => {
        const angle = -120 + k * 6;
        const len = k % 10 === 0 ? 30 : k % 5 === 0 ? 20 : 12;
        const a = polar(angle, 300);
        const b = polar(angle, 300 + len);
        return {
          k,
          seg: Math.floor(k / 10),
          x1: a.x,
          y1: a.y,
          x2: b.x,
          y2: b.y,
        };
      }),
    [],
  );

  const labels = useMemo(
    () => SIZES.map((s, i) => ({ s, i, ...polar(-90 + i * 60, 365) })),
    [],
  );

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    const stage = stageRef.current;
    const dial = dialRef.current;
    const moon = moonRef.current;
    const needle = needleRef.current;
    if (!stage || !dial || !moon || !needle) return;

    const r = dial.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    // which 60° segment is the cursor in
    setSize(Math.floor(((((angle + 120) % 360) + 360) % 360) / 60));

    // moon slides toward the cursor
    const d = Math.min(Math.hypot(dx, dy) / r.width, MOON_REACH[insanity]);
    const rad = (angle * Math.PI) / 180;
    moon.style.transform = `translate(${Math.cos(rad) * d * r.width}px, ${Math.sin(rad) * d * r.width}px)`;

    // needle
    const from = polar(angle, 250);
    const to = polar(angle, 325);
    needle.setAttribute("x1", String(from.x));
    needle.setAttribute("y1", String(from.y));
    needle.setAttribute("x2", String(to.x));
    needle.setAttribute("y2", String(to.y));

    // headline echo offset (insanity 3)
    stage.style.setProperty(
      "--sx",
      `${(e.clientX / window.innerWidth - 0.5) * 18}px`,
    );
    stage.style.setProperty(
      "--sy",
      `${(e.clientY / window.innerHeight - 0.5) * 18}px`,
    );
  }

  function onKey(e: KeyboardEvent<SVGTextElement>, i: number) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSize(i);
    }
  }

  return (
    <section
      ref={stageRef}
      className={styles.stage}
      data-level={insanity}
      onPointerMove={onPointerMove}
      aria-label="Dubai Abayas collection"
    >
      <div ref={dialRef} className={styles.dial}>
        <div className={`${styles.disc} ${styles.corona}`} />
        <div className={`${styles.disc} ${styles.sun}`} />
        <div ref={moonRef} className={`${styles.disc} ${styles.moon}`}>
          <span>{SIZES[size]}</span>
        </div>

        {/* orbiting announcement text */}
        <svg
          className={`${styles.layer} ${styles.ring}`}
          viewBox="-450 -450 900 900"
          aria-hidden="true"
        >
          <defs>
            <path
              id="ameelee-orbit"
              d="M0,-415 a415,415 0 1,1 0,830 a415,415 0 1,1 0,-830"
            />
          </defs>
          <text>
            <textPath
              href="#ameelee-orbit"
              textLength={2600}
              lengthAdjust="spacing"
            >
              AMEELEE ABAYA · CAC REGISTERED · DUBAI ABAYAS &amp; JALABIYA ·
              WORLDWIDE SHIPPING · SIZES 54 TO 64 ·
            </textPath>
          </text>
        </svg>

        {/* the size dial */}
        <svg className={styles.layer} viewBox="-450 -450 900 900">
          <g>
            {ticks.map((t) => (
              <line
                key={t.k}
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
                className={`${styles.tick} ${t.seg === size ? styles.tickOn : ""}`}
              />
            ))}
          </g>
          <g>
            {labels.map((l) => (
              <text
                key={l.s}
                x={l.x}
                y={l.y}
                role="button"
                tabIndex={0}
                aria-label={`Size ${l.s}`}
                aria-pressed={l.i === size}
                className={`${styles.num} ${l.i === size ? styles.numOn : ""}`}
                onClick={() => setSize(l.i)}
                onKeyDown={(e) => onKey(e, l.i)}
              >
                {l.s}
              </text>
            ))}
          </g>
          <line
            ref={needleRef}
            className={styles.needle}
            x1="0"
            y1="0"
            x2="0"
            y2="0"
          />
        </svg>
      </div>

      <div className={styles.copy}>
        <h1 className={styles.title}>
          DUBAI
          <br />
          ABAYAS.
        </h1>
        <p className={styles.sub}>
          YOUR SIZE <b>{SIZES[size]}</b>.
          <br />
          YOUR STYLE.
        </p>
        <p className={styles.tag}>Premium. Extended sizes. Ready to ship.</p>
        <EclipseLink href="/ameelee/shop" className={styles.cta}>
          EXPLORE COLLECTION
        </EclipseLink>
      </div>
    </section>
  );
}
