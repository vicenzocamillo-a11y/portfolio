"use client";
import { useEffect, useRef, useState } from 'react';

const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 800;

/**
 * Shows the real site in a scaled-down, non-interactive iframe.
 * The whole frame links out; the project name sits underneath in case the site fails to load.
 */
export default function LivePreview({ url, title, label }: { url: string; title: string; label: string }) {
  const boxRef = useRef<HTMLAnchorElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / FRAME_WIDTH));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <figure>
      <a
        ref={boxRef}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label}: ${title}`}
        className="group relative block aspect-[16/10] overflow-hidden rounded-[18px] bg-raised shadow-[0_0_0_1px_rgb(var(--line)/0.8),0_20px_40px_-20px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out hover:scale-[1.01] active:scale-[0.99]"
      >
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-muted">
          {title}
        </span>
        {scale > 0 && (
          <iframe
            src={url}
            title={`${label}: ${title}`}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
            style={{ width: FRAME_WIDTH, height: FRAME_HEIGHT, transform: `scale(${scale})` }}
          />
        )}
      </a>
      <figcaption className="mt-3 text-xs text-muted">{label}</figcaption>
    </figure>
  );
}
